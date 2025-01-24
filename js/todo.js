const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveTodos () {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // JSON.stringify 어떤 자바스크립트 코드인더 간에 전부 stirng으로 바꿔줌
} // 작성한 투두 로컬에 저장

function deleteTodo (event) {
 const li = event.target.parentElement;
 li.remove();
} // 투두리스트 삭제 버튼

function paintToDo(newTodo) {
 const li = document.createElement("li");
 const span = document.createElement("span");
 span.innerText = newTodo;
 const button = document.createElement("button");
 button.innerText = "🗑"
 button.addEventListener("click",deleteTodo)


 li.appendChild(span);
 li.appendChild(button);
 toDoList.appendChild(li)
} // 투두 리스트에 리스트 추가, (li > span, button(delete)), 버튼 클릭시 리스트 삭제 버튼 인식

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    localStorage.setItem(TODOS_KEY,toDos);
} //form submit 시에 일어나는 함수들 (새로고침 방지, 인풋창에 쓴 value 받아오기, )

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("hello",item);
}

// localStorage는 배열 저장이 x only Text

const saveTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
    const parsedToDos = JSON.parse(saveTodos);
    parsedToDos.forEach();
}