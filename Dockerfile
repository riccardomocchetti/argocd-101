FROM node:latest

WORKDIR /app
ADD app.js .

CMD node app.js