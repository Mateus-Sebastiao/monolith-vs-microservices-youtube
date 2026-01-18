// tasks-service/index.js
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

app.use(express.json());

let tasks = []; // memória

// Middleware simples pra simular "usuário logado" (chama user-service)
const validateUser = async (req, res, next) => {
  try {
    const response = await fetch('http://user-service:5000/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: req.body.userId || 'demo-user' })
    });

    if (!response.ok) {
      return res.status(401).json({ error: 'Usuário não autorizado (chamada falhou)' });
    }

    next();
  } catch (err) {
    res.status(503).json({ error: 'User-service indisponível' });
  }
};

// GET todas tarefas
app.get('/tasks', (req, res) => {
  res.json({ service: 'tasks', tasks });
});

// POST nova tarefa (com validação de user)
app.post('/tasks', validateUser, (req, res) => {
  const { title, userId } = req.body;
  if (!title) return res.status(400).json({ error: 'Title obrigatório' });

  const newTask = {
    id: tasks.length + 1,
    title,
    userId: userId || 'demo',
    completed: false
  };
  tasks.push(newTask);

  res.status(201).json({ message: 'Tarefa criada', task: newTask });
});

app.listen(PORT, () => {
  console.log(`Tasks Service rodando em http://localhost:${PORT}`);
});