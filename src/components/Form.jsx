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
    <Box sx={{textAlign: 'center'}}>
      <Typography variant="h1" sx={{mb: 4}}>Weather Forecast</Typography>
      <Box component="form" onSubmit={handleSearch} sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 2}}>
        <TextField id="outlined-basic" label="Enter city" variant="outlined" name='inpCity' size="small" sx={{ mr: 2, width: '25ch' }}/>
        <Button variant="contained" type='submit'>Search</Button>
      </Box>
    </Box>
  )
}
