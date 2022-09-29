import React from 'react'
import '../styles/register.scss'
import img from '../assets/Image and Icon.png'
import { Link } from 'react-router-dom'
const Register = () => {
  const listData = [
    {
      'id': "1",
      'title': "Manage Your Books",
      'sub': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
      image:
        "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
    },
    {
      'id': "2",
      'title': "Manage inventory",
      'sub': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
      image:
        "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
    },
    {
      'id': "3",
      'title': "Invoice your customers",
      'sub': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
      image:
        "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
    }

  ]
  return (
    <div id='Register'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <div className="LogoHolder">
              <h1>LOGO</h1>
            </div>
            {listData.map((listDatass) => (
              <div className="contentHolder" key={listDatass.id}>
                <div className="img">
                  <img src={listDatass.image} alt="" />
                </div>
                <div className="text">
                  <h1>{listDatass.title}</h1>
                  <p>{listDatass.sub}</p>
                </div>
              </div>
            ))}
            <div className="tabNav">
              <p>Accounting Saas</p>
              <p>Accounting Saas</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="col-md-6 right">
            <div className="loginHolder">
              <h1>LOGO</h1>
              <div className="titleHolderLogin">
                <h1>Create your account</h1>
                <p>Create your Accounting Saas Account</p>
              </div>
              <div className="formHolder">
                <form>
                  <div className="mail">
                    <div className="fsName">
                      <label>First Name</label>
                      <input type="text" placeholder='First Name' />
                    </div>
                    <div className="lsName">
                      <label>Last Name</label>
                      <input type="text" placeholder='Last Name' />
                    </div>
                  </div>
                 
                  <div className="mail">
                    <div className="fsName">
                      <label>Password</label>
                      <input type="password" placeholder='Password' />
                    </div>
                    <div className="lsName">
                      <label>Confirm Password</label>
                      <input type="password" placeholder='Confirm Password' />
                    </div>
                  </div>
                  
                  <div className="mail">
                    <div className="fsName">
                      <label>Password</label>
                      <input type="password" placeholder='Password' />
                    </div>
                    <div className="lsName">
                      <label>Confirm Password</label>
                      <input type="password" placeholder='Confirm Password' />
                    </div>
                  </div>
                 
                  <div className="button">
                    <button><Link to='/login'>Log in</Link></button>

                  </div>
                  <p className='dont'>Don’t have an account? <Link to='/reg'>Create an account.</Link></p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register