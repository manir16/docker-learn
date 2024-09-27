# BASE IMAGE 
FROM node:22-alpine3.19
# MAINTAINTED BY
LABEL AUTHOR="MANIKANDAN" 
# Set working directory
WORKDIR /app
# Copy package.json to install dependencies first FROM SRC TO ./   [APP FOLDER]
COPY package*.json ./
# Install dependencies
RUN npm install 
RUN npm run build 
# Copy the rest of the project files
COPY . .


# creating nginx for react app
FROM nginx:latest
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
COPY .nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]