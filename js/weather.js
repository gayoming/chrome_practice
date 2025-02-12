const API_KEY = "a16cf3735efc7edffcaf79f7508496e4";

const weatherIcons = {
    Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sprinkle",
            Rain: "wi-rain",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-cloudy",
            Mist: "wi-fog",
            Smoke: "wi-smoke",
            Haze: "wi-day-haze",
            Dust: "wi-dust",
            Fog: "wi-fog",
            Sand: "wi-sandstorm",
            Ash: "wi-volcano",
            Squall: "wi-strong-wind",
};

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // API 응답 확인

        // HTML 요소 가져오기
        const weatherSpan = document.querySelector("#weather span:first-child"); // 아이콘 + 온도
        const citySpan = document.querySelector("#weather span:last-child"); // 도시 이름

        // 요소가 없으면 경고 후 종료
        if (!weatherSpan || !citySpan) {
            console.error("weatherSpan 또는 citySpan 요소를 찾을 수 없습니다.");
            return;
        }

        // 날씨 데이터 적용
        if (data.weather && data.weather.length > 0) {
            const weatherCondition = data.weather[0].main;
            const temperature = Math.round(data.main.temp);
            const iconClass = weatherIcons[weatherCondition] || "wi-na"; 

            weatherSpan.innerHTML = `<i class="wi ${iconClass}"></i> ${temperature}°C`; // 아이콘 + 온도만 표시
            citySpan.innerText = data.name; // 도시 이름
        } else {
            weatherSpan.innerHTML = `<i class="wi wi-na"></i> -`;
        }
    })
    .catch(error => console.error("날씨 정보를 가져오는 중 오류 발생:", error));
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

 // HTML이 완전히 로드된 후 실행
 document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});