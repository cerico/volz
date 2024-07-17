import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { checkPostcode } from "../services"
import FormPage from '../components/FormPage'
import Hocs from '../components/HocsPage'
import CartPage from '../components/CartPage'
import store from '../redux/store'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/postcode">Postcode</Link>
        </li>
        <li>
          <Link to="/hocs">Hocs</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

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

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" Component={FormPage} />
        <Route path="/postcode" Component={PostCode} />
        <Route path="/hocs" Component={Hocs} />
        <Route path="/cart" element={
          <ReduxProvider store={store}>
            <CartPage />
          </ReduxProvider>
        } />
      </Routes>
    </>
  )
}

export { AppRoutes, NavBar }
