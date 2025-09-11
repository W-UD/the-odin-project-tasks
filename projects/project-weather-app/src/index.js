async function getWeather(location) {
  const apiKey = "RWUQEVDPA9SKXW3FWHR8CGQX6";
  const urlString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

  try {
    const urlApi = new URL(urlString); // this is just to practice new URL constructor
    // 1. Await the fetch response
    const fetchWeatherData = await fetch(urlApi);
    return fetchWeatherData.json().then((weatherData) => {
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

      return weatherData.days[0];
    });

    // 2. Check if the response is OK (status code 200-299)
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // 3. Await the parsing of the response body as JSON
    // const data = await response.json();

    // 4. Return the data for use elsewhere in your app
    // return data;
  } catch (error) {
    // 5. Handle any errors that occurred during the fetch or parsing
    console.error("Fetch failed:", error);
    // You might want to re-throw the error or show a message to the user
    throw error;
  }
}
putWeatherDataToDom("Makassar");

function putWeatherDataToDom(infoLocation) {
  const infoContainer = document.getElementById("info-container");
  const location = document.getElementById("location");
  const temp = document.getElementById("temp");
  const conditions = document.getElementById("conditions");
  if (infoLocation !== "") {
    const dataPromises = getWeather(infoLocation);
    dataPromises.then((data) => {
      location.innerText = `${infoLocation}`;
      temp.innerText = `${data.temp}`;
      conditions.innerText = `${data.conditions}`;

      const dataKeys = Object.keys(data);
      console.log(dataKeys);
      dataKeys.forEach((key, index, arr) => {
        if (key !== "hours") {
          const keyElement = document.createElement("div");
          keyElement.id = data[key];
          keyElement.innerText = `${key}: ${data[key]}`;
          infoContainer.appendChild(keyElement);
        }
      });
    });
  }
}

const getWeatherButton = document.getElementById("get-weather-data");
getWeatherButton.addEventListener("click", () => {
  const locationInput = document.getElementById("search-location");
  console.log(locationInput);
  putWeatherDataToDom(locationInput.value);
  console.log("location empty");
});
