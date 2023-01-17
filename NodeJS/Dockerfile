FROM node:latest

# ENTRYPOINT [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]

RUN mkdir -p /usr/src/server.js

WORKDIR /usr/src/server.js
RUN npm install cookie-parser -g
COPY package.json /usr/src/server.js/

RUN npm i

COPY . /usr/src/server.js/

EXPOSE 7500

CMD [ "node", "server.js" ]



