import styled, { css } from 'styled-components'
import { IButtonStyled, VariantButton } from '@/interfaces'

const BUTTON_MAIL_WIDTH = '330px'
const BUTTON_NAV_WIDTH = '150px'

export const ButtonStyled = styled('button')<IButtonStyled>`
  width: ${({ variant }) => (variant === VariantButton.email 
    ? BUTTON_MAIL_WIDTH 
    : BUTTON_NAV_WIDTH)};
  height: ${({ theme }) => theme.size.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: ${props => props.theme.spaces[3]}px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.light};
  background-color: ${({ theme }) => theme.bgColor.primary};
  border-radius: ${props => props.theme.spaces[5] + 8}px;
  border: 0;
  cursor: pointer;
  box-shadow: 0 100px 161px rgba(33, 94, 233, 0.08),
  0 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
  0 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
  0 20px 26.1625px rgba(33, 94, 233, 0.04),
  0 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
  0 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);
  
  ${({ variant }) => (variant === VariantButton.email ? css`
    margin-right: ${props => props.theme.spaces[2] + 3}px;
    @media(max-width: 568px) {
      width: ${props => props.theme.size.med}px;
      height: ${props => props.theme.size.little + 10}px;
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      font-size: ${props => props.theme.fontSizes[0]}px;
      line-height: ${props => props.theme.spaces[2] + 5}px;
  }
  ` : css`
    @media(max-width: 992px) {
      width: ${props => props.theme.size.small + 20}px;
      height: ${props => props.theme.size.xs}px;
    }
  `)}
`