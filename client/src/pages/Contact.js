import '../styles/contact.scss'
import Footer from '../component/Footer'
import Headers from '../component/Headers'
import Navbar from '../component/Navbar'

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
                                  <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                              </div>
                              <div className="phone">
                                  <h1>Telephone</h1>
                                  <p>(480) 555-0103</p>
                                  <p>(480) 555-0103</p>
                              </div>
                              <div className="email">
                                  <h1>Office Emails</h1>
                                  <p>hello@example.com</p>
                                  <p>hello@example.com</p>
                              </div>
                          </div>
                          <div className="col-md-6">2</div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Contact