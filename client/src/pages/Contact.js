import '../styles/contact.scss'
import Footer from '../component/Footer'
import Headers from '../component/Headers'
import Navbar from '../component/Navbar'
import location from '../assets/map-pin.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
      <div>
          <Navbar/>
          <div id="Contact">
              <div className="contactHome">
                  <Headers title="Contact us" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."/>
              </div>
              <div className="contactFormHolder container">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6 left">
                              <div className="address">
                                  <h1>Address</h1>
                                  <p><img src={location} alt="" />2715 Ash Dr. San Jose, South Dakota 83475</p>
                              </div>
                              <div className="phone">
                                  <h1>Telephone</h1>
                                  <p><img src={phone} alt="" />(480) 555-0103</p>
                                  <p><img src={phone} alt="" />(480) 555-0103</p>
                              </div>
                              <div className="email">
                                  <h1>Office Emails</h1>
                                  <p><img src={email} alt="" /> hello@example.com</p>
                                  <p><img src={email} alt="" /> hello@example.com</p>
                              </div>
                          </div>
                          <div className="col-md-6 right">
                              <h1>Message us</h1>
                              <div className="formHolder">
                                  <form action="">
                                      <div className="mail">
                                          <div className="number">
                                              <div>
                                                  <label>Email</label>
                                              </div>
                                              <input type="text" placeholder="Email" />
                                          </div>

                                       
                                      </div>

                                      <div className="a1">
                                          <label>Your Role</label>
                                          <select class="role" aria-label="Default select example">
                                              <option selected>Business Owner</option>
                                              <option value="1">One</option>
                                              <option value="2">Two</option>
                                              <option value="3">Three</option>
                                          </select>
                                      </div>

                                      <div className="location">
                                          <div className="loc">
                                              <div>
                                                  <label>Location</label>
                                              </div>
                                              <select class="role" aria-label="Default select example">
                                                  <option selected>Nigeria</option>
                                                  <option value="1">One</option>
                                                  <option value="2">Two</option>
                                                  <option value="3">Three</option>
                                              </select>

                                          </div>
                                          <div className="number">
                                              <div>
                                                  <label>Phone</label>
                                              </div>
                                              <input type="text" placeholder="+234" />
                                          </div>
                                      </div>
                                      <div className="textArea">
                                          <label>Remarks</label>
                                          <textarea name="comment" placeholder='Write message' ></textarea>
                                   </div>
                                      <div className="button">
                                          <button>
                                              <Link to="/login">Send message</Link>
                                          </button>
                                      </div>
                                </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Contact