FROM node:10
COPY Dockerfile /app/Dockerfile
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY app.js /app/app.js
COPY js/ /app/js/
COPY ts/ /app/ts/
RUN cd /app && npm install --production --no-shrinkwrap --registry https://registry.npmjs.org --verbose
WORKDIR /app
CMD npm start