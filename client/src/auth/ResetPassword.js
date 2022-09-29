import React from 'react'
import '../styles/forgot.scss'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ResetPassword = () => {
  return (
      <div id='ResetPassword'>
          <div className="loginHolder">
              <h1>LOGO</h1>
              <div className="titleHolderLogin">
                  <h1>Reset Password</h1>
                  <p>For hello@example.com</p>
              </div>
              <div className="formHolder">
                  <form>
                      <div className="mail">
                          <label>New Password</label>
                          <input type="text" placeholder='New Password' />
                      </div>
                      <div className="pass">
                          <label>Confirm Password</label>
                          <input type="text" placeholder='Confirm Password' />
                      </div>
                    
                      <div className="button">
                          <button>Set new password</button>

                      </div>
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

export default ResetPassword