import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import "./todo-list.js";

const author = 'open-wc';
const homepage = 'https://open-wc.org/';
const footerTemplate = html`<footer>Made with love by <a href="${homepage}">${author}</a></footer>`;

export default class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  // constructor() {
  //   super();
  //   this.todos = [
  //     { text: 'Do A', finished: true },
  //     { text: 'Do B', finished: false },
  //     { text: 'Do C', finished: false },
  //   ];
  // }

  render() {
    const finishedCount = this.todos.filter(e => e.finished).length;
    const unfinishedCount = this.todos.length - finishedCount;

    return html`
            <h1>Todo app</h1>

            <div>Total finished: ${finishedCount}</div>
            <div>Total unfinished: ${unfinishedCount}</div>

            <input id="addTodoInput" placeholder="Name" />
            <button @click=${this._addTodo}>Add</button>

            <todo-list .todos=${this.todos}
                       @change-todo-finished=${this._changeTodoFinished}
                       @remove-todo=${this._removeTodo}
            ></todo-list>

            ${footerTemplate}`;
  }

  _addTodo() {
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';

    this.todos = [...this.todos, { text, finished: false }];
  }

  _removeTodo(e) {
    this.todos = this.todos.filter(todo => todo !== e.detail);
  }

  _changeTodoFinished(e) {
    const { changedTodo, finished } = e.detail;

    this.todos = this.todos.map(todo => {
      if (todo !== changedTodo) {
        return todo;
      }
      return { ...changedTodo, finished };
    });
  }
}
