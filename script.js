const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};
const TODO_LIST = [];
const TODO_LIST_CHECKED = [];
const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const app = document.getElementById("form-app");
const FORM_NEW_TODO = `
<p>
<label for='todo'>Task:</label><br>
<input type='text' name = 'todo' id='todo' data-id = 'todo' autofocus>
</p>
<p>
<button class="button center" onClick="addTodo()">Add</button>
<button class="button center" onClick="cancel()">Cancel</button>
</p>
`;

function main_app() {
  /** main button */
  app.innerHTML = `<button class="button center" onClick="newTodo()">New TODO</button>`;
}

function newTodo() {
  /** load form new todo */
  app.innerHTML = FORM_NEW_TODO;
}

function addTodo() {
  /** get task & valid non empty value */
  let item = document.getElementById("todo").value;
  if (item.length < 5) {
    alert("Task must be greater than five characters");
  } else {
    TODO_LIST.push(item);
  }
  // load todo list & return button new todo
  list.innerHTML = loadTodo();
  main_app();
  changeTotalValues();
}

function cancel() {
  /** load main button */
  main_app();
}

function loadTodo() {
  let _arr = "";
  TODO_LIST.forEach(el => {
    _arr += `
    <li>
    <input type = 'checkbox' onClick = "checkoutTodo('${el}')"  id = '${el}'>   
    ${el} 
    <button type = 'button' onClick = "deleteTodo('${el}')" >Delete</button>
    </li>`;
  });
  return _arr;
}

function total(item) {
  /** if not arg or is not array return 0 */
  if (!item || typeof item != "object") {
    return 0;
  }
  return item.length;
}

function uncheckedTodo(item) {
  TODO_LIST.splice(item, 1);
  TODO_LIST_CHECKED.push(item);
  list.innerHTML = loadTodo();
  return TODO_LIST_CHECKED.length;
}

function checkoutTodo(item) {
  uncheckedTodo(item);
  changeTotalValues();
  loadTodoDone();
}

function changeTotalValues() {
  itemCountSpan.innerHTML = total(TODO_LIST) + total(TODO_LIST_CHECKED);
  uncheckedCountSpan.innerHTML = total(TODO_LIST);
}

function deleteTodo(item) {
  TODO_LIST.splice(item, 1);
  changeTotalValues();
  list.innerHTML = loadTodo();
}

function deleteTodoDone(item) {
  TODO_LIST_CHECKED.splice(item, 1);
  changeTotalValues();
  list.innerHTML = loadTodo();
  loadTodoDone();
}

function loadTodoDone(){
  let _arr = "";
  TODO_LIST_CHECKED.forEach(el => {
    _arr += `<li>${el} <button type = 'button' onClick = "deleteTodoDone('${el}')" >Delete</button></li>`;
  });
  document.getElementById("todo-list-done").innerHTML = _arr;
}

document.addEventListener("DOMContentLoaded", () => {
  main_app();
});
