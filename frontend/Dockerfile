# use node lts as base image
FROM node:lts

WORKDIR /app 

COPY package*.json ./ 
RUN npm install 

COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

COPY prisma ./prisma 
COPY . . 

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh 

RUN npx prisma generate 

RUN chown -R node:node /app/node_modules && chmod -R 775 /app/node_modules 

EXPOSE 3000

CMD ['/bin/sh', '/app/entrypoint.sh']
