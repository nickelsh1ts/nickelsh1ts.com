FROM node:20-alpine AS base

# Setup env variabless for yarn and nextjs
# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production YARN_VERSION=4.1.1

# update dependencies, add libc6-compat and dumb-init to the base image
RUN apk update && apk upgrade && apk add --no-cache libc6-compat && apk add dumb-init

RUN corepack enable && corepack prepare yarn@${YARN_VERSION}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install dependencies only when needed
FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock* ./

RUN echo 'nodeLinker: "node-modules"' > ./.yarnrc.yml
RUN yarn --immutable --network-timeout 1000000

ENV NEXT_PRIVATE_STANDALONE true

COPY src ./src
COPY public ./public
COPY next.config.mjs tsconfig.json tailwind.config.ts postcss.config.js ./

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app


COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

USER nextjs

EXPOSE 3024
ENV PORT 3024

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
