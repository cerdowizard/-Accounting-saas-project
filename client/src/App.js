import React from 'react'
import Homes from './pages/Homes'
import './styles/Gobal-style.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import ForgotPassword from './auth/ForgotPassword';
import VerifyEmail from './auth/VerifyEmail';
import Register from './auth/Register';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/post' element={<SinglePage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          */}
          <Route path='/reg' element={<Register />} />
          <Route path='/reset-password' element={< ResetPassword />} /> 
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Homes />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App