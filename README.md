# Monolito vs Microserviços: Exemplo Prático em Node.js (e Python)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v20+-green.svg)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)

Repositório com duas implementações de uma aplicação **TODO List** simples para demonstrar as diferenças entre arquitetura **monolítica** e **microserviços**.

Este projeto foi criado como material de apoio para o vídeo **"Monolito vs Microserviços: O Que Você Precisa Saber Antes de Escolher"** no meu canal do YouTube.

Assista ao vídeo completo aqui: [Link do vídeo no YouTube](INSIRA_O_LINK_AQUI)

## Estrutura do Repositório

```bash
.
├── todo-monolith/          # → Aplicação monolítica (Node.js + Express)
└── todo-microservices/     # → Aplicação com microserviços
    ├── tasks-service/      # → Serviço de tarefas (Node.js + Express)
    └── user-service/       # → Serviço de usuários/autenticação (Python + Flask)
```

## Por que Esse Repositório Existe?

O objetivo é mostrar na prática:
- Como um monolito é simples de desenvolver, testar e deployar;
- Como microserviços permitem independência de tecnologias, deploys isolados e escalabilidade granular;
- Trade-offs reais (complexidade operacional, comunicação entre serviços, Docker Compose, etc.).

## Pré-requisitos

- Node.js v18 ou superior (recomendo usar [nvm](https://github.com/nvm-sh/nvm))
- Python 3.9+ (para o user-service)
- Docker e Docker Compose (para rodar os microserviços facilmente)

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Mateus-Sebastiao/monolith-vs-microservices-youtube
   cd monolith-vs-microservices-youtube
   ```

2. Escolha qual implementação quer rodar:
    - Monolito → vá para a pasta todo-monolith e siga o README local
    - Microserviços → vá para a pasta todo-microservices e siga o README local