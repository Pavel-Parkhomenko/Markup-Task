import React from 'react'
import {
  EmailButtonStyled,
  InputEmailContainerStyled,
  InputEmailStyled,
} from './style'

export const MainEmailInput = () => {
  return(
    <InputEmailContainerStyled>
      <InputEmailStyled />
      <EmailButtonStyled>
        Get Started
      </EmailButtonStyled>
    </InputEmailContainerStyled>
  )
}
