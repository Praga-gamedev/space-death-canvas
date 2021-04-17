FROM node:13

RUN apt-get update && apt-get install -y supervisor

COPY . /

RUN npm install && npm run build

EXPOSE $PORT

CMD ["supervisord","-c","/supervisor/service_script.conf"]
