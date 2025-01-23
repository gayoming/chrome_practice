const clock = document.querySelector("h2#clock");


function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`
}

//padStart(a,b) 변수가 a자리 수만큼 될 때 까지 b를 채워넣는다.

getClock ()
setInterval(getClock, 1000)