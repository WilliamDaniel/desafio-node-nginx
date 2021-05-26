FROM node:14.17.0 AS build

WORKDIR /usr/src/app

RUN apt-get update && apt-get install vim -y

RUN npm cache clean --force && \
    npm install -g npm@latest && \
    npm init -y && \
    npm install -g @angular/cli

COPY ./des02/ .

RUN ng build 

WORKDIR /usr/src/app/dist/des02

FROM nginx:1.10-alpine AS dist

WORKDIR /usr/src/deploy

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/mime.types /etc/nginx/mime.types
COPY  --from=build /usr/src/app/dist/des02/ /usr/share/nginx/html/







