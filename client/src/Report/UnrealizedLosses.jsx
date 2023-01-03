import React from 'react'
import UserNavbar from "../usersdashboard/UserNavbar";
import FooterBoard from "../dashboard/FooterBoard";

const UnrealizedLosses = () => {
  return (
      <div>
          <UserNavbar />
          <div id="RealizedLosses">
              <div className="container repHolder">
                  <div className="header">
                      <div className="left">
                          <h1>Realized Gains & Losses</h1>
                      </div>
                      <div className="right">
                          <button className="btnOne">Comment</button>
                          <button className="btnTwo">Email</button>
                          <button className="btnThrree">Print</button>
                          <button className="btnFour">Download Report</button>
                      </div>
                  </div>
                  <div className="period">
                      <div className="left">
                          <span>Selected Period</span>
                          <div class="dropdown">
                              <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Last Fiscal Year
                              </button>
                              <ul class="dropdown-menu">
                                  <li><a class="dropdown-item active" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </div>
                          <span>As of</span>
                          <input type="date" />
                          
                      </div>
                      <div className="right">
                          <span>Show Columns</span>
                          <div class="dropdown">
                              <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Last Fiscal Year
                              </button>
                              <ul class="dropdown-menu">
                                  <li><a class="dropdown-item active" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="table">
                      <table className="table">
                          <thead>
                              <tr>
                                  <th scope="col"></th>
                                  <th scope="col">Currency</th>
                                  <th scope="col">Foreign Balance</th>
                                  <th scope="col">Exchange Rate</th>
                                  <th scope="col">Adjusted Balance</th>
                                  <th scope="col">Current Balance</th>
                                  <th scope="col">Gain/Loss</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="dropdown">
                                      <span class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          Account
                                      </span>
                                      <ul class="dropdown-menu">
                                          <li><a class="dropdown-item active" href="#">Action</a></li>
                                          <li><a class="dropdown-item" href="#">Another action</a></li>
                                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                                      </ul>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                              </tr>
                              <tr>
                                  <td>Busky LTD</td>
                                  <td>EUR</td>
                                  <td>2,100.00</td>
                                  <td>900</td>
                                  <td>1,890,000.00</td>
                                  <td>1,956,000.00</td>
                                  <td>-66,672.00</td>
                              </tr>

                              <tr>
                                  <td>11001 • Accounts Receivable - CAD (Unpaid or unapplied customer invoices...</td>
                                  <td>CAD</td>
                                  <td>2,100.00</td>
                                  <td>900</td>
                                  <td>1,890,000.00</td>
                                  <td>1,956,000.00</td>
                                  <td>-66,672.00</td>
                              </tr>

                              <tr>
                                  <td>11001 • Accounts Receivable - CAD (Unpaid or unapplied customer invoices...</td>
                                  <td>USD</td>
                                  <td>2,100.00</td>
                                  <td>900</td>
                                  <td>1,890,000.00</td>
                                  <td>1,956,000.00</td>
                                  <td>-66,672.00</td>
                              </tr>

                              <tr>
                                  <td>11001 • Accounts Receivable - CAD (Unpaid or unapplied customer invoices...</td>
                                  <td>USD</td>
                                  <td>2,100.00</td>
                                  <td>900</td>
                                  <td>1,890,000.00</td>
                                  <td>1,956,000.00</td>
                                  <td>-66,672.00</td>
                              </tr>

                              <tr>
                                  <td>Busky LTD</td>
                                  <td>EUR</td>
                                  <td>2,100.00</td>
                                  <td>900</td>
                                  <td>1,890,000.00</td>
                                  <td>1,956,000.00</td>
                                  <td>-66,672.00</td>
                              </tr>
                              <tr>
                                  <td>Total Unrealized Gains & Losses</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td>200</td>
                              </tr>

                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <FooterBoard />
      </div>
  )
}

export default UnrealizedLosses