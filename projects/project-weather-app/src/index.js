async function getWeather(location) {
  const apiKey = "RWUQEVDPA9SKXW3FWHR8CGQX6";
  const urlString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

  try {
    const urlApi = new URL(urlString); // this is just to practice new URL constructor
    // 1. Await the fetch response
    const fetchWeatherData = await fetch(urlApi);
    fetchWeatherData.json().then((weatherData) => {
      // console.log(weatherData);
      // console.log(weatherData.days[0]);
      // console.log(weatherData.days[0].address);
      // console.log(weatherData.days[0].conditions);
      // console.log(weatherData.days[0].datetime);
      // console.log(weatherData.days[0].humidity, "%");
      // console.log(weatherData.days[0].cloudcover, "%");
      // console.log(weatherData.days[0].dew);
      // console.log(weatherData.days[0].precip);
      // console.log(weatherData.days[0].preciptype);
      // console.log(weatherData.days[0].windspeed);
      // console.log(weatherData.days[0].severerisk);
      // console.log(weatherData.days[0].pressure);
      // console.log(weatherData.days[0].visibility);
      // console.log(weatherData.days[0].source);
      // console.log(weatherData.days[0].snow);
      // console.log(weatherData.days[0].snowdepth);
      // console.log(weatherData.days[0].sunrise);
      // console.log(weatherData.days[0].sunset);
      // console.log(weatherData.days[0].moonrise);
      // console.log(weatherData.days[0].moonset);
      // console.log(weatherData.days[0].temp);
      // console.log(weatherData.days[0].tempmax);
      // console.log(weatherData.days[0].tempmin);
      // console.log(weatherData.days[0].uvindex);
      const {
        address,
        conditions,
        datetime,
        humidity,
        cloudcover,
        dew,
        precip,
        preciptype,
        windspeed,
        severerisk,
        pressure,
        visibility,
        source,
        snow,
        snowdept,
        sunrise,
        sunset,
        moonrise,
        moonset,
        temp,
        tempmax,
        tempmin,
      } = weatherData.days[0];

      console.log(datetime, humidity);
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
getWeather("makassar");

const getWeatherButton = document.getElementById("get-weather-data");
getWeatherButton.addEventListener("click", () => {
  const location = document.getElementById("search-location");
  if (location.value !== "") getWeather(location.value);
  console.log("location empty");
});
