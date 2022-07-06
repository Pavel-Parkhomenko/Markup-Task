import React from 'react'
import { Header } from '@/componets/Header'
import { HomeContainerStyled, HomeWrapperStyled } from './style'
import { Main } from '@/componets/Main'

export function Home() {
  return (
    <HomeContainerStyled>
      <HomeWrapperStyled>
        <Header />
        <Main />
      </HomeWrapperStyled>
    </HomeContainerStyled>
  )
}
