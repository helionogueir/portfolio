import GlobalStyle from '@app/configs/style/Global'
import Home from '@app/pages/Home'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Theme from '@app/configs/style/Theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
