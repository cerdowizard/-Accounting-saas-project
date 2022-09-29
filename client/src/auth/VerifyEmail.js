import React from 'react'
import '../styles/verify.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
const VerifyEmail = () => {
  return (
      <div id='VerifyEmail'>
          <div className="loginHolder">
              <h1>LOGO</h1>
              <div className="titleHolderLogin">
                  <h1>Verify your mail</h1>
                  <p>Account activation link sent to your email address: hello@example.com Please follow the link inside to continue.</p>
              </div>
              <div className="formHolder">
                  <form>
                      <div className="button">
                          <button>Go to mail</button>
                      </div>
                      <p className='dont'>Didn’t get the mail? <Link to='/reset-password'>Resend</Link></p>
                      <p className='dont'><ArrowBackIosIcon className='back' /><Link to='/login'>Back To Login</Link></p>
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

export default VerifyEmail