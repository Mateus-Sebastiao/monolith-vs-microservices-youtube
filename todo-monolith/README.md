Installing and Update NVM

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

https://github.com/nvm-sh/nvm


nvm install node

node -v
npm -v

npm init -y

npm install express

---

http://localhost:3000/
http://localhost:3000/tasks
http://localhost:3000/tasks/:id

curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Fazer deploy do microserviço amanhã"}'

Marcar como concluída (id 3 por exemplo)
curl -X PUT http://localhost:3000/tasks/3/complete

Deletar
curl -X DELETE http://localhost:3000/tasks/1