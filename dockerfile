FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

RUN ls -l
RUN npm install -g typescript

RUN yarn install

RUN yarn build

EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start:dev"]