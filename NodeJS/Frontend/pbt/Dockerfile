# FROM node:latest

# RUN mkdir -p /usr/pbt/app

# WORKDIR /pbt

# COPY package.json ../package.json
# COPY ["package*.json","./"]
# COPY package.lock.json ../package.lock.json
# ADD ["package*.lock.json","./"]
# ADD package.json /usr/pbt/app/package.json
# COPY package*.json ./

# COPY package.json ./
# COPY package-lock.json ./
# RUN npm i

# COPY . .

# EXPOSE 3000

# CMD [ "npm", "start" ]

# FROM node:latest
# WORKDIR /usr/src/app
# ENV PATH="./node_modules/.bin:$PATH"
# COPY package*.json ./
# RUN npm install -g npm@7.19.1

# RUN npm install react-scripts@3.4.1 -g --silent
# COPY . ./
# RUN npm run build

# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from dockerhub
FROM node:12.6.0-alpine
RUN apk update && apk add git
# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/pbt/
COPY package-lock.json /usr/pbt/

# Install dependecies
#RUN npm set progress=false \
#    && npm config set depth 0 \
#    && npm i install
# RUN npm ci
RUN npm install --force
RUN npm i axios
# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]