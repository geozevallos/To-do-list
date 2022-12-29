// Esto importa por defecto el index.js
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/components'

import './styles.css';
// import img from './assets/webpack.png'

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));