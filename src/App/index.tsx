import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../globalStyle'
import theme from '../theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
