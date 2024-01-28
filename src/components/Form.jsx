import {useNavigate} from "react-router-dom";
import {Typography, Box, TextField, Paper, Container, styled} from "@mui/material";
import backImgMain from "../assets/backImgMain.jpg"
import { ButtonComponent } from "./ui/ButtonComponent.jsx"
import { InputComponent } from './ui/InputComponent.jsx'
import { FormComponent } from './ui/FormComponent.jsx'

const Wrapper = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: "48px 64px 48px 64px",
  borderRadius: "8px",
  backgroundColor: "rgba(232,232,232,0.4)",
  [theme.breakpoints.down('lg')]: {
    padding: "32px 48px 32px 48px",
  },
  [theme.breakpoints.down('sm')]: {
    padding: "24px",
  },
}));

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

    if (newCity.length !== 0) {
      navigate(`/weather/${newCity}`)
    } else {
      navigate('/*')
    }
  }

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Wrapper elevation={3}>
        <Typography variant="h1" sx={styles.typography}>Weather Forecast</Typography>
        <FormComponent component="form" onSubmit={handleSearch} sx={styles.formBox}>
          <InputComponent label="Enter city" variant="outlined" name='inpCity' size="small" autoComplete="off" sx={styles.textField} />
          <ButtonComponent variant='contained' type='submit' sx={styles.button}>Search</ButtonComponent>
        </FormComponent>
      </Wrapper>
    </Container>
  )
}
