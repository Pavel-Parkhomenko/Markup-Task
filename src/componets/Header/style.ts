import styled, { keyframes } from 'styled-components'
import logo from '@/@types/svg/logo.svg'
import burgerIcon from '@/@types/svg/burger.svg'

export const HeaderContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoNavContainerStyled = styled.div`
  display: flex;
  width: ${props => props.theme.size.med}px;
  justify-content: space-between;
`

export const BurgerIconStyled = styled.div`
  background-image: url(${burgerIcon});
  width: ${props => props.theme.spaces[4]}px;
  height: ${props => props.theme.spaces[4]}px;
  position: absolute;
  right: ${props => props.theme.spaces[3]}px;
  
  @media (min-width: 768px) {
    display: none;
  }
`

export const TitleStyled = styled.div`
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: ${props => props.theme.fontSizes[4]}px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor.dark};
  display: flex;
  align-items: center;

  &::before {
    content: '';
    background-image: url(${logo});
    width: ${props => props.theme.size.little - 1}px;
    height: ${props => props.theme.size.little - 1}px;
    margin-right: ${props => props.theme.spaces[2] + 2}px;
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

export const NavigationContainerStyled = styled.div<{ isActiveBurger: boolean }>`
  padding-right: ${props => props.theme.spaces[1]}px;

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    position: absolute;
    right: ${props => props.theme.spaces[3]}px;
    display: flex;
    justify-content: right;
    flex-direction: column;
    top: ${props => props.theme.spaces[3] + 10}px;
    
    & > nav {
      display: ${({ isActiveBurger }) => (isActiveBurger ? 'none' : 'flex')};
      flex-direction: column;
      width: ${props => props.theme.size.small + 20}px;
      position: absolute;
      top: ${props => props.theme.spaces[4]}px;
      right: 0;
      //& > div {animation: ${fromRight} 0.5s;}
    }
  }
`
