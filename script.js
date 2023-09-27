/*document.addEventListener("DOMContentLoaded", () => {
    //90c3c8c6ba62f35624021d2ccf2f5b80
    const apiKey = '90c3c8c6ba62f35624021d2ccf2f5b80'; // Replace with your API key
    const weatherInfoElement = document.getElementById('weatherInfo');
    const locationInput = document.getElementById('locationInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const unitToggle = document.getElementById('unitToggle');

    getWeatherBtn.addEventListener('click', () => {
        const location = locationInput.value;
        const unit = unitToggle.value;

        // Construct the API URL with the user's input
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=&appid=90c3c8c6ba62f35624021d2ccf2f5b80`;

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Update the UI with weather information
                weatherInfoElement.innerHTML = `
                    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°${unit === 'metric' ? 'C' : 'F'}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                // Handle errors
                weatherInfoElement.innerHTML = '<p>Error: Location not found or API request failed.</p>';
            });
    });
});*/

// script.js

const locationInput = document.getElementById('location');
const submitBtn = document.getElementById('submit');
const weatherDiv = document.getElementById('weather');
const errorDiv = document.getElementById('error');
const unitsSelect = document.getElementById('units');

// OpenWeatherMap API key 
const apiKey = '90c3c8c6ba62f35624021d2ccf2f5b80';

submitBtn.addEventListener('click', getWeather);

function getWeather() {

  // get location
  const location = locationInput.value;
  
  // make API request
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'90c3c8c6ba62f35624021d2ccf2f5b80'}&units=${unitsSelect.value}`)
  .then(response => response.json())
  .then(data => {
    // handle success
    showWeather(data);
  })
  .catch(error => {
    // handle error
    showError('Error fetching weather data');  
  });

}

function showWeather(data) {
  // display weather data
  let html = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} °${unitsSelect.value === 'metric' ? 'C' : 'F'}</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
   
  `;

  weatherDiv.innerHTML = html;
}

function showError(message) {
  // show error message 
  errorDiv.innerHTML = message;  
}
