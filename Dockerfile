FROM node:12

COPY package.json package.json

RUN npm install

COPY . .
