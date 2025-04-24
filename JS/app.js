let button = document.getElementById('add');
let todolist = document.getElementById('todolist');
let input = document.getElementById('input');

let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addtodo(todo));
}

button.addEventListener('click', () => {
    if (input.value.trim() === "") return;
    todos.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todos));
    addtodo(input.value);
    input.value = '';
});

function addtodo(todo) {
    let todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    let para = document.createElement('span');
    para.innerText = todo;

    let removeBtn = document.createElement('button');
    removeBtn.innerText = '❌';
    removeBtn.className = 'remove-btn';

    removeBtn.addEventListener('click', () => {
        todolist.removeChild(todoItem);
        remove(todo);
    });

    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
    });

    todoItem.appendChild(para);
    todoItem.appendChild(removeBtn);
    todolist.appendChild(todoItem);
}

function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}
