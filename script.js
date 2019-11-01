const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const TODO_LIST = []

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const app = document.getElementById("form-app")


function main_app() {
  app.innerHTML = `<button class="button center" onClick="newTodo()">New TODO</button>` 
}

function newTodo() {
  app.innerHTML = FORM_NEW_TODO
}

function addTodo() {
  let item = document.getElementById("todo").value
  if (item.length < 5) {
    alert("Task must be greater than five characters")
  } else {
    TODO_LIST.push(item)
  }
  list.innerHTML = loadTodo()
  main_app()
  itemCountSpan.innerHTML = total(TODO_LIST)
}

function cancel(){
  main_app()
}

function loadTodo(){
  let _arr = ""
  TODO_LIST.forEach(el=>{
    _arr+=`<li>${el}</li>`
  })
  return _arr
}

function total(item){
  if(!item) {
    return 0
  }
  return item.length
}

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

document.addEventListener("DOMContentLoaded", () =>{
  main_app();
})