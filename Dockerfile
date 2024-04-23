FROM node:20.12.2 AS base

# Install dependencies only when needed
FROM base AS package

COPY package.json yarn.lock* /app/
WORKDIR /app

RUN corepack enable
RUN yarn set version stable
RUN yarn --network-timeout 1000000

COPY . /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

RUN rm -rf src .next/cache

CMD [ "yarn", "start" ]
