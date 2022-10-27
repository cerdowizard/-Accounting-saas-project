import UserNavbar from '../usersdashboard/UserNavbar'
import "../styles/addcustomer.scss";
import '../styles/inputs.scss'
import FormInput from "../component/FormInput";
import { Link } from "react-router-dom";
const AdditionalContact = () => {
  return (
      <div>
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
                                                  <li><Link to='/Address'>Address</Link></li>
                                                  <li className="tabActive"><Link to='/AdditionalContact'>Additional Contact</Link></li>
                                                  <li><Link to='/Payment'>Payment and Billing</Link></li>
                                                  <li><Link to='/Note'>Notes</Link></li>
                                                  <li><Link to='/Upload'>Attachments</Link></li>
                                              </ul>
                                          </div>
                                          <div className="formHoldering">

                                              <div className="additionalContact">
                                                  <div className="row">
                                                      <div className="col-md-6 right">
                                                          <div className="mt-3">
                                                              <label htmlFor="">Contact Name</label>
                                                              <div className="email-input">
                                                                  <input type="text" placeholder="Enter contact name" />
                                                              </div>
                                                          </div>
                                                          <div className="">
                                                              <label htmlFor="">Enter email address</label>
                                                              <div className="email-input">
                                                                  <input type="text" placeholder="Email" />
                                                              </div>
                                                          </div>
                                                         
                                                       
                                                      </div>
                                                      <div className="col-md-6 left">
                                                          <div className="mt-3">
                                                              <label htmlFor="">Designation</label>
                                                              <div className="email-input">
                                                                  <input type="text" placeholder="Role" />
                                                              </div>
                                                          </div>
                                                        
                                                          <div className="mt-2">
                                                              <label htmlFor="">Mobile</label>
                                                              <div className="email-input">
                                                                  <input type="text" placeholder="Enter your mobile number" />
                                                              </div>
                                                          </div>
                                                        
                                                      </div>
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
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AdditionalContact