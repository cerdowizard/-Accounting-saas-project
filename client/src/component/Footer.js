import React from 'react'
import '../styles/footer.scss'
import insta from '../assets/Instagram svg(1).png'
import tw from '../assets/Twitter svg(1).png'
import youTube from '../assets/g12.png'
import ln from '../assets/Path 2520(1).png'
import face from '../assets/akar-icons_facebook-fill(1).png'
import img from "../assets/Logo.png";
const Footer = () => {
  return (
    <div id='Footer'>
      <div className="container">
        <div className="row footerContent">
          <div className="col-md-3 ">
            <div className="LogoHolder">
              <img src={img} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-2">
            <h1>Product</h1>
            <ul>
              <li>Customers</li>
              <li>Vendors / Suppliers</li>
              <li>Inventory</li>
              <li>Payroll / Human resources</li>
              <li>Bank reconciliation</li>
              <li>Multi-company files</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h1>company</h1>
            <ul>
              <li>Career</li>
              <li>Contact us</li> 
              <li>About us</li>
              <li>Security</li>
              <li>Help center</li>
              <li>Budget</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h1>Resources</h1>
            <ul>
              <li>All resources</li>
              <li>User guide</li>
              <li>Blog</li>
              <li>Security</li>
              <li>Case studies </li>
              <li>Referral</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h1>connect with us</h1>
            <div className="iconHolder">
              <span><img src={tw} alt='' /></span>
              <span><img src={face} alt='' /></span>
              <span><img src={ln} alt='' /></span>
              <span><img src={youTube} alt='' /></span>
              <span><img src={insta} alt='' /></span>
            </div>
          </div>
        </div>
        <div className="lasting">
          <p>© Copyright Accounting Saas.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer