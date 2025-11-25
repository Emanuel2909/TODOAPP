const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Cargar tareas al iniciar
async function loadTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    renderTasks(tasks);
}

// Renderizar tareas en la lista
function renderTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.title} - ${task.description}</span>
            <div>
                <button onclick="toggleTask(${task.id}, ${!task.completed})">${task.completed ? 'Desmarcar' : 'Completar'}</button>
                <button onclick="deleteTask(${task.id})">Eliminar</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Agregar tarea
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
    });
    taskForm.reset();
    loadTasks();
});

// Alternar completado
async function toggleTask(id, completed) {
    await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
    });
    loadTasks();
}

// Eliminar tarea
async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    loadTasks();
}

// Cargar tareas iniciales
loadTasks();