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
# FROM node:12.6.0-alpine
# # Create app directory
# WORKDIR /usr/src/app

# # Copy dependency definitions
# COPY package.json /usr/src/app
# COPY package-lock.json /usr/src/app

# # Install dependecies
# #RUN npm set progress=false \
# #    && npm config set depth 0 \
# #    && npm i install
# # RUN npm ci
# RUN npm i
# # RUN npm i ejs
# # Get all the code needed to run the app
# COPY . /usr/src/app

# # Expose the port the app runs in
# # EXPOSE 3000

# # Serve the app
# CMD ["npm", "start"]

FROM node:12.6.0-alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependecies
RUN npm i node-pre-gyp@0.12.0
RUN npm ci

# Get all the code needed to run the app
COPY . /usr/src/app

# Build the app
RUN npm run build

FROM nginx:1.19.0-alpine

# Copy the built app from the builder image
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY --from=nginx:latest /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
# Copy the nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs in
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]