let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let labal = document.createElement('labal');

    labal.innerText = task;
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(labal);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function(){
   let listItem = this.parentNode;
   let deleteBtn = document.createElement('button');
   deleteBtn.innerText= 'Delete';
   deleteBtn.className = 'delete';
   listItem.appendChild(deleteBtn);

   let checkBox = listItem.querySelector('input[type="checkbox"]');
   checkBox.remove();
   completeUl.appendChild(listItem);
   bindInCompleteItems(listItem, deleteTask);
   
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);
}


let bindInCompleteItems = function(taskItem, checkboxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteBtnClick){
    let deleteButton = taskItem.querySelector('.delete');
    checkBox.onclick = deleteBtnClick;
}
// for(let i = 0; i<todoUl.children.length; i++){
//     bindInCompleteItems(todoUl.children[i],completeTask);
// }
// for(let i = 0; i < completeUl.children.length; i++){
//     bindInCompleteItems(completeUl.children[i],deleteTask);
// }

form.addEventListener('submit', addTask);