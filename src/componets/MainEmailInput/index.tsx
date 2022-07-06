import React from 'react'
import {
  EmailButtonStyled,
  InputEmailContainerStyled,
  InputEmailStyled,
} from './style'

export function MainEmailInput() {
  return (
    <InputEmailContainerStyled>
      <InputEmailStyled />
      <EmailButtonStyled>
        Get Started
      </EmailButtonStyled>
    </InputEmailContainerStyled>
  )
}
