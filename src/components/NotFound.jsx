import {Link} from "react-router-dom";
import {Typography, Box, Button, styled} from "@mui/material";
import errorImg from "../assets/404-error-min.png";
import { ButtonComponent } from './ui/ButtonComponent.jsx'
import { useTranslation } from 'react-i18next'
import '../feature/i18n'

const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  minHeight: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

const styles = {
  text: {
    mb: 2,
  },
  image: {
    maxWidth: '30%',
    minWidth: '300px',
    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))",
  }
}

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Box sx={{textAlign: 'center'}}>
        <Typography variant="h3" sx={styles.text}>{t("notFound.ops")}</Typography>
        <Typography variant="h4" sx={styles.text}>{t("notFound.page")}</Typography>
        <Typography variant="body2" sx={styles.text}>{t("notFound.sorry")}</Typography>
        <Link to='/'>
          <ButtonComponent variant='outlined'>
            {t("button.back")}
          </ButtonComponent>
        </Link>
      </Box>
      <Box component='img' src={errorImg} alt="error-404" sx={styles.image}></Box>
    </Wrapper>
  )
}
