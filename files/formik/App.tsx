import { MainProvider } from "./contexts"
import FormPage from './components/FormPage'
import Switch from './components/Switch'
import './App.css'

function App() {

  return (
    <>
      <Switch />
      <FormPage />
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
