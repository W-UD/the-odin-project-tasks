import "./main.css";
import { getWeatherIcon } from "./data-api/weather-icon.js";
import publicApiKey from "./data-api/public-api-register.json";

function hideLoading() {
  const loading = document.getElementById("global-loading");
  if (loading) loading.remove();
}

function showLoading() {
  // ✅ Create loading without destroying existing content
  const existingLoading = document.getElementById("global-loading");
  if (existingLoading) return; // Don't duplicate

  const loadingDiv = document.createElement("div");
  loadingDiv.id = "global-loading";
  loadingDiv.innerHTML =
    '<div style="color: white; font-size: 20px;">Loading...</div>';
  document.body.appendChild(loadingDiv);
}

function fetchError() {
  const body = document.body;
  const errorEl = document.createElement("div");
  errorEl.id = "error-el";
  errorEl.innerText = "No data availabe for your search..";

  body.appendChild(errorEl);

  // setTimeout(() => {
  //   errorEl.remove();
  // }, 3000);
}

async function getWeather(location) {
  const urlString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${publicApiKey.key}&contentType=json`;
  showLoading();

  try {
    const urlApi = new URL(urlString); // this is just to practice new URL constructor
    // 1. Await the fetch response
    const fetchWeatherData = await fetch(urlApi);
    const weatherData = await fetchWeatherData.json();
    // return fetchWeatherData.json().then((weatherData) => {
    // const {
    //   address,
    //   conditions,
    //   datetime,
    //   humidity,
    //   cloudcover,
    //   dew,
    //   precip,
    //   preciptype,
    //   windspeed,
    //   severerisk,
    //   pressure,
    //   visibility,
    //   source,
    //   snow,
    //   snowdept,
    //   sunrise,
    //   sunset,
    //   moonrise,
    //   moonset,
    //   temp,
    //   tempmax,
    //   tempmin,
    // } = weatherData.days[0];

    // console.log(datetime, humidity);

    // return weatherData.days[0];
    // });

    // 2. Check if the response is OK (status code 200-299)
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // 3. Await the parsing of the response body as JSON
    // const data = await response.json();

    // 4. Return the data for use elsewhere in your app
    // return data;
    return weatherData.days[0];
  } catch (error) {
    // 5. Handle any errors that occurred during the fetch or parsing
    // You might want to re-throw the error or show a message to the user

    fetchError();
  } finally {
    hideLoading();
  }
}
putWeatherDataToDom("Makassar");

function putWeatherDataToDom(infoLocation) {
  const inputLocation = document.getElementById("search-location");
  inputLocation.placeholder = infoLocation;
  // Reset input location value for placeholder
  inputLocation.value = "";

  const infoContainer = document.getElementById("info-container");
  infoContainer.innerHTML = "";
  const location = document.getElementById("location");
  location.innerHTML = "";
  //  const temp = document.getElementById("temp");
  //  const conditions = document.getElementById("conditions");

  if (infoLocation !== "" && infoLocation !== null) {
    const dataPromises = getWeather(infoLocation);
    console.log(dataPromises);
    const locationLetters = infoLocation.split("");
    locationLetters.forEach((l) => {
      const element = document.createElement("div");
      element.innerText = l;
      location.appendChild(element);
    });

    dataPromises.then((data) => {
      const errorEl = document.getElementById("error-el");
      if (errorEl) errorEl.remove();

      if (typeof data !== "object") {
        fetchError();
        return;
      }

      const dataKeys = Object.keys(data);
      console.log(dataKeys);
      dataKeys.forEach((key, index, arr) => {
        if (key === "temp" || key === "conditions" || key === "datetime") {
          const keyElement = document.createElement("div");
          keyElement.id = key;
          keyElement.classList.add("top-table");
          keyElement.innerText = `${key}: ${data[key]}`;
          infoContainer.appendChild(keyElement);
        } else if (key !== "hours") {
          const keyElement = document.createElement("div");
          keyElement.id = key;
          keyElement.innerText = `${key}: ${data[key]}`;
          infoContainer.appendChild(keyElement);
        }
      });
      const tempElement = document.getElementById("temp");
      const iconElement = document.createElement("img");

      const iconPath = getWeatherIcon(data.icon).then((path) => {
        console.log(path);
        iconElement.id = `${data.icon}`;
        iconElement.src = path;
      });
      console.log(iconElement);

      tempElement.appendChild(iconElement);
    });
  }
}

const getWeatherButton = document.getElementById("get-weather-data");
getWeatherButton.addEventListener("click", (event) => {
  event.preventDefault();
  const locationInput = document.getElementById("search-location");
  console.log(locationInput);
  if (locationInput.value !== "") {
    putWeatherDataToDom(locationInput.value);
  }
});
