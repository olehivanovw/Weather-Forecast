import {Box} from "@mui/material";
import clearImg from "../assets/clear-icon.png";
import cloudsImg from "../assets/clouds-icon.png";
import drizzleImg from "../assets/drizzle-icon.png";
import rainImg from "../assets/rain-icon.png";
import snowImg from "../assets/snow-icon.png";
import stormImg from "../assets/storm-icon.png";
import smoggyImg from "../assets/smoggy-icon.png";

export default function WeatherImg({icon}) {
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
    <Box component='img' src={weatherIcon} alt="weather-icon" sx={{width: '60%', mb: 1}}></Box>
  )
}
