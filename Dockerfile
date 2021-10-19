FROM node:14-alpine as installer

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .npmrc .npmrc
RUN npm ci -q

FROM installer AS build

WORKDIR /app
COPY tsconfig.json tsconfig.json
COPY index.html index.html
COPY src src
COPY public public

ARG OUTLINE
RUN npm run build

FROM nginx AS production

WORKDIR /app

COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
