import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes, NavBar } from './routes'
import { MainProvider } from "./contexts"
import SwitchTheme from './components/SwitchTheme'
import './App.css'

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
