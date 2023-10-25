let todoInput = document.querySelector("#todo");
let addButton = document.querySelector(".add");
let todoList = document.querySelector("#todo-list");
let error = document.querySelector("#error");
let form = document.querySelector("#form");
let clear = document.querySelector(".clear");
let itemCount = document.querySelector(".item-count");

itemCount.innerText = `No ToDo Item`;
todoInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (todoInput.value.length == 0) {
        error.classList.replace("d-none", "d-block");
        addButton.setAttribute("disabled", true);
    }
    else {
        error.classList.replace("d-block", "d-none");
        addButton.removeAttribute("disabled");
    }
});

let arr = [];
console.log(todoInput.value);
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (todoInput.value.trim() === "") {
        error.classList.replace("d-none", "d-block");
        addButton.setAttribute("disabled", true);
        todoInput.value = "";
    } else {
        let todoItem = document.createElement("div");
        todoItem.innerHTML = `<div class="mainBox"><div class="boxContent">${todoInput.value}</div>
    <div class="button"><div class="btn btn-danger delete"><i class="fa-solid fa-trash-can"></i></div>
    <div class="btn btn-success mark-as-done"><i class="fa-solid fa-check"></i></div>
    </div>
    </div>`

        arr.push(todoInput.value);
        console.log(arr)
        todoList.append(todoItem);
        todoInput.value = "";

        itemCount.innerText = `You have ${arr.length} pending task`;

    }

    let mainBox = document.querySelector(".mainBox");
    console.log(mainBox);
    let markAsDoneButton = document.querySelector(".mark-as-done");
    console.log(markAsDoneButton);

    let deleteButton = document.querySelector(".delete");
    deleteButton.addEventListener('click', () => {
        if (window.confirm('Are you sure to delete?')) {
            mainBox.remove();
        }

        const todoText = document.querySelector(".boxContent");
        const index = arr.indexOf(todoText);
        if (index !== -1) {
            arr.splice(index, 1);
        }
        itemCount.innerText = `You have ${arr.length} pending tasks`;
    });

    markAsDoneButton.addEventListener('click', () => {
        mainBox.style.textDecoration = "line-through";
    });
})

clear.addEventListener('click', (e) => {
    if (arr.length > 0) {
        if (window.confirm('Are you sure to delete?')) {
            todoList.remove();
            arr.length = 0;
            itemCount.innerText = `No ToDo Item`;
        }
    } else {
        todoList.addEventListener();
    }
})

let mark = document.querySelector(".mark-as-done");
console.log(mark)