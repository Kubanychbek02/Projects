FROM node:latest
WORKDIR /app
COPY package.json /app
RUN mkdir data
RUN npm install
COPY . .
ENV API_URL=http://api.myapp.com/
EXPOSE 3000
CMD [ "npm", "start" ]

# запуск контайнера
# docker build .
# docker run -p 3003:3000 f1a75868c665 num image. урааа сработал
# docker run -d -p 3004:3000 --rm --name tic-tac d3f6d6a4f260 после stop автоматически удаляется
# docker ps
# docker stop nummber container

# docker build -t tic-tacc . можно назвать будуший image


# docker login. захожу в мой docker hub
# docker tag tic-tacc kubanychbek/tic-tac. создаю новый image на основе преведушшего для отправки в doker hub
# docker push kubanychbek/tic-tac:latest. автоматически создам репозитории и отправлю

# docker pull kubanychbek/tic-tac можно скачать репозиторий doker hub
# docker run -d -p 3004:3000 --rm --name tic-tac kubanychbek/tic-tac и так можем запустить


# docker volume create tic
# docker volume ls