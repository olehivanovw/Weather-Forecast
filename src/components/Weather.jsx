import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import WeatherAPI from "../api/WeatherAPI.js";

export default function Weather({formData}) {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    WeatherAPI.getDataWeather(formData)
      .then((newData) => {
        setWeather({
          location: newData.name,
          weatherName: newData.weather[0].main,
          description: newData.weather[0].description,
          temp: newData.main.temp,
          tempMax: newData.main.temp_max,
          tempMin: newData.main.temp_min,
          humidity: newData.main.humidity,
          windSpeed: newData.wind.speed
        })
      }).catch(e => console.error(e.message))
  }, [formData])

  return (
    <div>
      <h1>WEATHER {formData}</h1>
      <p>Temperature: {weather.temp}</p>
      <p>Discription: {weather.description}</p>
      <p>Temperature Max: {weather.tempMax}</p>
      <p>Temperature Min: {weather.tempMin}</p>
      <p>Humidity: {weather.humidity}</p>
      <p>Wind speed: {weather.windSpeed}</p>
      <Link to='/'>
        <button>BACK TO SEARCH</button>
      </Link>
    </div>
  )
}
