import "../styles/addcustomer.scss";
import "../styles/inputs.scss";
import { Link } from "react-router-dom";
import UserNavbar from "../usersdashboard/UserNavbar";
const EmploymentDetails = () => {
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
                  <li className="tabActive">
                    <Link to="/EmploymentDetails">Employment Details</Link>
                  </li>
                  <li>
                    <Link to="/LeaveOfAbsence">Leave of Absence</Link>
                  </li>
                  <li>
                    <Link to="/Termination">Termination</Link>
                  </li>
                </ul>
              </div>
              <div className="formHoldering">
                <div className="row addy">
                  <div className="col-md-6 right">
                    <h5>Employment Dates</h5>
                    <div className="dividedForm mt-3 d-flex gap-2">
                      <div className="w-100">
                        <div className="email-input">
                          <label>Hire Date</label>
                          <input type="date" />
                        </div>
                      </div>

                      <div className="w-100">
                        <div className="email-input">
                          <label>Original Hire Date</label>
                          <input type="date" />
                        </div>
                      </div>
                    </div>
                    <h5 className="mt-4  mb-3">Employment Details</h5>

                    <div className="select">
                      <label>Employment Type</label>
                      <select class="role" aria-label="Default select example">
                        <option selected>Select employment type</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="select">
                      <label>Exempt</label>
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
                          <label>Adjusted Service Date</label>
                          <input type="date" />
                        </div>
                      </div>
                      <div className="w-100">
                        <div className="email-input">
                          <label>Release Date</label>
                          <input type="date" />
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <div className="select" style={{
                      marginTop:86
                    }}>
                      <label>Job Type</label>
                      <select class="role" aria-label="Default select example">
                        <option selected>Select Job type</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="select mt-2">
                      <label>Key Employee</label>
                      <select class="role" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 right">
                   
                    <h5 className="mt-4  mb-3">Job Details</h5>

                    <div className="">
                      <label>Title</label>
                      <input type="text" placeholder="Title" />
                    </div>
                    <div className="">
                      <label>Department</label>
                      <input type="text" placeholder="Department" />
                    </div>

                    
                  </div>
                  <div className="col-md-6 left">
                  
                    <div className="select" style={{
                      marginTop: 80
                    }}>
                      <label>Supervisor</label>
                      <select class="role" aria-label="Default select example">
                        <option selected>Select Job type</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="select mt-2">
                      <label>Target Bonus</label>
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

export default EmploymentDetails;
