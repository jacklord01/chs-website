# base image
FROM node:alpine

WORKDIR /APP

# copy source files
COPY . /APP

# install dependencies
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# start app
RUN npm run build 
EXPOSE 7170
CMD npm run prod

#Run Docker to deploy
#docker build -t chswebapp . && docker run -d --name chswebapp -p 0.0.0.0:7170:7170 chswebapp