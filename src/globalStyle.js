import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import RobotoThin from './@types/fonts/Roboto-Thin.ttf'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('ttf');
    font-style: normal;
    font-display: auto;
  }
  
  *{
    font-family: "Roboto", sans-serif;
    font-style: normal;
  }
`
