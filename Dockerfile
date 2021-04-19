FROM node:13

COPY . /

RUN apt-get update && apt-get install -y supervisor && npm install && npm run build

EXPOSE $PORT

CMD ["supervisord","-c","/supervisor/service_script.conf"]
