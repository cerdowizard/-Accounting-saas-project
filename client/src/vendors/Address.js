import UserNavbar from '../usersdashboard/UserNavbar'
import "../styles/addcustomer.scss";
import '../styles/inputs.scss'
import { Link } from "react-router-dom";
const Address = () => {
    return (
        <div>
            <div>
                <UserNavbar />
                <div id="CreateNewVendor">
                    <div className="">
                        <div id="AddNewCustomer">
                            <div className="container" id='FormInput'>
                                <div className="formHolderContact">
                                    <div className="titleHolder m-4">
                                        <h1>Create New Vendor</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                            vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>

                                    <div className="row mt-5" >
                                        <div className="col-md-6 right">
                                            <div className="">
                                                <label htmlFor="">Vendor Name <span>*</span></label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='Vendor Name' />
                                                </div>
                                            </div>

                                            <div className="select">
                                                <label>Category</label>
                                                <select class="role" aria-label="Default select example">
                                                    <option selected>Select category</option>
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
                                            <div className="">
                                                <label htmlFor="">VAT reference</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='Enter VAT reference' />
                                                </div>
                                            </div>

                                            <div className="mt-2">
                                                <label htmlFor="">Credit limit</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='Enter VAT reference' />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="address">
                                        <div className="tab">
                                            <ul>
                                                <li ><Link to='/CreateNewVendor'>Contact Details</Link></li>
                                                <li ><Link to='/BankDetails'>Banking Details</Link></li>
                                                <li className="tabActive">Address</li>
                                                <li ><Link to='/AdditionalContact'>Additional Contact</Link></li>
                                                <li><Link to='/Payment'>Payment and Billing</Link></li>
                                                <li><Link to='/Note'>Notes</Link></li>
                                                <li>Attachments</li>
                                            </ul>
                                        </div>
                                        <div className="formHoldering">

                                            <div className="contact">
                                                <div className="row">
                                                    <div className="col-md-6 right contact">
                                                        <div className="mt-2">
                                                            <label htmlFor="">Billing Address</label>
                                                            <div className="email-input">
                                                                <input type="text" placeholder="Street" />
                                                            </div>
                                                        </div>

                                                        <div className="dividedForm">
                                                            <div className="w-100">
                                                                <div className="email-input">
                                                                    <input type="text" placeholder="City/Town" />
                                                                </div>
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="email-input">
                                                                    <input type="text" placeholder="State/Province" />
                                                                </div>
                                                            </div>
                                                           
                                                        </div>
                                                        <div className="dividedForm">
                                                            <div className="w-100">
                                                                <div className="email-input">
                                                                    <input type="text" placeholder="City/Town" />
                                                                </div>
                                                            </div>

                                                            <div className="select">
                                                                <select
                                                                    class="role"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected>Nigeria</option>
                                                                    <option value="1">Nigeria</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                 <div className="col-md-6 left contact">
                                                        <div className="mt-2">
                                                            <label htmlFor="">Shipping Address</label>
                                                            <div className="email-input">
                                                                <input type="text" placeholder="Street" />
                                                            </div>
                                                        </div>

                                                        <div className="dividedForm mt-2">
                                                            <div className="w-100 ">
                                                                <div className="email-input">
                                                                    <input type="text" placeholder="City/Town" />
                                                                </div>
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="email-input">
                                                                    <input type="text" placeholder="State/Province" />
                                                                </div>
                                                            </div>
                                                           
                                                        </div>
                                                        <div className="dividedForm mt-2">
                                                            <div className="w-100">
                                                                <div className="email-input">
                                                                    <input type="text" placeholder="City/Town" />
                                                                </div>
                                                            </div>

                                                            <div className="select">
                                                                <select
                                                                    class="role"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected>Nigeria</option>
                                                                    <option value="1">Nigeria</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="buttoning d-flex justify-content-between">
                                                <button className="cancle">Cancel</button>
                                                <button>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address