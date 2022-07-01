import styled from 'styled-components'
import logo from '../../@types/svg/logo.svg'
import bell from '../../@types/svg/bell.svg'
import burgerIcon from '../../@types/svg/burger.svg'

export const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoNavContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 64.15%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BurgerIconStyled = styled.div`
  background-image: url(${burgerIcon});
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TitleStyled = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  display: flex;
  align-self: center;

  &::before {
    content: '';
    background-image: url(${logo});
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`

export const NavigationContainerStyled = styled.div<{isActiveBurger: boolean}>`
  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 442px;
    flex-direction: row;
  }

  @media(max-width: 768px) {
    width: 20%;
    position: absolute;
    right: 0;

    & > nav {
      display: ${({ isActiveBurger }) => isActiveBurger ? "none" : "flex"};
      flex-direction: column;
      width: auto;
    }
  }
`

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    width: 18.3px;
    height: 18.3px;
    background-image: url(${bell});
    margin-left: 61.83px;
  }
    
    @media (max-width: 768px) {
      display: none;
    }
`

export const LogInStyled = styled.a.attrs({
  href: '#',
})`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #7D8790;
  margin-right: 40px;
  text-decoration: none;

  @media (max-width: 1024px) {
    margin-right: 15px;
  }
`
export const RegisterButtonStyled = styled.button`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 146px;
  height: 52px;
  color: #FFFFFF;
  background-color: #215EE9;
  border-radius: 40px;
  border: 0;
  box-shadow: 0 100px 161px rgba(33, 94, 233, 0.08),
  0 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
  0 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
  0 20px 26.1625px rgba(33, 94, 233, 0.04),
  0 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
  0 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);

  @media (max-width: 768px) {
    width: 136px;
  }
`
