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
                    <div className="tab">
                        <ul>
                            <li className='tabActive'>1. Company Details</li>
                            <li>2. Branding</li>
                            <li>3. Financial Details</li>
                        </ul>
                    </div>
                    <div className="select">
                        <label>Country</label>
                        <select class="role" aria-label="Default select example">
                            <option selected>Nigeria</option>
                            <option value="1">Nigeria</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <FormInput lable="Company Name " placeholder="Enter your company name" />

                    <FormInput lable="Billing Address" placeholder="Enter your billing address" />

                    <div className="check">
                        <input type="checkbox" />
                        <span>Same as billing address</span>

                    </div>
                    <FormInput lable="Shipping Address" placeholder="Enter your shipping address" />
                    <FormInput lable="Postal Code" placeholder="Enter your postal code" />
                    <div className="button">
                        <button>Continue</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Settings