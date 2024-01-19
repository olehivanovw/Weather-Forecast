import {Box, styled} from "@mui/material";
import clearImg from "../assets/image/sun-min.jpg";
import cloudsImg from "../assets/image/clouds-min.jpg";
import drizzleImg from "../assets/image/drizzle-min.jpg";
import rainImg from "../assets/image/rain-min.jpg";
import snowImg from "../assets/image/snow-min.jpg";
import stormImg from "../assets/image/storm-min.jpg";
import smoggyImg from "../assets/image/smoggy-min.jpg";

export default function WeatherImage({name}) {
  let weatherImage

  switch (name.weatherName) {
    case 'Clear':
      weatherImage = clearImg
      break
    case 'Clouds':
      weatherImage = cloudsImg
      break
    case 'Drizzle':
      weatherImage = drizzleImg
      break
    case 'Rain':
      weatherImage = rainImg
      break
    case 'Snow':
      weatherImage = snowImg
      break
    case 'Thunderstorm':
      weatherImage = stormImg
      break
    default:
      weatherImage = smoggyImg
  }

  const Wrapper = styled(Box)(({ theme }) => ({
    minHeight: '596px',
    minWidth: '600px',
    borderRadius: '16px',
    backgroundImage: `url(${weatherImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: "drop-shadow(0 0 5px rgba(0,0,0,0.5))",
    [theme.breakpoints.down('lg')]: {
      minHeight: '240px',
      minWidth: '320px',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '120px',
      minWidth: '320px',
    },
  }));

  return (
    <Wrapper></Wrapper>
  )
}
