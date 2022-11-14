import "../styles/inputs.scss";
import "../styles/in.scss";
import UserNavbar from "../usersdashboard/UserNavbar";
import ButtomNav from "../component/ButtomNav";

const CreatePaymentVoucher = () => {
  return (
    <div>
      <UserNavbar />
      <div id="Invoice">
        <div className="container">
          <div className="Invoice-container ">
            <div className="invoice-header">
              <div className="left">
                <div className="top">
                  <h1>Create Payment Voucher</h1>
                </div>
              </div>
              <div className="right d-flex">
                <div className="top">
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "#128C7E",
                      border: "1px solid #128C7E ",
                    }}
                  >
                    Banking Module
                  </button>
                </div>

                <div className="top">
                  <button>List of Payment Vouchers</button>
                </div>
              </div>
            </div>
            <div className="main">
              <div className="header ">
                <div className="left">
                  <h1>Choose what you can use:</h1>
                  <div className="inputHolder">
                    <div className="in-check">
                      <input type="checkbox" defaultChecked />
                      <span>Class</span>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <h1>Ending Balance:</h1>
                  <p>EUR 0.00</p>
                </div>
              </div>
              <form action="" id="FormInput">
                <div className="payment">
                  <div className="row mt-3">
                    <h1>Account Details</h1>
                    <div className="paymentMethod">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="dividedForm">
                            <div className="select mt-2">
                              <label htmlFor="">Bank Account</label>
                              <select
                                class="role"
                                aria-label="Default select example"
                              >
                                <option selected>BuskyLTD_Dollar</option>
                                <option value="1">Nigeria</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="select mt-2">
                              <label htmlFor="">Currency</label>
                              <select
                                class="role"
                                aria-label="Default select example"
                              >
                                <option selected>Euro EUR</option>
                                <option value="1">Nigeria</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="select mt-2">
                              <label htmlFor="">Pay To The Order OF</label>
                              <select
                                class="role"
                                aria-label="Default select example"
                              >
                                <option selected>Select delivery method</option>
                                <option value="1">Nigeria</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="Message mt-2">
                              <div className="title">
                                <div className="titleHolder mb-2 d-flex justify-content-between">
                                  <span>Address</span>
                                </div>
                                <textarea className='w-100 h-h-75 btn-outline-info' name="" id="" placeholder=''></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="left col-md-6">
                          <div className="Exchange mt-2">
                            <div className="">
                              <label htmlFor="">Date</label>
                              <input type="date" />
                            </div>

                            <label htmlFor="" className="mt-1">Exchange Rate</label>
                            <div className="box-circl-holder d-flex">

                              <input type="radio" defaultChecked />
                              <span>Market Rate</span>

                              <input type="radio" />
                              <span>Custom Rate</span>
                              <input type="text" placeholder='N0.00' className='text' />
                            </div>
                          </div>
                          <div className="select mt-2">
                            <label htmlFor="">Class</label>
                            <select
                              class="role"
                              aria-label="Default select example"
                            >
                              <option selected>NET 15</option>
                              <option value="1">Nigeria</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="Message mt-2">
                            <div className="title">
                              <div className="titleHolder mb-2 d-flex justify-content-between">
                                <span>Memo</span>
                              </div>
                              <textarea className='w-100 h-h-75 btn-outline-info' name="" id="" placeholder=''></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </form>
              <div className="ExpensesnavHolder">
                <div className="Expenses">
                  <h3>Expenses</h3>
                  <h3>EUR 600.00</h3>
                </div>
                <div className="Item">
                  <h3>Item</h3>
                  <h3>EUR 0.00</h3>
                </div>
              </div>
              <div id='GeneralTable'>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Account</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Memo</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Billa</th>
                      <th scope="col">Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtomNav />
    </div>
  );
};

export default CreatePaymentVoucher;
