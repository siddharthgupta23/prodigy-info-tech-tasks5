function getWeather() {
    const cityInput = document.getElementById('city-input').value;
    const apiKey = 'here api key that is hidden';
    const apiUrl = `here  apiurl that is also hidden`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &deg;C</p>
        <p>Feels like: ${data.main.feels_like} &deg;C</p>
        <p>Minimum Temperature: ${data.main.temp_min} &deg;C</p>
        <p>Maximum Temperature: ${data.main.temp_max} &deg;C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Wind Direction: ${data.wind.deg}&deg;</p>
        <p>Description: ${data.weather[0].description}</p>
    `;
}
