import React, { useState } from 'react'
import { Header } from '@/componets/Header'
import { HomeContainerStyled, HomeWrapperStyled } from './style'
import { Main } from '@/componets/Main'

export function Home() {
  const [isActiveBurger, setIsActiveBurger] = useState(false)
  console.log(isActiveBurger)
  return (
    <HomeContainerStyled>
      <HomeWrapperStyled isActiveBurger={isActiveBurger}>
        <Header isActiveBurger={isActiveBurger} setIsActiveBurger={setIsActiveBurger} />
        <Main />
      </HomeWrapperStyled>
    </HomeContainerStyled>
  )
}
