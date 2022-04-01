FROM node:14-alpine as installer

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .npmrc .npmrc
RUN npm ci

FROM installer AS build

WORKDIR /app
COPY tsconfig.json tsconfig.json
COPY index.html index.html
COPY src src
COPY public public
COPY vite.config.ts vite.config.ts

ARG OUTLINE
RUN npm run build

FROM nginx AS production

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./inject_env.sh .

RUN chmod +x inject_env.sh

EXPOSE 80

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/inject_env.sh && nginx -g \"daemon off;\""]