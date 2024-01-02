import {Link} from "react-router-dom";
import {Typography, Box, Button} from "@mui/material";
import errorImg from "../assets/404-error.png";

export default function NotFound() {
  return (
    <Box sx={{textAlign: 'center'}}>
      <Box component='img' src={errorImg} alt="error-404" sx={{width: '60%' }}></Box>
      <Typography variant="h4" sx={{mb: 2}}>Page not found</Typography>
      <Typography variant="body2" sx={{mb: 2}}>We're sorry, but the page you requested cannot be found.</Typography>
      <Link to='/'>
        <Button variant="outlined">Back to search</Button>
      </Link>
    </Box>
  )
}
