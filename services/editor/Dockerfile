FROM node:15-alpine

RUN apk update

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

ARG PORT=8080
ENV \
	HOST=0.0.0.0 \
	NODE_ENV=production \
	PORT=$PORT

EXPOSE $PORT

COPY . .

CMD ["npm", "run", "start"]
