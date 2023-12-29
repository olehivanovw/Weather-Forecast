import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import WeatherAPI from "../api/WeatherAPI.js";

export default function Weather() {
  const { city } = useParams()
  const navigate = useNavigate()
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    WeatherAPI.getDataWeather(city)
      .then((newData) => {
        if (newData.cod === 200) {
          setWeather({
            location: newData.name,
            weatherName: newData.weather[0].main,
            description: newData.weather[0].description,
            temp: newData.main.temp,
            tempMax: newData.main.temp_max,
            tempMin: newData.main.temp_min,
            humidity: newData.main.humidity,
            windSpeed: newData.wind.speed,
          })
        } else {
          navigate('/*')
        }
      }).catch(e => console.error(e.message))
  }, [city])

  if (weather !== null) {
    return (
      <div>
        <h1>WEATHER IN {city}</h1>
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

}
