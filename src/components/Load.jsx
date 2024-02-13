import {Box, CircularProgress, Typography} from "@mui/material";
import { useTranslation } from 'react-i18next'
import '../feature/i18n'

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
  const { t } = useTranslation()

  return (
    <Box sx={styles.loadBox}>
      <CircularProgress size={100}/>
      <Typography variant="h4">
        {t("load")}
      </Typography>
    </Box>
  )
}