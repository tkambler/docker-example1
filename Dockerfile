FROM mhart/alpine-node:8.6.0
COPY package.json package-lock.json /opt/app/
WORKDIR /opt/app/
RUN npm i
ENTRYPOINT node index.js
EXPOSE 80
