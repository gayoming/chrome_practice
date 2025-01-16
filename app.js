// const title = document.querySelector("#title");
// console.dir(title); //id = title이 갖고 있는 모든 속성값을 가졈
 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //자주 쓰는 string은 변수로 지정하자, string 오류는 js가 잡지 않지만 변수는 잡는다.

function onLoginSubmit(e) {
    e.preventDefault(); //form submit 시 브라우저는 기본적으로 페이지 새로고침 -> 그거 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
};

// onLoginSubmit(); 괄호를 넣는 순간 바로 함수 실행됨 , But addEventListener은 이벤트가 실행 될 때 이므로 괄호 X 이벤트 실행되면 알아서 함수가 실행됨

function paintGreetings (username) {
    greeting.innerText = `안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
 //form이 보여져야함
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
//greeting(h1)이 보여져야 함 
    paintGreetings(savedUsername);
}