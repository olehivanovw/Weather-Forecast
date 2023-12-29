import {Link} from "react-router-dom";
import {Typography, Box, Button} from "@mui/material";

export default function NotFound() {
  return (
    <Box sx={{textAlign: 'center'}}>
      <Typography variant="h3" sx={{mb: 2}}>404 - Page not found</Typography>
      <Typography variant="body1" sx={{mb: 2}}>We're sorry, but the page you requested cannot be found.</Typography>
      <Link to='/'>
        <Button variant="outlined">Back to search</Button>
      </Link>
    </Box>
  )
}
