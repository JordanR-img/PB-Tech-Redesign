# FROM node:latest

# WORKDIR /Backend
# RUN npm install cookie-parser -g
# COPY /package.json .

# RUN npm i
# # RUN npm install -g nodemon
# COPY . .

# EXPOSE 4444

# CMD [ "npm", "start" ]

FROM node:latest

WORKDIR /Backend
COPY package.json .
RUN npm install
COPY . .

EXPOSE 4444

CMD [ "node", "server.js" ]



# FROM node:latest

# # RUN mkdir -p /usr/src/server.js

# WORKDIR /usr/src/server.js
# RUN npm install cookie-parser -g
# COPY package.json /usr/src/server.js/

# RUN npm i
# # RUN npm install -g nodemon
# COPY . /usr/src/server.js/

# EXPOSE 4444

# CMD [ "nodemon", "server.js" ]

