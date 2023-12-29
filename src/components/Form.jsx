import {useNavigate} from "react-router-dom";
import {Typography, Button, Box, TextField} from "@mui/material";

export default function Form() {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    const newCity = e.target.inpCity.value.trim()

    navigate(`/weather/${newCity}`)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <h1>Weather Forecast</h1>
        <input type="text" name='inpCity' placeholder='Enter city'/>
        <button type='submit'>Search</button>
      </form>
    </div>

    // <Box component="section" sx={{textAlign: 'center'}}>
    //   <Typography variant="h1">Weather Forecast</Typography>
    //   <Box component="form" onSubmit={onSubmit} sx={{display: 'flex', justifyContent: 'center'}}>
    //     <TextField id="outlined-basic" label="Enter city" variant="outlined" name='inpWeather' size="small" sx={{ mr: 2, width: '25ch' }}/>
    //     <Button variant="contained" type='submit'>Search</Button>
    //   </Box>
    // </Box>
  )
}
