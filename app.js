//initialisation

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//event
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deteleCheck);
filterOption.addEventListener("click", filterTodo);

//function
function addTodo(event) {
  //permet de stoper l'action qui se fait automatiquement et que l'action soit bien éxécuté au moment de l'action sur le bouton
  event.preventDefault();
  //console.log("ca marche");

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deteleCheck(e) {
  //console.log(e.target);

  //SUPPRESSION MAIS PAS COMPRIS CLASlIST[0]
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // mis en place de l'animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
      //console.log(todo);
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  //console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "Uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
