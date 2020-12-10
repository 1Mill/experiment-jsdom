FROM node:15-alpine

RUN apk update && apk add \
	python2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG PORT=8080
ENV \
	HOST=0.0.0.0 \
	NODE_ENV=production \
	PORT=$PORT

EXPOSE $PORT

CMD ["npm", "run", "start"]
