import "./main.css";
import { getWeatherIcon } from "./data-api/weather-icon.js";
import publicApiKey from "./data-api/public-api-register.json";

function hideLoading() {
  const loading = document.getElementById("global-loading");
  if (loading) loading.remove();
}

function showLoading() {
  const existingLoading = document.getElementById("global-loading");
  if (existingLoading) return;

  const loadingDiv = document.createElement("div");
  loadingDiv.id = "global-loading";
  loadingDiv.innerHTML =
    '<div style="color: white; font-size: 20px;">Loading...</div>';
  document.body.appendChild(loadingDiv);
}

function fetchError() {
  const body = document.body;
  const errorContainerCheck = document.getElementById("error-el-container");
  if (errorContainerCheck) errorContainerCheck.remove();

  // Error Elements Container
  const errorElContainer = document.createElement("div");
  errorElContainer.id = "error-el-container";

  const errorEl = document.createElement("div");
  errorEl.id = "error-el";
  errorEl.innerText = "No data availabe for your search..";
  errorElContainer.appendChild(errorEl);

  // New Search Container to Elements Container
  const newSearchContainer = document.createElement("div");
  newSearchContainer.id = "new-search-container";
  errorElContainer.appendChild(newSearchContainer);

  const newSearchInput = document.createElement("input");
  newSearchInput.id = "new-search-location";
  newSearchContainer.appendChild(newSearchInput);

  const newSearchButton = document.createElement("button");
  newSearchButton.id = "new-search-button";
  newSearchButton.innerText = "New Location";
  newSearchButton.addEventListener("click", (event) => {
    const newLocationInput = document.getElementById("new-search-location");
    getWeatherButtonHandler(newLocationInput, event);
  });
  newSearchContainer.appendChild(newSearchButton);

  body.appendChild(errorElContainer);
}

async function getWeather(location) {
  const urlString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${publicApiKey.key}&contentType=json`;
  showLoading();

  try {
    const urlApi = new URL(urlString); // this is just to practice new URL constructor
    const fetchWeatherData = await fetch(urlApi);
    const weatherData = await fetchWeatherData.json();
    return weatherData.days[0];
  } catch (error) {
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
      const errorElContainer = document.getElementById("error-el-container");
      if (errorElContainer) errorElContainer.remove();

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
  const locationInput = document.getElementById("search-location");
  getWeatherButtonHandler(locationInput, event);
});

function getWeatherButtonHandler(locationInput, event) {
  event.preventDefault();
  console.log(locationInput);
  if (locationInput.value !== "") {
    putWeatherDataToDom(locationInput.value);
  }
}
