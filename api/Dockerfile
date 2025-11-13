# Stage 1: Specify the base image from Docker Hub
FROM node:18-alpine

# Stage 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Stage 3: Copy package.json and package-lock.json
COPY package*.json ./

# Stage 4: Install application dependencies
RUN npm install

# Stage 5: Copy the rest of the application source code
COPY . .

# Stage 6: Expose the port that the application runs on
EXPOSE 3001

# Stage 7: Define the command to run the application
CMD [ "node", "server.js" ]

