FROM node:13

COPY . /

RUN apt-get update && apt-get install -y supervisor && apt install -y netcat && npm install && npm run build

COPY utils/wait-for.sh wait-for.sh
RUN chmod +x wait-for.sh

EXPOSE $PORT
