FROM node:15.8.0-alpine

ENV PORT=3000 \
    APP_PATH=/usr/src/app

WORKDIR ${APP_PATH}

EXPOSE ${PORT}

COPY package* ./

CMD npm start

RUN npm install

COPY . ./
