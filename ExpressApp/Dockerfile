#BaseImage
FROM node:22-alpine3.19

# set the working Directory in Docker Host 
WORKDIR /app

#copy the package.json from src to workdirectory
COPY package.json ./

# Install dependencies
RUN npm install

#copy all the contents from current directory to workdirectory
COPY . .

EXPOSE 5000

CMD [ "node" ,"server.js" ]


