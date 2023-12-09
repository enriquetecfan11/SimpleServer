# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install npm install -g npm@10.2.4
RUN npm install -g npm@latest

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Make port 4000 available for links and/or publish
EXPOSE 4000

# Run npm start when the container launches
CMD ["npm", "start"]
