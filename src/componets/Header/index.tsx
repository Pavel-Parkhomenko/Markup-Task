import React, { useState } from 'react'
import {
  HeaderContainerStyled,
  LogoNavContainerStyled,
  TitleStyled,
  NavigationContainerStyled,
  BurgerIconStyled,
} from './style'
import { Navigation } from '../Navigation'

export function Header() {
  const [isActiveBurger, setIsActiveBurger] = useState(false)
  const burgerHandler = () => setIsActiveBurger(prev => !prev)
  console.log(isActiveBurger)

  return (
    <HeaderContainerStyled>
      <LogoNavContainerStyled>
        <TitleStyled>Modsen Health</TitleStyled>
      </LogoNavContainerStyled>
      <NavigationContainerStyled isActiveBurger={isActiveBurger}>
        <BurgerIconStyled onClick={burgerHandler} />
        <Navigation />
      </NavigationContainerStyled>
    </HeaderContainerStyled>
  )
}
