import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile/>
    </ThemeProvider>
  </React.StrictMode>
)
