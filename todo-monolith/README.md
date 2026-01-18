# TODO List - Arquitetura Monolítica

Aplicação simples de lista de tarefas construída em **Node.js + Express**. Tudo (API, lógica de negócio e "banco de dados" em memória) está em um único serviço — exemplo clássico de arquitetura monolítica.

## Funcionalidades

- Criar tarefa
- Listar tarefas
- Marcar tarefa como concluída
- Deletar tarefa
- Dados persistidos apenas em memória (reinicia ao parar o servidor)

## Pré-requisitos

- Node.js v18 ou superior
- npm

## Instalação

```bash
# Instale o NVM (se ainda não tiver)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Use a versão correta do Node
nvm install node
nvm use node

# Instale as dependências
npm install
```

## Como Rodar

```bash
node monolith.js
# ou
npm start
```

O servidor roda em http://localhost:3000

## Testes

### Criar tarefa
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Gravar vídeo sobre Kubernetes"}'

### Listar tarefas
curl http://localhost:3000/tasks

### Marcar como concluída (substitua o ID)
curl -X PUT http://localhost:3000/tasks/1/complete

### Deletar
curl -X DELETE http://localhost:3000/tasks/1

## Por Que Monolito?

- Desenvolvimento rápido
- Deploy único
- Depuração simples
- Ideal para projetos pequenos ou MVPs