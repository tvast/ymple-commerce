FROM node:4.4

WORKDIR /home/ymple

COPY api/ api/
COPY app.js app.js
COPY assets/ assets/ 
COPY config/ config/ 
COPY package.json package.json
COPY views/ views/
#COPY node_modules/ node_modules/

ENV NODE_ENV 'production'

RUN npm install 

CMD ["node","app.js"]
