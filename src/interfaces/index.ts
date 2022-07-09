import React from 'react'

// eslint-disable-next-line no-shadow
export enum VariantButton {
  email = 'email',
  register = 'register'
}

export interface IButtonStyled {
  variant: keyof typeof VariantButton
}

export interface IPropsButton extends IButtonStyled {
  title: string,
  onClick: () => void
}

export interface IPropsHeader {
  isActiveBurger: boolean,
  setIsActiveBurger: React.Dispatch<React.SetStateAction<boolean>>
}
