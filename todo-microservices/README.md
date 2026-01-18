TODO Microservices App using Nodejs/Express with Python/Flask

docker compose build
docker compose up

Testes rápidos:
User service health (opcional):

curl http://localhost:5000/health

Criar tarefa (vai chamar user-service internamente):

curl -X POST http://localhost:3001/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Gravar parte 2 do vídeo", "userId": "mateus"}'

Listar tarefas:

curl http://localhost:3001/tasks