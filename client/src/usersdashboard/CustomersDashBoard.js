import '../styles/customerDashboard.scss'
import UserNavbar from "./UserNavbar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Table } from '@mui/material';
import CustomerTable from '../component/CustomerTable';
const CustomersDashBoard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    event.currentTarget.classList.toggle('act');

    event.currentTarget.classList.add('');

    event.currentTarget.classList.remove('remove');
  };
  return (
    <div>
      <UserNavbar />
      <div id="CustomersDashBoard">
        <div className='container'>

          <div className="fsLayer">
            <h1 className='mt-3'>Customer Dashboard</h1>
            <div className="navHolder">

              <div className="boxes act" onClick={handleClick}>
                <Link to=''>Create New Customer</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create New Estimate</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Create New Sales Order</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Create New Invoice</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create New Cash Sales</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create New Receipt Customers</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Create New Credit Notes</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='' >Create New Credit Notes</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to=''>Create New Recurring Invoice</Link>
              </div>
              <div className="boxes" onClick={handleClick}>
                <Link to='/'>Create New Items</Link>
              </div>
            </div>
          </div>

          <div className="secondLayer mt-5">
            <div className="row">
              <div className="col-md-6 left">
                <div className="heading">
                  <h1>Top Customers</h1>
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
                  <CustomerTable />
                </div>
              </div>
              <div className="col-md-6 right">
                <div className="innerHolder">
                  <div className="heading">
                    <h1>All Customers Report </h1>
                  </div>
                  <div className="sec-one d-flex  mt-4">
                    <p className='one'>List of customers</p>
                    <p>This lists customers details.</p>
                  </div>
                  <div className="secTwo">
                    <div className="title">
                      <h1>Customer Transaction Reports</h1>
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

          <div className="tabling mt-2  lefts">
            <div className="heading">
              <h1>Customer Balances - Days Outstanding</h1>
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
            <CustomerTable />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomersDashBoard