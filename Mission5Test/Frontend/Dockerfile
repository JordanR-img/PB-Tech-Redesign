# FROM node:12.6.0-alpine as builder

# # Create app directory
# WORKDIR /usr/src/app

# # Copy dependency definitions
# COPY package.json /usr/src/app
# COPY package-lock.json /usr/src/app

# # Install dependecies
# RUN npm i

# # Get all the code needed to run the app
# COPY . /usr/src/app

# # Build the app
# RUN npm run build

# FROM nginx:1.19.0-alpine

# # # Copy the built app from the builder image
# # COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# # # Copy the nginx configuration
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose the port the app runs in
# EXPOSE 80

# # Start the nginx server
# CMD ["nginx"]


# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM tiangolo/node-frontend:10 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# RUN npm run build
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# FROM node:latest
# WORKDIR /src/app
# COPY package.json /src/app
# COPY package-lock.json /src/app
# RUN npm i
# COPY . /src/app
# EXPOSE 3000
# CMD ["npm", "start"]


FROM node:15.5.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]