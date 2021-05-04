FROM node:15.14

WORKDIR /usr/src/app

COPY package*.json, yarn*.json ./usr/src/app/

RUN npm install 

COPY . .

CMD ["yarn", "start"]