FROM node:20 AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20 AS runtime
WORKDIR /app
COPY --from=builder /app/.output /app/.output
ENTRYPOINT ["node", ".output/server/index.mjs"]
EXPOSE 3000
