# Use latest version of node
FROM node:latest

# create working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# move local package.json to working directory and install dependencies
COPY package*.json /usr/src/app/
RUN npm install

# move local app to working directory
COPY . /usr/src/app

# expose port and begin the server
EXPOSE 3000
CMD ["npm", "start"]
