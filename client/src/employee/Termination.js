import "../styles/addcustomer.scss";
import "../styles/inputs.scss";
import { Link } from "react-router-dom";
import UserNavbar from "../usersdashboard/UserNavbar";
const Termination = () => {
  return (
    <div>
      <UserNavbar />
      <div id="AddNewCustomer">
        <div className="container">
          <div className="formHolderContact">
            <div className="titleHolder">
              <h1>Create New Employee</h1>
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
                    <label htmlFor="">
                      First Name<span>*</span>
                    </label>
                    <div>
                      <input type="text" placeholder="Enter first name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="">
                      Last Name<span>*</span>
                    </label>
                    <div>
                      <input type="text" placeholder="Enter last name" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="">Employee ID</label>
                  <div>
                    <input type="text" placeholder="Enter your Employee ID" />
                  </div>
                </div>

                <div className="select">
                  <label>Gender</label>
                  <select class="role" aria-label="Default select example">
                    <option selected>Select your gender</option>
                    <option value="1">Nigeria</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="contact">
                  <div className="">
                    <label htmlFor="">Address</label>
                    <div className="email-input">
                      <input type="text" placeholder="Street" />
                    </div>
                  </div>

                  <div className="dividedForm d-flex gap-2">
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
                  <div className="dividedForm d-flex gap-2">
                    <div className="w-100">
                      <div className="email-input">
                        <input type="text" placeholder="City/Town" />
                      </div>
                    </div>

                    <div className="select mt-1">
                      <select class="role" aria-label="Default select example">
                        <option selected>Nigeria</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 left">
                <div>
                  <label htmlFor="">
                    Salary Structure <span>*</span>
                  </label>
                  <div>
                    <input type="text" placeholder="Enter your company name" />
                  </div>
                </div>

                <div className="mt-2">
                  <div>
                    <label htmlFor="">Employee ID No.</label>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your employee ID number"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <label>Date Of Birth</label>
                  <input type="date" />
                </div>
                <div className="">
                  <label className="mt-3">Notes</label>
                  <textarea
                    style={{
                      width: "100%",
                      outline: "none",
                      border: "1px solid gray",
                      height: 160,
                      borderRadius: 6,
                      padding: 10,
                    }}
                    name=""
                    id=""
                    placeholder="Write note..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="address" id="FormInput">
              <div className="tab">
                <ul>
                  <li>
                    <Link to="/CreateNewEmployee">Contact Details</Link>
                  </li>
                  <li>
                    <Link to="/EmergencyContact">Emergency Contact</Link>
                  </li>
                  <li>
                    <Link to="/SalaryWages">Salary & Wages</Link>
                  </li>
                  <li >
                    <Link to="/EmploymentDetails">Employment Details</Link>
                  </li>
                  <li >
                    <Link to="/LeaveOfAbsence">Leave of Absence</Link>
                  </li>
                  <li className="tabActive">
                    <Link to="/Termination">Termination</Link>
                  </li>
                </ul>
              </div>
              <div className="formHoldering">
                <div className="row addy">
                  <div className="col-md-6 right">
                    <h5>Termination Dates</h5>
                    <div className="dividedForm mt-3 d-flex gap-2">
                      <div className="w-100">
                        <div className="email-input">
                          <label>Start Date</label>
                          <input type="date" />
                        </div>
                      </div>


                    </div>
                    <h5 className="mt-3  mb-3">Termination Details</h5>
                    <div className="">
                      <label>Type</label>
                      <input type="text" placeholder="Type" />
                    </div>
                    <div className="select mt-2">
                      <label>Recommend Rehire</label>
                      <select class="role" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                  </div>
                  <div className="col-md-6 left">
                    <div className="dividedForm mt-5 d-flex gap-2">
                      <div className="w-100">
                        <div className="email-input">
                          <label>Expected Return Date</label>
                          <input type="date" />
                        </div>
                      </div>
                      <div className="w-100">
                        <div className="email-input">
                          <label>Actual Return Date</label>
                          <input type="date" />
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <div className="select" style={{
                      marginTop: 86
                    }}>
                    </div>
                    <div className="">
                      <label>Reason</label>
                      <input type="text" placeholder="Reason" />
                    </div>
                    <div className="select mt-2">
                      <label>Protest Unemployment</label>
                      <select class="role" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>


                  </div>
                  <div className="col-md-6 right">

                    <h5 className="mt-4  mb-3">Severance Pay</h5>

                    <div className="select mt-2">
                      <label>Leave Pay</label>
                      <select class="role" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
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
  );
};

export default Termination