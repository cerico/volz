import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes, NavBar } from './routes'
import SwitchTheme from './components/SwitchTheme'
import { MainProvider } from "./contexts"

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <SwitchTheme />
        <AppRoutes />
      </Router>
    </>
  )
}

function Root() {
  return (
    <MainProvider>
      <App />
    </MainProvider>
  )
}

export default Root
