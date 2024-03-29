import { Link, useNavigate } from 'react-router-dom'
import { Typography, Paper, Container, styled, AppBar, Toolbar, Box } from '@mui/material'
import backImgMain from "../assets/backImgMain.jpg"
import { ButtonComponent } from "./ui/ButtonComponent.jsx"
import { InputComponent } from './ui/InputComponent.jsx'
import { FormComponent } from './ui/FormComponent.jsx'
import logoImg from '../assets/weatherLogo.svg'
import '../feature/i18n'
import { useTranslation } from 'react-i18next'
import LANGS from '../feature/i18n/constans.js'

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
  containerWrap: {
    minHeight: '100vh',
    minWidth: '100%',
    backgroundImage: `url(${backImgMain})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  },
  navbarWrap: {
    display: "flex",
    justifyContent: "center",
    minHeight: '90px',
    backgroundColor: "rgba(232,232,232,0.4)",
    borderRadius: "0 0 8px 8px"
  },
  navbarBox: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  containerForm: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  const { t, i18n } = useTranslation()

  const handleSearch = (e) => {
    e.preventDefault()

    const newCity = e.target.inpCity.value.trim()

    if (newCity.length !== 0) {
      navigate(`/weather/${newCity}`)
    } else {
      navigate('/*')
    }
  }

  const onBtnEnClick = () => {
    i18n.changeLanguage(LANGS.EN)
  }

  const onBtnUkClick = () => {
    i18n.changeLanguage(LANGS.UK)
  }

  return (
    <Container sx={styles.containerWrap}>
      <Container maxWidth="xl">

        <AppBar position="static" sx={styles.navbarWrap}>
          <Toolbar sx={{display: "flex", justifyContent: "space-between",}}>
            <Box sx={styles.navbarBox}>
              <Link to='/'>
                <Box component='img' src={logoImg} alt="logo" sx={styles.image}></Box>
              </Link>
                <Typography variant="h6" sx={{color: "#000", fontWeight: 'bold'}}>
                  {t("logo")}
                </Typography>
            </Box>

            <Box sx={styles.navbarBox}>
              <ButtonComponent
                variant='outlined'
                onClick={onBtnEnClick}
                disabled={i18n.language === 'en'}
              >
                {t("button.lang.en")}
              </ButtonComponent>
              <ButtonComponent
                variant='outlined'
                onClick={onBtnUkClick}
                disabled={i18n.language === 'uk'}
              >
                {t("button.lang.uk")}
              </ButtonComponent>
            </Box>
          </Toolbar>
        </AppBar>

        <Container sx={styles.containerForm}>
          <Wrapper elevation={3}>
            <Typography variant="h1" sx={styles.typography}>
              {t("headingMain")}
            </Typography>
            <FormComponent component="form" onSubmit={handleSearch} sx={styles.formBox}>
              <InputComponent
                label={t("inputPlaceholder")}
                variant="outlined"
                name='inpCity'
                size="small"
                autoComplete="off"
                sx={styles.textField} />
              <ButtonComponent
                variant='contained'
                type='submit'
                sx={styles.button}
              >
                {t("button.search")}
              </ButtonComponent>
            </FormComponent>
            <Typography sx={{mt: 4, textDecoration: 'underline'}}>
              {t("rulesSearch")}
            </Typography>
          </Wrapper>
        </Container>

      </Container>
    </Container>
  )
}
