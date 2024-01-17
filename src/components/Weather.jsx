import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import WeatherAPI from "../api/WeatherAPI.js";
import {Box, Button, Container, Paper, styled, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import WeatherIcon from "./WeatherIcon.jsx";
import WeatherImage from "./WeatherImage";
import Load from "./Load.jsx";

const Wrapper = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: '32px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

const styles = {
  mainBox: {
    textAlign: 'center',
    padding: 4,
    maxWidth: '320px',
    maxHeight: '596px',
    borderRadius: 4
  },
  mainInfo: {
    mb: 4,
  },
  mainInfoLocation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
    mb: 3
  },
  mainInfoTemp: {
    mb: 2,
  },
  subInfo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    mb: 4,
  },
  subInfoData: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1
  }
}

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

  if (!weather) {
    return (
      <Load></Load>
    )
  }

  if (weather !== null) {
    const mainTemp = Math.round(weather.temp)
    const maxTemp = Math.round(weather.tempMax)
    const minTemp = Math.round(weather.tempMin)
    const windSpeed = Math.round(weather.windSpeed)

    return (
      <Wrapper maxWidth="xl">
        <Box component={Paper} elevation={3} sx={styles.mainBox}>
            <Box sx={styles.mainInfo}>
              <Box sx={styles.mainInfoLocation}>
                <LocationOnIcon></LocationOnIcon>
                <Typography variant="h5">{city}</Typography>
              </Box>
              <WeatherIcon icon={weather}></WeatherIcon>
              <Typography variant="h1" sx={styles.mainInfoTemp}>{mainTemp}°</Typography>
              <Typography variant="body1">{weather.description}</Typography>
            </Box>
            <Box sx={styles.subInfo}>
              <Box sx={styles.subInfoData}>
                <WbSunnyIcon></WbSunnyIcon>
                <Typography variant="body1">{maxTemp}°</Typography>
              </Box>
              <Box sx={styles.subInfoData}>
                <AcUnitIcon></AcUnitIcon>
                <Typography variant="body1">{minTemp}°</Typography>
              </Box>
              <Box sx={styles.subInfoData}>
                <WaterDropIcon></WaterDropIcon>
                <Typography variant="body1">{weather.humidity}%</Typography>
              </Box>
              <Box sx={styles.subInfoData}>
                <AirIcon></AirIcon>
                <Typography variant="body1">{windSpeed} m/c</Typography>
              </Box>
            </Box>
            <Link to='/'>
              <Button variant="outlined">Back to search</Button>
            </Link>
        </Box>
        <WeatherImage name={weather}></WeatherImage>
      </Wrapper>
    )
  }
}
