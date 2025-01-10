const apiKey = '62e18d2ce2f1e208703f3cff17a58aba
';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'";
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
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
```[_{{{CITATION{{{_3{Building a Complete Weather App from Scratch with HTML, CSS, and ...](https://dev.to/iamcymentho/building-a-complete-weather-app-from-scratch-with-html-css-and-javascript-a-step-by-step-guide-30h4)

Feel free to customize and enhance the app according to your requirements. You can also check out detailed tutorials and guides online for more advanced features and better understanding[_{{{CITATION{{{_3{Building a Complete Weather App from Scratch with HTML, CSS, and ...](https://dev.to/iamcymentho/building-a-complete-weather-app-from-scratch-with-html-css-and-javascript-a-step-by-step-guide-30h4)[_{{{CITATION{{{_2{How to Build a Weather App Using JavaScript for Complete Beginners](https://www.studytonight.com/post/how-to-build-a-weather-app-using-javascript-for-complete-beginners). 😊

Would you like more help with this project or anything else?
[_{{{CITATION{{{_4{](https://github.com/EleanorEllingson/web-dev/tree/b2f2a382e77a20fd6895677c8b8f402ac4bae352/7-bank-project%2F1-template-route%2Ftranslations%2FREADME.ko.md)[_{{{CITATION{{{_5{](https://github.com/didwiz/weather-app/tree/1cdefdec0c43e823c12afce29017137cf9cc74d3/resources%2Fviews%2Fwelcome.blade.php)
