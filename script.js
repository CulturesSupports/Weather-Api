const apiKey = '62e18d2ce2f1e208703f3cff17a58aba';
const apiUrlCurrent = 'https://api.openweathermap.org/data/2.5/weather';
const apiUrlDaily = 'https://api.openweathermap.org/data/2.5/forecast/daily';

// Elements
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const forecastElement = document.getElementById('forecast');

// Event Listener
searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
    fetchDailyForecast(location);
  }
});

// Fetch Current Weather
function fetchWeather(location) {
  const url = `${apiUrlCurrent}?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Fetch Daily Forecast
function fetchDailyForecast(location) {
  // Use another endpoint for geocoding to get lat and lon
  const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;
  
  fetch(geocodeUrl)
    .then(response => response.json())
    .then(data => {
      const { lat, lon } = data[0];
      const url = `${apiUrlDaily}?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKey}&units=metric`;
      return fetch(url);
    })
    .then(response => response.json())
    .then(data => {
      forecastElement.innerHTML = '';
      data.list.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
          <p>Date: ${new Date(day.dt * 1000).toDateString()}</p>
          <p>Temperature: ${Math.round(day.temp.day)}°C</p>
          <p>Weather: ${day.weather[0].description}</p>
        `;
        forecastElement.appendChild(forecastItem);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
