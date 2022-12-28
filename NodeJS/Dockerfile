FROM node:latest

RUN mkdir -p /usr/src/server.js

WORKDIR /usr/src/server.js

COPY package.json /usr/src/server.js/

RUN npm i

COPY . /usr/src/server.js/

EXPOSE 7500

CMD [ "node", "server.js" ]



