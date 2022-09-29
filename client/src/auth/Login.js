import React from 'react'
import '../styles/login.scss'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
      <div id='Login'>
          <div className="loginHolder">
              <h1>LOGO</h1>
              <div className="titleHolderLogin">
                  <h1> Welcome back</h1>
                  <p>Log in to your Accounting Saas Account</p>
              </div>
              <div className="formHolder">
                  <form>
                      <div className="mail">
                          <label>Email Address</label>
                          <input type="text" placeholder='Email Address'/>
                      </div>
                      <div className="ForgotPassword">
                          <p><Link to='/forgot-password'>Forgot Password?</Link></p>
                      </div>
                      <div className="pass">
                          <label>Password</label>
                          <input type="password" placeholder='Password' />
                      </div>
                      <div className="rememberMe">
                          <input type="checkbox" id="vehicle1" />
                          <span>Remember me</span>
                      </div>
                      <div className="button">
                          <button><Link to='/verify-email'>Log in</Link></button>

                      </div>
                      <p className='dont'>Don’t have an account? <Link to='/reg'>Create an account.</Link></p>
                  </form>
              </div>
          </div>
          <div className="tabNav">
              <p>Accounting Saas</p>
              <p>Accounting Saas</p>
              <p>Privacy Policy</p>
          </div>
      </div>
  )
}

export default Login