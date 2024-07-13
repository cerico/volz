import { useState } from 'react'
import { MainProvider } from "./contexts"
import { checkPostcode } from "./services"
import FormPage from './components/FormPage'
import Switch from './components/Switch'
import './App.css'

function PostCode() {
  const [adminWard, setAdminWard] = useState<string>("")

  async function verifyPostcode(postcode: string) {
    try {
      const response = await checkPostcode(postcode)
      setAdminWard(response.result.admin_ward)
    } catch (error) {
      console.error('Error verifying postcode:', error)
    }
  }


  return (
    <div className="postcode">
      <h1>Postcode</h1>
      <input type="text" placeholder="Postcode" />
      <button onClick={() => verifyPostcode('BD183EB')}>Verify</button>
      {adminWard}
    </div>
  )
}

function App() {

  return (
    <>
      <Switch />
      <PostCode />
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
