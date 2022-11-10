import "../styles/addcustomer.scss";
import Footer from "../component/Footer";
import UserNavbar from "./UserNavbar";
import '../styles/inputs.scss'
import FormInput from "../component/FormInput";
import imgIcon from "../assets/fluent_folder-48-filled.png";
import { Link } from "react-router-dom";
const UserAddress = () => {
  return (
    <div>
      <UserNavbar />
      <div id="AddNewCustomer">
        <div className="container">
          <div className="formHolderContact">
            <div className="titleHolder">
              <h1>Create New Customer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            <div className="row" id="FormInput">

              <div className="col-md-6 right">

                <div className="customerInfo d-flex gap-2">
                  <div className="select w-25 ">
                    <label className="mt-1">Title</label>
                    <select class="role" aria-label="Default select example">
                      <option selected>Mr</option>
                      <option value="1">Mrs</option>
                      <option value="2">Miss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="">First Name<span>*</span></label>
                    <div>
                      <input type="text" placeholder="Enter first name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="">Last Name<span>*</span></label>
                    <div>
                      <input type="text" placeholder="Enter last name" />
                    </div>
                  </div>

                </div>

                <div>
                  <label htmlFor="">Customer VAT Number</label>
                  <div>
                    <input type="text" placeholder="Customer VAT Number" />
                  </div>
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
                <div className="btnHolder">
                  <button>Add new category</button>
                </div>
              </div>
              <div className="col-md-6 left">

                <div>
                  <label htmlFor="">Company Name <span>*</span></label>
                  <div>
                    <input type="text" placeholder="Enter your company name" />
                  </div>
                </div>


                <div className="check">
                  <div className="checking ">
                    <input type="checkbox" style={{ width: 20 }} />
                    <span>Same as billing address</span>
                  </div>

                  <div>
                    <label htmlFor="">Credit limit</label>
                    <div>
                      <input type="text" placeholder="N0.00" />
                    </div>
                  </div>

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
            <div className="address" id="FormInput">
              <div className="tab">
                <ul>
                  <li ><Link to='/add-customer'>Contact Details</Link></li>
                  <li className="tabActive"><Link to='/UserAddress'>Address</Link></li>
                  <li><Link to='/UserAdditionalContact'>Additional Contact</Link></li>
                  <li><Link to='/UserPayment'>Payment and Billing</Link></li>
                  <li><Link to='/UserNote'>Notes</Link></li>
                  <li><Link to='/Attachments'>Attachments</Link></li>
                </ul>
              </div>
              <div className="formHoldering">
                <div className="row addy">
                 
                  <div className="contact">
                    <div className="row">
                      <div className="col-md-6 right contact">
                        <div>
                          <label htmlFor="">Billing Address</label>
                          <div>
                            <input type="text" placeholder="Street" />
                          </div>
                        </div>

                        <div className="dividedForm">
                          <div>
                            <input type="text" placeholder="City/Town" />
                          </div>
                          <div>
                            <input type="text" placeholder="State/Province" />
                          </div>

                        </div>
                        <div className="dividedForm">
                          <input type="text" placeholder="City/Town" />
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

                      <div className="col-md-6 right contact">
                        <div>
                          <label htmlFor="">Shipping Address</label>
                          <div>
                            <input type="text" placeholder="Street" />
                          </div>
                        </div>

                        <div className="dividedForm">
                          <div>
                            <input type="text" placeholder="City/Town" />
                          </div>
                          <div>
                            <input type="text" placeholder="State/Province" />
                          </div>

                        </div>
                        <div className="dividedForm">
                          <input type="text" placeholder="City/Town" />
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
                 
                  <div className="buttoning">

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
  )
};

export default UserAddress