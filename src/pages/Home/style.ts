import styled, { css } from 'styled-components'

import manBackDesktop from '@/@types/png/main-back-man.png'
import manBackMobile from '@/@types/png/main-back-man-mobile.png'
import littleVector from '@/@types/vectors/vector6.svg'
import bigVector from '@/@types/vectors/vector7.svg'
import bigVectorMobile from '@/@types/vectors/vector7-mobile.svg'
import linesTop from '@/@types/vectors/vector-lines-top.svg'
import linesBottom from '@/@types/vectors/vectors-lines-bottom.svg'

const HOME_WRAPPER_WIDTH = '100%'
const HOME_WRAPPER_MIN_HEIGHT = '960px'
const HOME_WRAPPER_MIN_HEIGHT_MOBILE = '95vh'

export const HomeWrapperStyled = styled.div<{isActiveBurger: boolean}>`
  width: ${HOME_WRAPPER_WIDTH};
  min-height: ${HOME_WRAPPER_MIN_HEIGHT};
  padding: 9% 5.5% 5% 10.5%;
  background: url(${manBackDesktop}) no-repeat 97% 53%,
  url(${littleVector}) no-repeat 90% 25%,
  url(${bigVector}) no-repeat 100% 100%,
  url(${linesBottom}) no-repeat 0 95%,
  url(${linesTop}) no-repeat 98% 8%;
  filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));

  @media(max-width: 992px) {
    padding: 9% 3% 5% 5%;
  }
  
  @media(max-width: 768px) {
    padding: 5% 5% 5% 2%;
    background: url(${manBackMobile}) no-repeat 10% 0,
    url(${bigVectorMobile}) no-repeat 0 70px;
    background-size: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    ${({ isActiveBurger }) => (!isActiveBurger ? css`
      background: #EBF1FF;
      min-height: ${HOME_WRAPPER_MIN_HEIGHT_MOBILE};
      & > main {
        display: none;
      }
    ` : '')}
`

export const HomeContainerStyled = styled.div`
  background: #EBF1FF;
  display: flex;
  justify-content: center;
`
