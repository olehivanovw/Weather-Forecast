import { Box } from '@mui/material'

// Використання незалежного компонента для його перевикористанні в проекті та більшої гнучності додатку.
export const FormComponent = (props) => {
  // Тут використав інший підход до видобутку пропсів, хоча все одно це диструктирізація але в іншому місці.
  const {children, component, onSubmit, sx} = props

  return (
    <Box component={component} onSubmit={onSubmit} sx={sx}>
      {children}
    </Box>
  )
}