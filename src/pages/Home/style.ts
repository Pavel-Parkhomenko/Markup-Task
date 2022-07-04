import styled from 'styled-components'

import manBackDesktop from '@/@types/png/main-back-man.png'
import manBackMobile from '@/@types/png/main-back-man.png'
import littleVector from '@/@types/vectors/vector6.svg'
import bigVector from '@/@types/vectors/vector7.svg'
import bigVectorMobile from '@/@types/vectors/vector7-mobile.svg'
import linesTop from '@/@types/vectors/vector-lines-top.svg'
import linesBottom from '@/@types/vectors/vectors-lines-bottom.svg'

export const HomeWrapperStyled = styled.div`
  width: 100%;
  min-height: 960px;
  padding: 9% 6% 5% 10.5%;
  background: url(${manBackDesktop}) no-repeat 100% 45%,
    url(${littleVector}) no-repeat 90% 25%,
    url(${bigVector}) no-repeat 100% 100%,
    url(${linesBottom}) no-repeat 0 95%,
    url(${linesTop}) no-repeat 98% 8%;
  filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));

  @media(max-width: 768px) {
    padding: 26px 19px 50px 15px;
    background: url(${manBackMobile}) no-repeat 10% 0,
    url(${bigVectorMobile}) no-repeat 0 18%;
  }
`

export const HomeContainerStyled = styled.div`
  overflow: hidden;
  background: #EBF1FF;
  display: flex;
  justify-content: center;
`
