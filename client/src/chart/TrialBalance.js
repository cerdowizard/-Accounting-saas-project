import React from 'react'
import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import '../styles/inputs.scss'
import '../styles/in.scss'
const TrialBalance = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Trial Balance</h1>
                                </div>

                            </div>
                        </div>
                        <div className="main">

                            <div className="filter">
                                <div className="left d-flex">
                                    <div className="firstSec d-flex">
                                        <span>Selected Period</span>
                                        <div className="dropdown">
										  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										    Last Fiscal Year
										  </button>
										  <ul class="dropdown-menu dropdown-menu-dark">
										    <li><a className="dropdown-item active" href="#">Action</a></li>
										    <li><a className="dropdown-item" href="#">Another action</a></li>
										    <li><a className="dropdown-item" href="#">Something else here</a></li>
										    <li><a className="dropdown-item" href="#">Separated link</a></li>
										  </ul>
										</div>
                                    </div>
                                    <span>From</span>
                                    <input type="date"/>
                                    <span>To</span>
                                    <input type="date"/>
                                </div>
                                <div className="right">
                                 <div className="dropdown">
                                  <span>Basis</span>
										  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										  Accrual
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

                            <div id='GeneralTable' className="scrollable">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Beginning Balance</th>
                                            <th scope="col">Transaction</th>
                                            <th scope="col">Adjustment</th>
                                            <th scope="col">Ending Balance</th>
                                            <th scope="col">Class</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                         <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>L'Oréal</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                            <td>192,432.33</td>
                                            <td></td>
                                        </tr>


                                        <tr>
                                            <td>Totals</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
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

export default TrialBalance