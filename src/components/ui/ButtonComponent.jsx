import { Button } from '@mui/material'
import { memo } from 'react'

// Використання незалежного компонента для його перевикористанні в проекті та більшої гнучності додатку.
// 'memo' дозволяє пропустити повторне рендеринг компонента, якщо його атрибути не змінені.
export const ButtonComponent = memo(({children, variant, type, sx, disabled, href, onClick}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      type={type}
      sx={sx}
      disabled={disabled}
      href={href}
    >
      {children}
    </Button>
  )
})