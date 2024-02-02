const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
const API_KEY ="44e31e73aec402baf02f60ad8b75e464";

function onSuccess(pos){
    const lat =pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      const temp = Math.round(parseInt(`${data.main.temp}`));
      weather.innerText = `${data.weather[0].main} / ${temp}°C`;
    });
};
function onError(){
alert("Can't find you :(")
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);