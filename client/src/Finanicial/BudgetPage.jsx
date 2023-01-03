import '../styles/customerDashboard.scss'
import '../styles/tabelz.scss'
import UserNavbar from "../usersdashboard/UserNavbar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chart from './Chart';
const BudgetPage = () => {
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
                              <li className='act'>Financial Tables</li>
                              <li>Profit & Loss</li>
                              <li>Balance Sheet</li>
                              <li>Cash Flow</li>
                          </ul>
                      </div>
                      <div className="upperNav">
                          <ul>
                              <li className='act'>Revenue</li>
                              <li>Direct Costs</li>
                              <li>Personnel</li>
                              <li>Expenses</li>
                              <li>Assets</li>
                              <li>Taxes</li>
                              <li>Dividends</li>
                              <li>Cash Flows Assumptions</li>
                              <li>Financing</li>
                          </ul>
                      </div>
                  </div>
                  <div className="chart">
                      <div className="chartNav">
                          <h3>Revenue</h3>
                          <button>Hide Chart</button>
                      </div>
                      <div className="chartHolder">
                          <div className="bar mt-5">
                              <Chart/>
                          </div>
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

export default BudgetPage