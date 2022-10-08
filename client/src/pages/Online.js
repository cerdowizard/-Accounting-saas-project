import React from 'react'
import Footer from '../component/Footer'
import Headers from '../component/Headers'
import Navbar from '../component/Navbar'

const Online = () => {
  return (
      <div>
          <Navbar />
          <div id="Online">
              <Headers title="Online Accountant" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."/>
          </div>
          <Footer/>
    </div>
  )
}

export default Online