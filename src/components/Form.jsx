import {useNavigate} from "react-router-dom";
import {Typography, Button, Box, TextField, Paper, Container} from "@mui/material";
import backImgMain from "../assets/backImgMain.jpg"

const styles = {
  container: {
    minHeight: '100vh',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backImgMain})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  },
  paperBox: {
    textAlign: 'center',
    paddingTop: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 6,
    borderRadius: 2,
    bgcolor: 'rgba(232,232,232,0.4)'
  },
  typography: {
    mb: 4,
    fontWeight: 'bold',
    fontSize: '5rem',
  },
  formBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2
  },
  textField: {
    mr: 2,
    maxWidth: '25ch',
  },
  button: {
    fontSize: '1rem'
  }
};

export default function Form() {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    const newCity = e.target.inpCity.value.trim()

    navigate(`/weather/${newCity}`)
  }

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Box component={Paper} elevation={3} sx={styles.paperBox}>
        <Typography variant="h1" sx={styles.typography}>Weather Forecast</Typography>
        <Box component="form" onSubmit={handleSearch} sx={styles.formBox}>
          <TextField label="Enter city" variant="outlined" name='inpCity' size="small" autoComplete="off" sx={styles.textField}/>
          <Button variant="contained" type='submit' sx={styles.button}>Search</Button>
        </Box>
      </Box>
    </Container>
  )
}
