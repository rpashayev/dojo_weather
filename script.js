const KEY = '411e38ea58a15dc222bf89efd86aa5d9'

async function getWeatherForecast(city){
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&exclude=current,minutely,hourly&appid=${KEY}`)
    var cityWeather = await response.json()
    // console.log(cityWeather)

    cities = document.getElementsByClassName('flex-weather-container');

    for (var i=0; i<4; i++) {
        cities[0].innerHTML = `
            <div class="weather-box">
                <h3>Today</h3>
                <img src="imgs/some_rain.png" alt="Rainy cloud image">
                <p>${cityWeather.weather[0].main}</p>
                <div class="flex-weather-container">
                    <h3 class="degree high">24°</h3>
                    <h3 class="degree low">18°</h3>
                </div>        
            </div>
            ${cities[0].innerHTML}
        `
    }

//     users.innerHTML = 
//         <div>
//             <h2>Name: ${userData.name}</h2>
//             <img src="${userData.avatar_url}" alt="avatar" class="rounded-circle img-fluid w-25">
//         </div>
//         ${users.innerHTML}
//     `
}

$("li").click(function() {
    city = this.innerText
    changeCity(city);
    getWeatherForecast(city)

});

function changeCity(newCity) {
    var mainCity = document.getElementById('selected-city');
    mainCity.innerText = newCity
}

function removeMsg(id) {
    document.getElementById(id).remove();
}

function changeTemp(e, className) {
    var temp = document.getElementsByClassName(className);
    
    for (var i=0; i< temp.length; i++) {
        if(e.value=="c") {
           temp[i].innerText = Math.round((parseInt(temp[i].innerText) - 32) * 5 / 9) + "°";
        }
        else {
            temp[i].innerText = Math.round(parseInt(temp[i].innerText) * 9 / 5 + 32) + "°";
        }
    }
}