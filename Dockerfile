FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install # OR `RUN yarn install`

COPY . /app

CMD ["npm", "start"] # OR CMD ['yarn', 'run', 'start']