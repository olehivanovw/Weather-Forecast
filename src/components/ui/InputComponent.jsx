import { TextField } from '@mui/material'
import { memo } from 'react'

// Використання незалежного компонента для його перевикористанні в проекті та більшої гнучності додатку.
// 'memo' дозволяє пропустити повторне рендеринг компонента, якщо його атрибути не змінені.
export const InputComponent = memo((props) => {
  // Тут використав інший підход до видобутку пропсів, хоча все одно це диструктирізація але в іншому місці.
  const {label, variant, name, size, autoComplete, sx} = props

  return (
    <TextField
      label={label}
      variant={variant}
      name={name}
      size={size}
      autoComplete={autoComplete}
      sx={sx}
    />
  )
})