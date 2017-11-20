FROM node

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN yarn

CMD yarn gulp
