FROM node:14.15.4-alpine3.12
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --production
COPY . /app/
USER node
EXPOSE 8080
CMD ["node", "src/app.js"]
