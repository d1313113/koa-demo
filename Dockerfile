FROM node:10

WORKDIR /usr/app/src

COPY . .
RUN npm install --registry https://registry.npm.taobao.org

EXPOSE 10086

CMD ["node", "app.js"]
