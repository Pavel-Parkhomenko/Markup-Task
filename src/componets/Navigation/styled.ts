import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import bell from '@/@types/svg/bell.svg'

const CONTAINER_WIDTH = '100%'
const BELL_WIDTH = '22px'
const BELL_HEIGHT = '22px'
const LOGIN_WIDTH = '50px'
const LINK_CONTAINER_MIN_WIDTH = '100%'
const CIRCLE_POINT_WIDTH = '8px'
const CIRCLE_POINT_HEIGHT = '8px'

export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-left: 24%;
    margin-right: 15.5%;
    width: ${CONTAINER_WIDTH};
    justify-content: space-between;
  }

  @media(max-width: 1326px) {
    margin-left: 14%;
    margin-right: 10.5%;
  }

  @media(max-width: 1286px) {
    margin-left: 10%;
    margin-right: 5.5%;
  }

  @media(max-width: 1061px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${BELL_WIDTH};
    height: ${BELL_HEIGHT};
    background: url(${bell}) no-repeat;
    background-size: 100%;
    margin-left: ${props => props.theme.spaces[6]}px;

    @media (max-width: 992px) {
      margin-left: ${props => props.theme.spaces[3]}px;
    }
  }
`

export const LogIn = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  line-height: ${props => props.theme.spaces[3]}px;
  color: ${({ theme }) => theme.textColor.muted};
  margin-right: ${props => props.theme.spaces[5]}px;
  text-decoration: none;
  width: ${LOGIN_WIDTH};
  
  @media(max-width: 1024px) {
    margin-right: ${props => props.theme.spaces[3]}px;
  }
  
  @media(max-width: 992px) {
    margin-right: ${props => props.theme.spaces[3]}px;
  }
`

export const LinkContainer = styled.div<{ active: string }>`
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

  @media (max-width: 767px) {
    flex-direction: row-reverse;
    width: ${LINK_CONTAINER_MIN_WIDTH};
    justify-content: flex-end;
    border-bottom: 1px solid black;
    & > :last-child {
      margin: 6.5px 24px 0 2px;
    }
  }
`

export const CirclePoint = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgColor.primary};
  width: ${CIRCLE_POINT_WIDTH};
  height: ${CIRCLE_POINT_HEIGHT};
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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
