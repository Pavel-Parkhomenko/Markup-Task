import styled, { keyframes } from 'styled-components'
import logo from '@/@types/svg/logo.svg'
import burgerIcon from '@/@types/svg/burger.svg'
import closeIcon from '@/@types/svg/close.svg'

const CONTAINER_WIDTH = '100%'
const LOGO_WIDTH = '24px'
const LOGO_HEIGHT = '24px'
const BURGER_ICON_WIDTH = '32px'
const BURGER_ICON_HEIGHT = '32px'
const NAV_WIDTH = '100%'

export const Container = styled.div`
  width: ${CONTAINER_WIDTH};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.textColor.dark};

  &::before {
    content: '';
    background: url(${logo}) no-repeat;
    background-size: 100%;
    width: ${LOGO_WIDTH};
    height: ${LOGO_HEIGHT};
    margin-right: ${props => props.theme.spaces[2] + 2}px;
  }
`

export const BurgerIcon = styled.div<{ isActiveBurger: boolean }>`
  background-image: ${({ isActiveBurger }) => (isActiveBurger 
    ? `url(${burgerIcon})` 
    : `url(${closeIcon})`
  )};
  width: ${BURGER_ICON_WIDTH};
  height: ${BURGER_ICON_HEIGHT};
  position: absolute;
  top: 0;
  right: 0;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const fromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const NavigationStyled = styled.div<{ isActiveBurger: boolean }>`
  flex: 2;
  & > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  @media (max-width: 767px) {
    & > nav {
      animation: ${fromRight} 0.5s;
      display: ${({ isActiveBurger }) => (isActiveBurger ? 'none' : 'flex')};
      flex-direction: column;
      width: ${NAV_WIDTH};
      position: absolute;
      left: 0;
      top: 27px;
    }
    
    & > nav > div:first-child {
      display: flex;
      flex-direction: column;
      width: ${NAV_WIDTH};
      align-items: flex-start;
      margin-bottom: 50px;
    }
  }
`
