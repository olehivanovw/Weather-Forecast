import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import WeatherAPI from "../api/WeatherAPI.js";
import {Box, Button, Paper, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import WeatherImg from "./WeatherImg";

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
    const mainTemp = Math.round(weather.temp)
    const maxTemp = Math.round(weather.tempMax)
    const minTemp = Math.round(weather.tempMin)
    const windSpeed = Math.round(weather.windSpeed)

    return (
      <Box component={Paper} elevation={3} sx={{textAlign: 'center', padding: 4, maxWidth: '320px', borderRadius: 4,}}>
        <Box sx={{mb: 4}}>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 3}}>
            <LocationOnIcon></LocationOnIcon>
            <Typography variant="h5">{city}</Typography>
          </Box>
          <WeatherImg icon={weather}></WeatherImg>
          <Typography variant="h1" sx={{mb: 2}}>{mainTemp}°</Typography>
          <Typography variant="body1">{weather.description}</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, mb: 4}}>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
            <WbSunnyIcon></WbSunnyIcon>
            <Typography variant="body1">{maxTemp}°</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
            <AcUnitIcon></AcUnitIcon>
            <Typography variant="body1">{minTemp}°</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
            <WaterDropIcon></WaterDropIcon>
            <Typography variant="body1">{weather.humidity}%</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
            <AirIcon></AirIcon>
            <Typography variant="body1">{windSpeed} m/c</Typography>
          </Box>
        </Box>
        <Link to='/'>
          <Button variant="outlined">Back to search</Button>
        </Link>
      </Box>
    )
  }

}
