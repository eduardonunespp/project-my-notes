import React from 'react'
import ReactDOM from 'react-dom/client'
import { Signin } from './pages/SignIn'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Signin />
    </ThemeProvider>
  </React.StrictMode>
)
