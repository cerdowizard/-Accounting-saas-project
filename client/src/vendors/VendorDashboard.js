import '../styles/customerDashboard.scss'
import '../styles/tabelz.scss'
import UserNavbar from "../usersdashboard/UserNavbar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import SwapVertIcon from '@mui/icons-material/SwapVert';
const VendorDashboard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    event.currentTarget.classList.toggle('act');

    event.currentTarget.classList.add('');

    event.currentTarget.classList.remove('remove');

  };
  return (

    <div>

     
      <div id="CustomersDashBoard">
        <div className='container'>

          <div className="fsLayer">
            <h1 className='mt-3'>Vendor Dashboard</h1>
            <div className="navHolder">

              <div className="boxes act" onClick={handleClick}>
                <Link to=''>Create New Vendor</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create New Purchase Order</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Create New Vendor Invoice</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Create New Vendor Returns</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create Vendor Payment</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create Vendor Cash Payment</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Allocate Payment</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Create New Vendor Adjustment</Link>
              </div>

            </div>
          </div>

          <div className="secondLayer mt-5">
            <div className="row">
              <div className="col-md-7 left">
                <h1 className='Top'>Top Vendors</h1>
                <div className="heading">
                  <div className="date">
                    <h1>From:</h1>
                    <div className="inputDate">
                      <input type="date" /> To:
                      <input type="date" />
                    </div>
                  </div>
                  <div className="setting">
                    <span>Sort by:</span>
                    <div class="dropdown">
                      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Balance
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item active" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>

                      </ul>
                    </div>
                    <SettingsIcon />
                    <SwapVertIcon />
                  </div>
                </div>
                <div className="table mt-2">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col" className='col-span-2'>Purchases</th>
                        <th scope="col">Outstanding Bal.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-5 right">
                <div className="innerHolder">
                  <div className="heading">
                    <h1>All Vendor Report </h1>
                  </div>
                  <div className="sec-one d-flex  mt-4">
                    <p className='one'>List of Vendors</p>
                    <p>List of Vendors</p>
                  </div>
                  <div className="secTwo">
                    <div className="title">
                      <h1>Vendor Transaction Reports</h1>
                    </div>
                    <div className="para">
                      <p>Sales by Customer</p>
                      <p>Sales by Customer</p>
                    </div>
                    <div className="para">
                      <p className='one'>Customer Transactions</p>
                      <p >A list of all transactions for customers e.g. Invoices, receipts.</p>
                    </div>
                  </div>

                  <div className="secTwo">
                    <div className="title">
                      <h1>Customer Balances and Statements</h1>
                    </div>
                    <div className="para">
                      <p>Days Outstanding</p>
                      <p>How many days a customer’s balance has been outstanding.</p>
                    </div>
                    <div className="para">
                      <p className='one'>Statement Run</p>
                      <p >Generate and distribute statemnets to all customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tabling mt-2 lefts">
            <div className="heading mb-2">
              <h1>Vendor Balances - Days Outstanding</h1>
              <div className="setting">
                <span>Sort by:</span>
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Balance
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item active" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>

                  </ul>
                </div>
                <SettingsIcon />
                <SwapVertIcon />
              </div>
            </div>
            <div className="tablez mt-2 ">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Vendor</th>
                    <th scope="col" className=''>Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Document Date</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vendor A</td>
                    <td>michael.mitc@example.com</td>
                    <td>+2349022618242</td>
                    <td>02/10/2022</td>
                    <td>RCP0000001</td>
                    <td>24/10/2022</td>
                    <td>₦12,000</td>
                  </tr>
                  <tr>
                    <td scope="row">2</td>
                    <td>Vendor A</td>
                    <td>michael.mitc@example.com</td>
                    <td>+2349022618242</td>
                    <td>02/10/2022</td>
                    <td>RCP0000001</td>
                    <td>24/10/2022</td>
                    <td>₦12,000</td>
                  </tr>
                  <tr>
                    <td scope="row">3</td>
                    <td>Vendor A</td>
                    <td>michael.mitc@example.com</td>
                    <td>+2349022618242</td>
                    <td>02/10/2022</td>
                    <td>RCP0000001</td>
                    <td>24/10/2022</td>
                    <td>₦12,000</td>
                  </tr>
                  <tr>
                    <td scope="row">3</td>
                    <td>Vendor A</td>
                    <td>michael.mitc@example.com</td>
                    <td>+2349022618242</td>
                    <td>02/10/2022</td>
                    <td>RCP0000001</td>
                    <td>24/10/2022</td>
                    <td>₦12,000</td>
                  </tr>
                  <tr>
                    <td scope="row">3</td>
                    <td>Vendor A</td>
                    <td>michael.mitc@example.com</td>
                    <td>+2349022618242</td>
                    <td>02/10/2022</td>
                    <td>RCP0000001</td>
                    <td>24/10/2022</td>
                    <td>₦12,000</td>
                  </tr>
                  <tr>
                    <td scope="row">3</td>
                    <td>Vendor A</td>
                    <td>michael.mitc@example.com</td>
                    <td>+2349022618242</td>
                    <td>02/10/2022</td>
                    <td>RCP0000001</td>
                    <td>24/10/2022</td>
                    <td>₦12,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="footer container">
          <p>© Copyright Accounting Saas.</p>
          <ul>
            <li>Accounting Saas</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default VendorDashboard