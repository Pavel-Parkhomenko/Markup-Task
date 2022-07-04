import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/globalStyle'
import { defaultTheme } from '@/theme'
import {
  CLINIC_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  DOCTORS_ROUTE,
  SERVICES_ROUTE,
} from '@/constants'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />}/>
          <Route path={CLINIC_ROUTE} element={<Home />}/>
          <Route path={CONTACT_ROUTE} element={<Home />}/>
          <Route path={DOCTORS_ROUTE} element={<Home />}/>
          <Route path={SERVICES_ROUTE} element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
