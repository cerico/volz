import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { checkPostcode } from "../services"
import FormPage from '../components/FormPage'
import Hocs from '../components/HocsPage'
import CartPage from '../components/CartPage'
import store from '../redux/store'
import { BASE_PATH } from '../constants'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`${BASE_PATH}/`}>Form</Link>
        </li>
        <li>
          <Link to={`${BASE_PATH}/postcode`}>Postcode</Link>
        </li>
        <li>
          <Link to={`${BASE_PATH}/hocs`}>Hocs</Link>
        </li>
        <li>
          <Link to={`${BASE_PATH}/cart`}>Cart</Link>
        </li >
      </ul >
    </nav >
  )
}

function PostCode() {
  const [postcode, setPostcode] = useState<string>('')
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
      <input
        type="text"
        placeholder="Postcode"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
      />
      <button onClick={() => verifyPostcode(postcode)}>Verify</button>
      {adminWard}
    </div>
  )
}


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={`${BASE_PATH}/`} Component={FormPage} />
        <Route path={`${BASE_PATH}/postcode`} Component={PostCode} />
        <Route path={`${BASE_PATH}/hocs`} Component={Hocs} />
        <Route path={`${BASE_PATH}/cart`} element={
          <ReduxProvider store={store}>
            <CartPage />
          </ReduxProvider>
        } />
      </Routes>
    </>
  )
}

export { AppRoutes, NavBar }
