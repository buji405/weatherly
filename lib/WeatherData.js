function WeatherData(data) {
  return {
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    current: data.hourly_forecast[0].temp.english,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    time: data.forecast.simpleforecast.forecastday[0].date.pretty,
    blurb: data.forecast.txt_forecast.forecastday[0].fcttext,
    hourly: data.hourly_forecast.slice(0, 7),
    city: data.location.city,
    state: data.location.state
  }
}


export default WeatherData;
