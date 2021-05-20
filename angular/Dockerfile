FROM node:14.17.0

WORKDIR /usr/src/app/des02

RUN apt-get update && apt-get install

RUN npm cache clean --force && \
    npm install -g npm@latest && \
    npm init -y && \
    npm install -g @angular/cli

COPY ["./app/des02/src", "."]

RUN npm install

CMD ["ng", "s"]

