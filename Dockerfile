FROM node:12.0-slim
COPY . .
RUN npm install
CMD [ "node", "dist/app.js" ]
