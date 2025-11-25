const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const TASKS_FILE = path.join(__dirname, 'tasks.json');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Sirve archivos estáticos del frontend

// Función para leer tareas del archivo JSON
function readTasks() {
    try {
        const data = fs.readFileSync(TASKS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return []; // Si no existe, devuelve array vacío
    }
}

// Función para escribir tareas al archivo JSON
function writeTasks(tasks) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Rutas API
app.get('/api/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Título requerido' });
    
    const tasks = readTasks();
    const newTask = { id: Date.now(), title, description: description || '', completed: false };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const tasks = readTasks();
    const task = tasks.find(t => t.id == id);
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    
    task.completed = completed;
    writeTasks(tasks);
    res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    let tasks = readTasks();
    tasks = tasks.filter(t => t.id != id);
    writeTasks(tasks);
    res.json({ message: 'Tarea eliminada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});