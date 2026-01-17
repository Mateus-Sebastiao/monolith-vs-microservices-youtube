// monolith.js - To-Do List Monolítico simples (tudo em um arquivo!)
import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para ler JSON no body das requisições
app.use(express.json());

// Armazenamento em memória (array) - perde os dados ao reiniciar o servidor
// Isso demonstra o conceito de monólito: tudo junto, simples e rápido
let tasks = [
  { id: 1, title: "Estudar monólitos vs microserviços", completed: false },
  { id: 2, title: "Gravar vídeo hoje!", completed: true }
];

// Rota GET - Listar todas as tarefas
app.get('/tasks', (req, res) => {
  res.json({
    message: "Lista de tarefas (monólito)",
    total: tasks.length,
    tasks
  });
});

// Rota GET - Buscar uma tarefa específica por ID
app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  
  res.json(task);
});

// Rota POST - Adicionar nova tarefa
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: "O campo 'title' é obrigatório" });
  }
  
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  
  res.status(201).json({
    message: "Tarefa adicionada com sucesso!",
    task: newTask
  });
});

// Rota PUT - Marcar tarefa como concluída (ou atualizar)
app.put('/tasks/:id/complete', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  
  task.completed = true;
  
  res.json({
    message: "Tarefa marcada como concluída!",
    task
  });
});

// Rota DELETE - Remover tarefa
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  
  tasks.splice(index, 1);
  
  res.json({ message: "Tarefa removida com sucesso!" });
});

// Rota raiz - só pra mostrar que está vivo
app.get('/', (req, res) => {
  res.send(`
    <h1>🛠️ To-Do List Monolítico rodando!</h1>
    <p>Acesse <code>/tasks</code> para ver as tarefas</p>
    <p>Endpoints: GET/POST/PUT/DELETE em /tasks</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor monolítico rodando em http://localhost:${PORT}`);
  console.log("Teste agora:");
  console.log(`  → GET  http://localhost:${PORT}/tasks`);
  console.log(`  → POST http://localhost:${PORT}/tasks   (body: {"title": "Nova tarefa"})`);
});