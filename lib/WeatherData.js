
function WeatherData(data) {
  return {
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    current: data.hourly_forecast[0].temp.english,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    time: data.current_observation.observation_time,
    blurb: data.forecast.txt_forecast.forecastday[0].fcttext,
    hourly: data.hourly_forecast.slice(0, 7),
    daily: data.forecast.simpleforecast.forecastday.slice(0, 10),
    city: data.current_observation.display_location.full,
    icon: data.current_observation.icon,
  };
}


export default WeatherData;
