import {Box} from "@mui/material";
import clearImg from "../assets/icons/clear-icon.png";
import cloudsImg from "../assets/icons/clouds-icon.png";
import drizzleImg from "../assets/icons/drizzle-icon.png";
import rainImg from "../assets/icons/rain-icon.png";
import snowImg from "../assets/icons/snow-icon.png";
import stormImg from "../assets/icons/storm-icon.png";
import smoggyImg from "../assets/icons/smoggy-icon.png";

export default function WeatherIcon({icon}) {
  let weatherIcon

  switch (icon.weatherName) {
    case 'Clear':
      weatherIcon = clearImg
      break
    case 'Clouds':
      weatherIcon = cloudsImg
      break
    case 'Drizzle':
      weatherIcon = drizzleImg
      break
    case 'Rain':
      weatherIcon = rainImg
      break
    case 'Snow':
      weatherIcon = snowImg
      break
    case 'Thunderstorm':
      weatherIcon = stormImg
      break
    default:
      weatherIcon = smoggyImg
  }


  return (
    <Box component='img' src={weatherIcon} alt="weather-icon" sx={{width: '60%', mb: 1, filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}></Box>
  )
}
