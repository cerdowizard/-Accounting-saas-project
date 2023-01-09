import '../styles/customerDashboard.scss'
import '../styles/tabelz.scss'
import UserNavbar from "../usersdashboard/UserNavbar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Chart from './Chart';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
const Financing = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    event.currentTarget.classList.toggle('act');

    event.currentTarget.classList.add('');

    event.currentTarget.classList.remove('remove');

  };
  const [toggle, setToggle] = useState(true);
  const handleClicks = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <UserNavbar />
      <div id="CustomersDashBoard">
        <div className='container'>

          <div className="fsLayer">
            <h1 className='mt-3'>Budget Dashboard</h1>
            <div className="navHolder">

              <div className="boxes act" onClick={handleClick}>
                <Link to='/CreateNewVendor'>Create New Revenue Stream</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create Direct Cost</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='/ProcessVendorInvoice' >Create Hourly Rate Structure</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='/ProcessVendorReturn' >Salary Structure List</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='/ProcessPayment'>Leave Approval</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Employee List</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Time Sheet</Link>
              </div>

            </div>
          </div>


          <div className="budgetNavHolder">
            <div className="upperNav">
              <ul>
                <Link to='/BudgetPage'>
                  <li className='act'>Financial Tables</li>
                </Link>
                <Link to='/ProfitLoss'>
                  <li>Profit & Loss</li>
                </Link>
                <Link to='/BalanceSheet'>
                  <li>Balance Sheet</li>
                </Link>
                <Link to='/CashFlow'>
                  <li>Cash Flow</li>
                </Link>
              </ul>
            </div>
            <div className="upperNav">
              <ul>
                <Link to='/BudgetPage'>
                  <li>Revenue</li>
                </Link>
                <Link to='/DirectCosts'>
                  <li>Direct Costs</li>
                </Link>
                <Link to='/Personnel'>
                  <li >Personnel</li>
                </Link>
                <Link to='/Expenses'>
                  <li>Expenses</li>
                </Link>
                <Link to='/Assets'>
                  <li>Assets</li>
                </Link>
                <Link to='/Taxes'>
                  <li>Taxes</li>
                </Link>
                <Link to='/Dividends'>
                  <li>Dividends</li>
                </Link>
                <Link to='/CashFlowsAssumptions'>
                  <li>Cash Flows Assumptions</li>
                </Link>

                <Link to='/Financin'>
                  <li className='act'>Financing</li>
                </Link>

              </ul>
            </div>
          </div>

          <div className="chart">
            <div className="chartNav">
              <h3>Financing</h3>
              <button>Hide Chart</button>
            </div>
            <div className="chartHolder">
              <div className="bar mt-2">
                <div className="d-flex p-3" style={{
                  justifyContent:'space-between'
                }}>
                
                    <h4>Projected cash in</h4>
                  <button class="dropdown" style={{
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                    paddingLeft: 10,
                    paddingRight:10,
                    border:'1px solid gray'
                    }}>
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      2022
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">2022</a></li>
                        <li><a class="dropdown-item" href="#">2021</a></li>
                        <li><a class="dropdown-item" href="#">2020</a></li>
                      </ul>
                    </button>
   
                  
                  <h3>Cash at year’s end</h3>
                </div>
                <Chart />
              </div>
            </div>
          </div>
          
          <div className="table">
            <div className="addBtn">
              <div className="d-flex gap-2">
                <button>Add Personnel</button>
                <button style={{
                  backgroundColor: 'white',
                  border: '2px solid #128C7E',
                  color: '#128C7E'
                }}>Change Burden Rate</button>
              </div>

              <div className="switchs d-flex">
                <span>Monthly</span>
                <ToggleOffIcon className="icon" />
                <span>Annual</span>
              </div>
            </div>
            <div id='GeneralTable'>
              <table class="table">
                <thead>
                  <tr>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='xl'><ArrowRightIcon />Revenue</td>
                    <td>Jan ‘22</td>
                    <td>Feb ‘22</td>
                    <td>Mar ‘22</td>
                    <td>Apr ‘22</td>
                    <td>May ‘22</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className='xl'><ArrowRightIcon />Revenue</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>
                      <span class="dropdown">
                        <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Actions
                        </span>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className='xl'><ArrowRightIcon />Revenue</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>
                      <span class="dropdown">
                        <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Actions
                        </span>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className='xl'><ArrowRightIcon />Revenue</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>
                      <span class="dropdown">
                        <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Actions
                        </span>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className='xl'><ArrowRightIcon />Revenue</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>
                      <span class="dropdown">
                        <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Actions
                        </span>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className='xl'><ArrowRightIcon />Revenue</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>₦60,000.00</td>
                    <td>
                      <span class="dropdown">
                        <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Actions
                        </span>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </span>
                    </td>
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

export default Financing