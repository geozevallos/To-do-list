// Esto importa por defecto el index.js
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/components'

import './styles.css';
// import img from './assets/webpack.png'

export const todoList = new TodoList();
const tarea = new Todo('Aprender JS');

todoList.nuevoTodo(tarea);


console.log(todoList)

crearTodoHtml(tarea);