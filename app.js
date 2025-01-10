document.addEventListener('DOMContentLoaded', getWeather);

async function getWeather() {
    const apiKey = '62e18d2ce2f1e208703f3cff17a58aba
';
    const city = 'Ålesund';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        document.getElementById('weather-info').innerText = 
            `Temperature: ${weatherData.main.temp}°C | ${weatherData.weather[0].description}`;
        document.getElementById('weather-icon').src = 
            `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    } catch (error) {
        console.error('Error fetching weather data: ', error);
    }
}
