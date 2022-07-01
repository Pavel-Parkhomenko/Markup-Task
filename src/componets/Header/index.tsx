import React, { useState } from 'react'
import {
  HeaderContainerStyled,
  LogoNavContainerStyled,
  AuthContainer,
  TitleStyled,
  LogInStyled,
  RegisterButtonStyled,
  NavigationContainerStyled,
  BurgerIconStyled,
} from './style'
import { Navigation } from '../Navigation'

export const Header = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false)
  const burgerHandler = () => setIsActiveBurger(prev => !prev)
console.log(isActiveBurger)

  return (
    <HeaderContainerStyled>
      <LogoNavContainerStyled>

        <TitleStyled>Modsen Health</TitleStyled>

          <NavigationContainerStyled isActiveBurger={isActiveBurger}>
            <BurgerIconStyled onClick={burgerHandler}/>
            <Navigation />
          </NavigationContainerStyled>

      </LogoNavContainerStyled>

      <AuthContainer>
        <LogInStyled>Log In</LogInStyled>
        <RegisterButtonStyled>Registr</RegisterButtonStyled>
      </AuthContainer>

    </HeaderContainerStyled>
  )
}
