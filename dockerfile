FROM node:latest

WORKDIR /app

COPY ["package.json", "./"]
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
COPY . .

CMD [ "node", "server.js" ] 