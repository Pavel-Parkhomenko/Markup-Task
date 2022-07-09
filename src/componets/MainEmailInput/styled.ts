import styled from 'styled-components'
import mail from '@/@types/svg/mail.svg'

const CONTAINER_MAX_WIDTH = '515px'
const CONTAINER_HEIGHT = '68px'
const CONTAINER_MIN_WIDTH = '330px'
const MAIL_ICON_WIDTH = '50px'
const MAIL_ICON_HEIGHT = '16px'
const INPUT_WIDTH = '100%'

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  height: ${CONTAINER_HEIGHT};
  border-radius: ${props => props.theme.spaces[5] + 8}px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor.light};

  &::before {
    content: '';
    background: url(${mail}) no-repeat;
    width: ${MAIL_ICON_WIDTH};
    height: ${MAIL_ICON_HEIGHT};
    margin-right: ${props => props.theme.spaces[4]}px;
    margin-left: ${props => props.theme.spaces[4]}px;
    opacity: 0.2;
  }

  @media(max-width: 568px){
    width: ${CONTAINER_MIN_WIDTH};
  }
`

export const InputEmail = styled.input`
  border: none;
  outline: none;
  -webkit-appearance: none;
  width: ${INPUT_WIDTH};
  vertical-align: middle;

  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: 16px;
    line-height: ${props => props.theme.spaces[3]}px;
    color: ${({ theme }) => theme.textColor.dark};
    opacity: 0.2;
  }
`

export const EmailButton = styled.button`
  width: ${props => props.theme.size.big + 30}px;
  height: ${props => props.theme.size.xs}px;
  margin-right: ${props => props.theme.spaces[2] + 3}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: ${props => props.theme.spaces[3]}px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.light};
  background-color: ${({ theme }) => theme.bgColor.primary};
  border-radius: ${props => props.theme.spaces[5] + 8}px;
  border: 0;
  box-shadow: 0 100px 161px rgba(33, 94, 233, 0.08),
  0 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
  0 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
  0 20px 26.1625px rgba(33, 94, 233, 0.04),
  0 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
  0 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);

  @media(max-width: 568px){
    width: ${props => props.theme.size.small}px;
    height: ${props => props.theme.size.little + 10}px;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${props => props.theme.fontSizes[0]}px;
    line-height: ${props => props.theme.spaces[2] + 5}px;
  }
`
