import Home from '@app/pages/Home'
import React from 'react'
import ReactDOM from 'react-dom/client'
import StyledComponentsProvider from './configs/style/styled-components/StyledComponentsProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledComponentsProvider>
      <Home />
    </StyledComponentsProvider>
  </React.StrictMode>,
)
