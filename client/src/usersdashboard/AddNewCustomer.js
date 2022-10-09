import '../styles/addcustomer.scss'
import Footer from '../component/Footer'
import UserNavbar from './UserNavbar'
import FormInput from '../component/FormInput'

const AddNewCustomer = () => {
    return (
        <div>
            <UserNavbar />
            <div id="AddNewCustomer">
                <div className="container">
                    <div className="formHolderContact">
                        <div className="titleHolder">
                            <h1>Add new Customer</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 right">
                                <FormInput type="text" lable="Customer Name *" placeholder="Enter customer VAT number" />

                                <FormInput type="text" lable="Customer VAT Number" placeholder="Enter your customer name" />

                                <div className="select">
                                    <label>Country</label>
                                    <select class="role" aria-label="Default select example">
                                        <option selected>Nigeria</option>
                                        <option value="1">Nigeria</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="btnHolder">
                                    <button>Add new category</button>
                                </div>
                                
                            </div>
                            <div className="col-md-6 left">
                                <FormInput type="text" lable="Company Name *" placeholder="Enter your company name" />
                                
                                <div className="check">
                                    <div className="checking">
                                        <input type="checkbox" />
                                        <span>Same as billing address</span>
                                    </div>
                                    
                                    <FormInput type="text" lable="Credit limit" placeholder="N0.00" />
                                </div>
                               
                                <div className="select">
                                    <label>Sales Rep *</label>
                                    <select class="role" aria-label="Default select example">
                                        <option selected>Select sales rep</option>
                                        <option value="1">Nigeria</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="btnHolder">
                                    <button>Add new sales rep</button>
                                </div>
                            </div>
                        </div>
                        <div className="address">
                            <div className="tab">
                                <ul>
                                    <li className='tabActive'>Contact Details</li>
                                    <li>Address</li>
                                    <li>Additional Contact</li>
                                    <li>Payment and Billing</li>
                                    <li>Notes</li>
                                    <li>Attachments</li>
                                </ul>
                            </div>
                            <div className="formHoldering">
                                <div className="row addy">
                                    <div className="col-md-6 right">
                                        <FormInput type="text" placeholder="Separate multiple emails with commas" lable="Email" />
                                        <FormInput type="text" placeholder="https://" lable="Website" />
                                    </div>
                                    <div className="col-md-6 left">
                                        <FormInput type="text" placeholder="Enter your telephone number" lable="Telephone" />
                                        <div className="check">
                                            <div className="checking">
                                                <input type="checkbox" />
                                                <span>Same as Telephone</span>
                                            </div>

                                            <FormInput type="text" lable="Mobile" placeholder="Enter your mobile number" />
                                        </div>
                                    </div>
                                    <div className="buttoning">
                                        <button>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddNewCustomer