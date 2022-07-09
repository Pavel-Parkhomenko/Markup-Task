import React from 'react'
import {
  Container,
  Title,
  NavigationStyled,
  BurgerIcon,
} from './styled'
import { Navigation } from '@/componets/Navigation'
import { headerTitle } from '@/mocks'

interface IPropsHeader {
  isActiveBurger: boolean,
  setIsActiveBurger: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.FC<IPropsHeader> = ({ isActiveBurger, setIsActiveBurger }) => {
  const burgerHandler = () => setIsActiveBurger(!isActiveBurger)

  return (
    <Container>
      <Title>{ headerTitle }</Title>
      <NavigationStyled isActiveBurger={isActiveBurger}>
        <BurgerIcon onClick={burgerHandler} />
        <Navigation />
      </NavigationStyled>
    </Container>
  )
}
