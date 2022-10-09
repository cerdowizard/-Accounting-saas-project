import FormInput from '../component/FormInput'
import UserNavbar from './UserNavbar'
import '../styles/settings.scss'
import Footer from '../component/Footer'
const Settings = () => {
  return (
      <div>
          <UserNavbar />
          <div id="Setting">
              <div className="FormHolder">
                  <h1>Your Company Settings</h1>
                  <p>Take a few minutes to make sure that your company settings are correct and your invoices and statements are professional</p>
                  <FormInput lable="Hello" placeholder="Enter your company name"/>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Settings