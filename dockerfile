# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Make data.json
RUN touch data.json

# Make port 4000 available for links and/or publish
EXPOSE 4000

# Run npm start when the container launches
CMD ["npm", "start"]
