const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// 🛠️ 로컬스토리지에 저장하는 함수
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 🛠️ 할 일 삭제 함수 (텍스트 기준으로 삭제)
function deleteTodo(event) {
    const li = event.target.parentElement;
    const text = li.querySelector("span").innerText; // li 내부의 span 텍스트 가져오기
    li.remove();

    // toDos 배열에서 삭제된 항목 제외
    toDos = toDos.filter((todo) => todo !== text);
    saveTodos();
}

// 🛠️ 새로운 할 일을 화면에 표시하는 함수
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "🗑";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 🛠️ 폼 제출 이벤트 처리
function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    const newTodoText = toDoInput.value.trim(); // 입력값 앞뒤 공백 제거

    toDoInput.value = ""; // 입력 필드 초기화
    toDos.push(newTodoText); // 배열에 추가
    paintToDo(newTodoText); // 화면에 표시
    saveTodos(); // 로컬스토리지에 저장
}

// 폼 제출 이벤트 리스너 추가
toDoForm.addEventListener("submit", handleToDoSubmit);

// 🛠️ 페이지 로드 시 localStorage에서 투두 리스트 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}