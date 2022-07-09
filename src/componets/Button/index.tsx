import React from 'react'
import { ButtonStyled } from '@/componets/Button/styled'
import { IPropsButton } from '@/interfaces/'

export const Button: React.FC<IPropsButton> = ({
  title,
  type,
  marginRight,
  width
}) => {
  return (
    <ButtonStyled>
      {title}
    </ButtonStyled>
  )
}
