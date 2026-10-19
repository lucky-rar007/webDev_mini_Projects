const button = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

button.addEventListener("click", getWeather);
cityInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") getWeather();
});

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.innerHTML = '<p class="error">Please enter a city name.</p>';
    return;
  }

  const url =
    `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

  try {
    weatherResult.innerHTML = '<p class="loading">Loading...</p>';

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const current = data.current_condition[0];
    const area = data.nearest_area[0];

    const cityName = area.areaName[0].value;
    const country = area.country[0].value;
    const tempC = current.temp_C;
    const tempF = current.temp_F;
    const description = current.weatherDesc[0].value;
    const humidity = current.humidity;
    const windSpeed = current.windspeedKmph;
    const feelsLikeC = current.FeelsLikeC;

    weatherResult.innerHTML = `
      <div class="result-content">
        <h2>${cityName}, ${country}</h2>
        <p class="temp">${tempC}°C <span class="temp-alt">(${tempF}°F)</span></p>
        <p class="desc">${description}</p>
        <div class="details">
          <span>💧 Humidity: ${humidity}%</span>
          <span>💨 Wind: ${windSpeed} km/h</span>
          <span>🌡 Feels like: ${feelsLikeC}°C</span>
        </div>
      </div>
    `;

  } catch (error) {
    weatherResult.innerHTML =
      `<p class="error">Error: ${error.message}. Please try another city.</p>`;
  }
}