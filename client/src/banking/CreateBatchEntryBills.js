import React from 'react'
import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import '../styles/inputs.scss'
import '../styles/in.scss'
const CreateBatchEntryBills = () => {
  return (
    <div>
      <UserNavbar />
      <div id="Invoice">
        <div className="container">
          <div className="Invoice-container ">
            <div className="invoice-header">
              <div className="left">
                <div className="top">
                  <h1>Create Batch Entry - Bills</h1>
                </div>

              </div>
            </div>
            <div className="main">

              <div className="filter">
                <div className="left d-flex">
                  <div className="Period d-flex">
                    <span>Transaction Type</span>
                    <div className="dropdown">
                      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Bills & Bill Credit
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item active" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="right">
                    <div className="dropdown">
                      <span>A/P Account</span>
                      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        20001 - Accounts Payable
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item active" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
            

                <div className="right">
                  <button class="btn p-2" style={{
                    border: '2px solid #128C7E', color: '#128C7E'
                    }} type="button" >
                    Customize Columns
                    </button>
                  
                </div>
              </div>

              <div id='GeneralTable' className="scrollable">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Ref No.</th>
                      <th scope="col">Vendor</th>
                      <th scope="col">Terms</th>
                      <th scope="col">Bill Due</th>
                      <th scope="col">Account</th>
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
              <div className="button">
                <div className="d-flex gap-2">
                  <button type="button" className="btn create" style={{
                    width: 150, padding: 5
                  }}>Add new line</button>
                  <button className='btn delete' style={{
                    width: 150, padding: 5
                  }}>Clear all lines</button>
                </div>
                <div className="total">
                  <span>Total Charges</span>
                  <span>NGN</span>
                </div>

                <div className="total">
                  <span>Total Charges</span>
                  <span>0.00</span>
                </div>

                <div className="total">
                  <span>Total Credit</span>
                  <span>NGN</span>
                </div>
              </div>
              <div className="notes w-100">
                <span>i</span>
                <p>
                  Enter credit or refund amounts & quantities as a negative value.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <ButtomNav />
    </div>
  )
}


export default CreateBatchEntryBills