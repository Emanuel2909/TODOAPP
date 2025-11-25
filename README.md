# Gestión de Tareas (To-Do List) en Node.js

Una aplicación web simple pero robusta para gestionar tareas personales. Construida con Node.js y Express para el backend, y HTML/CSS/JavaScript puro para el frontend. Las tareas se almacenan en un archivo JSON local, lo que la hace fácil de ejecutar sin bases de datos externas.

## Características
- **Agregar tareas**: Crea nuevas tareas con título y descripción opcional.
- **Marcar como completadas**: Alterna el estado de completado de una tarea.
- **Eliminar tareas**: Borra tareas no deseadas.
- **Persistencia de datos**: Las tareas se guardan en `tasks.json` y persisten entre reinicios.
- **Interfaz web simple**: Frontend responsive sin frameworks pesados.
- **API REST**: Endpoints para integración con otras apps.

## Tecnologías Utilizadas
- **Backend**: Node.js, Express.js, Body-parser.
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla).
- **Almacenamiento**: Archivo JSON (fácil de migrar a una base de datos real).
- **Herramientas**: VS Code para desarrollo, npm para gestión de paquetes.

## Requisitos Previos
- Node.js instalado (versión 14 o superior). Descárgalo desde [nodejs.org](https://nodejs.org/).
- Un editor como VS Code para editar y ejecutar el código.
- Conocimientos básicos de JavaScript y terminal.

## Instalación
1. **Clona o descarga el proyecto**: Crea una carpeta nueva (ej. `TodoApp`) y copia los archivos del proyecto.
2. **Instala dependencias**:
   - Abre la carpeta en VS Code.
   - Abre el terminal integrado (Ctrl+``).
   - Ejecuta: `npm install` (instala Express y body-parser automáticamente desde `package.json`).
3. **Verifica la estructura de archivos**:
