class Task {
    constructor(id,title, description) {
        this._id = id;
        this._title = title;
        this._description = description;
    }

    get title() {
        return this._title;
    }

    set title(string) {
        this._title = string;
    }

    get description() {
        return this._description;
    }

    set description(string) {
        return this._description = string;
    }
}

let todos = [];
let id = 0;
const todoList = document.querySelector('.todo-list');
const addTaskBtn = document.querySelector('.addBtn');
const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');
const taskForm = document.querySelector(".taskForm");
const addTaskBtnForm = document.querySelector('.addBtnForm');


function addTask(id,title, description) {
    todos.push(new Task(id, title, description));
    updateScreen();
}

function getInfos() {

    taskForm.classList.toggle("hidde");
    const titleValue = titleInput.value;
    const descriptionValue = descriptionInput.value;

    if (titleInput.value !== "") {
        addTask(id,titleValue, descriptionValue);
        id++;
    }

    titleInput.value = "";
    descriptionInput.value = "";

}

function btnFormToogle(){
    taskForm.classList.toggle("hidde");
}

addTaskBtn.addEventListener('click', btnFormToogle);
addTaskBtnForm.addEventListener('click', getInfos);


function deleteTask(e){
    todos = todos.filter((item) => item._title != e.target.attributes.datainfo.value);
    updateScreen(); 
}





// SCREEN TODO 

function updateScreen() {
    todoList.textContent = "";
    todos.forEach((item, i) => {
        const todoCard = document.createElement('li');
        const todoCardDiv = document.createElement('div');
        const todoCardTitle = document.createElement('h2');
        const todoCardDescription = document.createElement('p');
        const deleteBtn = document.createElement('button');
        const todoCardBar = document.createElement('hr');
        todoCardTitle.textContent = `título da tarefa: ${item.title}`;
        todoCardDescription.textContent = `descrição: ${item.description}`;
        todoCardDiv.classList.add('taskCard');
        deleteBtn.textContent = "Deletar";
        deleteBtn.classList.add('.deleteBtn');
        deleteBtn.addEventListener('click', deleteTask);
        deleteBtn.setAttribute('datainfo', item.title);
        todoCard.setAttribute('datainfo', i);

        todoCard.appendChild(todoCardDiv);
        todoCardDiv.appendChild(todoCardTitle);
        todoCardDiv.appendChild(todoCardBar);
        todoCardDiv.appendChild(todoCardDescription);
        todoCardDiv.appendChild(deleteBtn);


        todoList.appendChild(todoCard);
    })
}




