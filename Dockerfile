FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs

FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=0 /usr/src/app/dist ./dist
EXPOSE 3000
CMD npm server



