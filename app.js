import CodelabTitle from "./components/codelab-title.js";
import TodoApp from "./components/todo-app.js";
import TodoList from "./components/todo-list.js";
import BreweryApp from "./components/brewery-app.js";
import BreweryDetail from "./components/brewery-detail.js";
import 'https://unpkg.com/@material/mwc-button?module';

customElements.define('codelab-title', CodelabTitle);
customElements.define('todo-app', TodoApp);
customElements.define('todo-list', TodoList);
customElements.define('brewery-app', BreweryApp);
customElements.define('brewery-detail', BreweryDetail);