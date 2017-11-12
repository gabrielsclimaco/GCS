FROM node:alpine

RUN mkdir /src
COPY package.json /src/package.json
WORKDIR /src
RUN yarn
ADD . /src

CMD yarn gulp
