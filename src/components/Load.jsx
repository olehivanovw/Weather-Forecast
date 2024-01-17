import {Box, CircularProgress, Typography} from "@mui/material";

const styles = {
  loadBox: {
    minHeight: '100vh',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    gap: 4,
  }
}

export default function Load() {
  return (
    <Box sx={styles.loadBox}>
      <CircularProgress size={100}/>
      <Typography variant="h4">Please Wait...</Typography>
    </Box>
  )
}