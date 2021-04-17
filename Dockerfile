FROM node:15-alpine

COPY . /

RUN npm install && npm run build

EXPOSE ${PORT}

CMD npm run production
