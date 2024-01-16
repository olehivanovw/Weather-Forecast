import {Link} from "react-router-dom";
import {Typography, Box, Button, styled} from "@mui/material";
import errorImg from "../assets/404-error.png";

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
}

export default function NotFound() {
  return (
    <Wrapper>
      <Box sx={{textAlign: 'center'}}>
        <Typography variant="h3" sx={styles.text}>OOOps!</Typography>
        <Typography variant="h4" sx={styles.text}>Page not found!</Typography>
        <Typography variant="body2" sx={styles.text}>We're sorry, but the page you requested cannot be found.</Typography>
        <Link to='/'>
          <Button variant="outlined">Back to search</Button>
        </Link>
      </Box>
      <Box component='img' src={errorImg} alt="error-404" sx={{maxWidth: '30%', minWidth: '300px'}}></Box>
    </Wrapper>
  )
}
