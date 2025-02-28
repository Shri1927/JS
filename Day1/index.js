const API_KEY = '4d28f5cb95102ba6d3876e5cf3797c9b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='; // Corrected city name

const serachBox = document.getElementById('search-inp');
const searchBtn = document.getElementById('search-btn');
const weatherIcon = document.getElementById('weather-icon');

async function getWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    if (response.status === 404) {
        document.getElementById('error').style.display = 'block';
        document.getElementById('weather').style.display = 'none';

    } else {
        const data = await response.json();
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.getElementById('humidity').innerHTML = data.main.humidity + '%';
        document.getElementById('wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
        } else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png';
        } else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png';
        } else if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'images/snow.png';
        } else if (data.weather[0].main === 'drizzle') {
            weatherIcon.src = 'images/drizzle.png';
        } else if (data.weather[0].main === 'mist') {
            weatherIcon.src = 'images/mist.png';
        }

        document.getElementById('weather').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    }

    }


    searchBtn.addEventListener("click", () => {
        getWeather(serachBox.value);
        serachBox.value = '';
    });