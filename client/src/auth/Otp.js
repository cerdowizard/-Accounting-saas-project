import React from 'react'
import img from "../assets/Logo.png";
import { Link } from 'react-router-dom';
const Otp = () => {
  return (
    <div id='Otp'>
      <div id='VerifyEmail'>
        <div className="loginHolder">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="titleHolderLogin">
            <h1>OTP Verification</h1>
            <p>AWe sent a verification code to your mail. Enter the code in the field below.
              hello@example.com</p>
          </div>
          <div className="formHolder">
            <form>
              <p>Type your six digit verification code</p>
              <div className="token">

                <input type="text" placeholder='x'/>
                <input type="text" placeholder='x'/>
                <input type="text" placeholder='x'/>
                <input type="text" placeholder='x'/>
                <input type="text" placeholder='x'/>
                <input type="text" placeholder='x'/>
              </div>
              <div className="button">
                <button>Verify</button>
              </div>
              <p className='dont'>Didn’t get the mail? <Link to='/reset-password'>Resend</Link></p>
            </form>
          </div>
        </div>
        <div className="tabNav">
          <p>Accounting Saas</p>
          <p>Accounting Saas</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Otp