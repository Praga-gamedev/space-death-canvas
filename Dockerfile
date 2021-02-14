FROM node:13

COPY . /

RUN npm install && npm run build

EXPOSE $PORT

CMD node server.js
