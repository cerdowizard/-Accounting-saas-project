
import '../styles/inputs.scss'
import '../styles/in.scss'
import UserNavbar from '../usersdashboard/UserNavbar'
import ButtomNav from '../component/ButtomNav'
const ProcessPayment = () => {
  return (
    <div>
      <UserNavbar />
      <div id="Invoice" className='ProcessReceipt'>
        <div className="container">
          <div className="Invoice-container ">
            <div className="invoice-header">
              <div className="left">
                <div className="top">
                  <h1>Process Payment</h1>
                </div>

              </div>
              <div className="right">
                <div className="top">
                  <button>Payment List</button>
                </div>

              </div>
            </div>
            <div className="main">
              <div className="header ">

              </div>
              <form action="" id='FormInput'>
                <div className="container">
                  <div className="row mt-5 Vendor">
                    <h1>Vendor Details</h1>
                    <div className="col-md-6">
                      <div className="name mt-2">

                        <div className="select">
                          <label htmlFor="">Vendor Name*</label>
                          <select
                            class="role"
                            aria-label="Default select example"
                          >
                            <option selected>Select Vendor</option>
                            <option value="1">Nigeria</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="btnHolder">
                          <button>Add new Vendor</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="email">
                        <label htmlFor="">Balance</label>
                        <div className="email-input">
                          <input type="text" placeholder='₦0.00' />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="row shipping mt-5">
                    <h1>Receipt Details</h1>
                    <div className="col-md-6">
                      <div className="name mt-2">

                        <div className="email">
                          <label htmlFor="">Document Number</label>
                          <div className="email-input">
                            <input type="text" placeholder='RCP0000001' />
                          </div>
                        </div>

                        <div className="email">
                          <label htmlFor="">Receipt Amount</label>
                          <div className="email-input">
                            <input type="text" placeholder='₦0.00' />
                          </div>
                        </div>
                        <div className="email">
                          <label htmlFor="">Reference</label>
                          <div className="email-input">
                            <input type="text" placeholder='' />
                          </div>
                        </div>
                        <div className="select">
                          <label htmlFor="">Payment Method</label>
                          <select
                            class="role"
                            aria-label="Default select example"
                          >
                            <option selected>Cash</option>
                            <option value="1">Nigeria</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>

                        <div className="select">
                          <label htmlFor="">Bank</label>
                          <select
                            class="role"
                            aria-label="Default select example"
                          >
                            <option selected>Select Bank</option>
                            <option value="1">Nigeria</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 px-5 Process">
                      <div className="Message ">
                        <div className="title">
                          <div className="titleHolder mb-2 d-flex justify-content-between">
                            <span>Description</span>
                            <span className='set'>Set Default Meassage</span>
                          </div>
                          <textarea className='w-100  btn-outline-info' name="" id="" placeholder='This will show up on the invoice'></textarea>
                        </div>
                      </div>
                      <div className="Message mt-2">
                        <div className="title">
                          <div className="titleHolder mb-2 d-flex justify-content-between">
                            <span>Comments</span>

                          </div>
                          <textarea className='w-100 h-h-75 btn-outline-info' name="" id="" placeholder='This will show up on the invoice'></textarea>
                        </div>
                      </div>
                      <div className="email">
                        <label htmlFor="">Date</label>
                        <div className="email-input">
                          <input type="date" placeholder='' />
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </form>
              <div className="UnpaidInvoices">
                <h1>Unpaid Invoices</h1>
                <div id='GeneralTable'>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Allocate</th>
                        <th scope="col">Document Number</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total</th>
                        <th scope="col">Amount Due</th>
                        <th scope="col">Amount Received</th>
                        <th scope="col">Discount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                      </tr>
                      <tr>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                      </tr>
                      <tr>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                      </tr>
                      <tr>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                      </tr>
                      <tr>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                        <td>****</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="Unallocate">

                  <div className="Unallocated">
                    <p>Unallocated</p>
                    <span>₦0.00</span>
                  </div>

                </div>
              </div>
              {/* <Table data={tableData} />
                            <button onClick={() => {
                                var tableD = tableData.map((value, index) => (value));
                                tableD.push({ id: 2, lName: "aaa", name: "aqef" })
                                setTableData(tableD)
                            }}>new row</button>
                            <button className='btn-danger' onClick={() => {
                                setTableData([])
                            }}>Clear All</button> */}

            </div>
          </div>
        </div>

      </div>
      <ButtomNav />
    </div>
  )
}

export default ProcessPayment