import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from '@/pages/Home'
import { GlobalStyle } from '@/globalStyle'
import { defaultTheme } from '@/theme'
import {
  HOME_ROUTE,
  NAVIGATION_PARAM,
} from '@/constants'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />}>
            <Route path={NAVIGATION_PARAM} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
