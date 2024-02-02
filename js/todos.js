const todoParent = document.querySelector(".to-dos");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("to-do-list");

const ul = document.createElement("ul");
todoParent.appendChild(ul);

let todos =[];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}


function onTodoSubmit(event){
    event.preventDefault();
    const todoValue = todoList.value;
    todoList.value="";
    const todoObj = {
        id:Date.now(),
        text:todoValue
    }
    if(todos.length >8){
        alert("Too Much Work!!!!")
    }else{
    todos.push(todoObj);
    showTodo(todoObj);
    saveTodos();
}
}


function checkList(event){
 const targetLi = event.target.parentElement.children[0];
 const targetButton = event.target.parentElement.children[1];
 targetLi.classList.toggle("list-done");

 if(targetLi.classList.contains("list-done")){
    targetButton.innerHTML="&#10004";
}else{
    targetButton.innerText=""
}


//  targetLi.remove();
// todos = todos.filter((item)=>item.id !== parseInt(targetLi.id));
// saveTodos();
};



function showTodo(todoObj){
    const li = document.createElement("li");
    li.id= todoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=todoObj.text;
    button.addEventListener("click", checkList);
  
}
todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    todos = parsedToDos;
    parsedToDos.forEach(showTodo);
}
