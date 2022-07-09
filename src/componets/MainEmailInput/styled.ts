import styled from 'styled-components'
import mail from '@/@types/svg/mail.svg'

const CONTAINER_MAX_WIDTH = '515px'
const CONTAINER_HEIGHT = '68px'
const CONTAINER_MIN_WIDTH = '250px'
const MAIL_ICON_WIDTH = '50px'
const MAIL_ICON_HEIGHT = '16px'
const INPUT_WIDTH = '100%'

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  min-width: ${CONTAINER_MIN_WIDTH};
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

  @media(max-width: 568px) {
    &::before {
      margin-right: ${props => props.theme.spaces[0]}px;
      margin-left: ${props => props.theme.spaces[3]}px;
    }
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
