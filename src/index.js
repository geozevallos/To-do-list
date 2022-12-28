// Esto importa por defecto el index.js
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/components'

import './styles.css';
// import img from './assets/webpack.png'

export const todoList = new TodoList();
const tarea = new Todo('Aprender JS');
const tarea2 = new Todo('Sacar a duque');


todoList.nuevoTodo(tarea);

todoList.nuevoTodo(tarea2);

console.log(todoList)

crearTodoHtml(tarea);