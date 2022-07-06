import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import bell from '@/@types/svg/bell.svg'

export const NavContainerStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-right: ${props => props.theme.spaces[7] + 22}px;
    width: ${props => props.theme.size.large - 30}px;
    justify-content: space-between;
  }
  
  @media(max-width: 1200px) {
    width: ${props => props.theme.size.big + 50}px;
  }

  @media(max-width: 992px) {
    margin-right: ${props => props.theme.spaces[5] + 22}px;
  }

  @media(max-width: 768px) {
    margin-right: 0;
  }
`

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    width: ${props => props.theme.size.little - 7}px;
    height: ${props => props.theme.size.little - 7}px;
    background-image: url(${bell});
    margin-left: ${props => props.theme.spaces[6]}px;

    @media (max-width: 992px) {
      margin-left: ${props => props.theme.spaces[3]}px;
    }
  }
    
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: ${props => props.theme.size.med}px;
    justify-content: space-around;

    &::after {
      margin-left: 0;
    }
  }
`

export const LogInStyled = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  line-height: ${props => props.theme.spaces[3]}px;
  color: ${({ theme }) => theme.textColor.muted};
  margin-right: ${props => props.theme.spaces[5]}px;
  text-decoration: none;
  
  @media(max-width: 1024px){
    margin-right: ${props => props.theme.spaces[3]}px;
  }
  
  @media(max-width: 768px){
    margin-right: 0;
  }
`

export const RegisterTextStyled = styled(Link)`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: ${props => props.theme.spaces[3] + 3}px;
  color: ${({ theme }) => theme.textColor.light};
  text-decoration: none;
`

export const RegisterButtonStyled = styled.button`
  text-align: center;
  width: ${props => props.theme.size.med}px;
  height: ${props => props.theme.size.xs}px;
  background-color: ${({ theme }) => theme.textColor.primary};;
  border-radius: ${props => props.theme.spaces[5] + 8}px;
  border: 0;
  cursor: pointer;
  box-shadow: 0 100px 161px rgba(33, 94, 233, 0.08),
  0 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
  0 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
  0 20px 26.1625px rgba(33, 94, 233, 0.04),
  0 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
  0 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);


  @media(max-width: 992px) {
    width: ${props => props.theme.size.small + 20}px;
    height: ${props => props.theme.size.xs}px;
  }

  @media (max-width: 768px) {
    width: ${props => props.theme.size.xs + 20}px;
    height: ${props => props.theme.size.little}px;
  }
`

export const LinkContainerStyled = styled.div<{ active: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.textColor.muted};

  ${props => (props.active === 'true' ? css`
    & > :last-child {
      opacity: 1;
    }
    & > :first-child {
      color: ${({ theme }) => theme.textColor.primary}
    }
  ` : css`
    & > :last-child {
      opacity: 0;
    }
  `)};
`

export const CircleLinkPointStyled = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgColor.primary};
  width: 8px;
  height: 8px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes[2]}px;
  position: relative;
  cursor: pointer;
  margin-top: ${props => props.theme.spaces[3]}px;
  margin-bottom: ${props => props.theme.spaces[2]}px;
  color: ${({ theme }) => theme.textColor.muted};

  &:hover {
    color: ${({ theme }) => theme.bgColor.primary};
  }
`
