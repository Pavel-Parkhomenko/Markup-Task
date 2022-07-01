import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import RobotoRegular from './@types/fonts/Roboto-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
`
