FROM node:lts-alpine

COPY . .

RUN npm install