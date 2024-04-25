FROM node:20-alpine AS base

# Rebuild the source code only when needed
FROM base AS builder

RUN corepack enable

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* ./

RUN echo 'nodeLinker: "node-modules"' > ./.yarnrc.yml
RUN yarn set version stable
RUN yarn --frozen-lockfile --network-timeout 1000000

ENV NEXT_PRIVATE_STANDALONE true

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
