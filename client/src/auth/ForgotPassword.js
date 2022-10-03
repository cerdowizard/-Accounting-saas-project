import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/Logo.png";
import '../styles/password-forgot.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ForgotPassword = () => {
    return (
        <div id='ForgotPassword'>
            <div className="loginHolder">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="titleHolderLogin">
                    <h1>Forgot Password?</h1>
                    <p>Enter your email and we'll send you instructions to reset your password</p>
                </div>
                <div className="formHolder">
                    <form>
                        <div className="mail">
                            <label>Email Address</label>
                            <input type="text" placeholder='Email Address' />
                        </div>
                    
                        <div className="button">
                            <button>Send reset link</button>

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

export default ForgotPassword