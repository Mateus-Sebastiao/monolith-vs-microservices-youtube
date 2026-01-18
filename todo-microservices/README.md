# TODO List - Arquitetura de Microserviços

Aplicação de lista de tarefas dividida em **dois serviços independentes**:

- **tasks-service** → Node.js + Express (porta 3001)
- **user-service** → Python + Flask (porta 5000)

Os serviços se comunicam via HTTP. Usamos **Docker Compose** para orquestrar tudo de forma simples.

## Arquitetura


O `tasks-service` chama o `user-service` para validar o `userId` antes de criar uma tarefa.

## Pré-requisitos

- Docker e Docker Compose (recomendado)
- Node.js e Python (caso queira rodar sem Docker)

## Execução com Docker (recomendado)

```bash
# Construa e inicie os containers
docker compose build
docker compose up
```

Serviços disponíveis:

  - tasks-service → http://localhost:3001
  - user-service → http://localhost:5000

## Execução sem Docker (desenvolvimento local)

### Terminal 1 - user-service (Python)

```bash
cd user-service
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
flask run --port=5000
```

### Terminal 2 - tasks-service (Node.js)

```bash
cd tasks-service
npm install
node index.js  # ou npm start
```

## Testes

### Health do user-service (opcional)

  curl http://localhost:5000/health

### Criar tarefa (tasks-service chama user-service internamente)

  curl -X POST http://localhost:3001/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "Estudar Strangler Pattern", "userId": "mateus"}'

### Listar tarefas

  curl http://localhost:3001/tasks

## Por Que Microserviços Aqui?

- Tecnologias diferentes por serviço
- Deploy independente
- Escalabilidade granular
- Demonstração de comunicação entre serviços e orquestração com Docker

Compare com a versão monolítica no diretório ../todo-monolith para ver os trade-offs!