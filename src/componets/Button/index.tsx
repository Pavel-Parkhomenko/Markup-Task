import React from 'react'
import { ButtonStyled } from '@/componets/Button/styled'
import { IPropsButton } from '@/interfaces/'

export const Button: React.FC<IPropsButton> = ({
  title,
  variant,
  onClick
}) => {
  return (
    <ButtonStyled onClick={onClick} variant={variant}>
      {title}
    </ButtonStyled>
  )
}
