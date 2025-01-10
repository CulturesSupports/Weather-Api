

document.addEventListener('DOMContentLoaded', getWeather);

async function getWeather() {
    const apiKey = '62e18d2ce2f1e208703f3cff17a58aba';
    const city = 'Ålesund';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const weatherIcons = {
        '01d': 'Clear sky (day)', 
        '01n': 'Clear sky (night)',
        '02d': 'Few clouds (day)', 
        '02n': 'Few clouds (night)',
        '03d': 'Scattered clouds (day)', 
        '03n': 'Scattered clouds (night)',
        '04d': 'Broken clouds (day)', 
        '04n': 'Broken clouds (night)',
        '09d': 'Shower rain (day)', 
        '09n': 'Shower rain (night)',
        '10d': 'Rain (day)', 
        '10n': 'Rain (night)',
        '11d': 'Thunderstorm (day)', 
        '11n': 'Thunderstorm (night)',
        '13d': 'Snow (day)', 
        '13n': 'Snow (night)',
        '50d': 'Mist (day)', 
        '50n': 'Mist (night)'
    };

    const iconList = document.getElementById('icon-list');
    for (const [icon, description] of Object.entries(weatherIcons)) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<img class="icon" src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}"> ${description}`;
        iconList.appendChild(listItem);
    }

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
