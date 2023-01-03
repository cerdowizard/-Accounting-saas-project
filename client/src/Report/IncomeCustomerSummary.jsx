import UserNavbar from "../usersdashboard/UserNavbar";
import FooterBoard from "../dashboard/FooterBoard";
import '../styles/reports.scss'
import '../styles/generalTabel.scss'
const IncomeCustomerSummary = () => {
  return (
      <div>
          <UserNavbar />
          <div id="RealizedLosses">
              <div className="container repHolder">
                  <div className="header">
                      <div className="left">
                          <h1>Income by Customer Summary</h1>
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
                          <div className="dropdown">
                              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Last Fiscal Year
                              </button>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item active" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </div>
                          <span>From</span>
                          <input type="date" />
                          <span>To</span>
                          <input type="date" />
                      </div>
                      <div className="right">
                          <span>Show Columns</span>
                          <div className="dropdown">
                              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Total Only
                              </button>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item active" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="table" style={{
                      width: '70%',
                      margin: '0 auto',
                  }}>
                      <table className="table">

                          <thead>
                              <tr>
                                  <th scope="col"></th>
                                  <th scope="col">Jan - Dec 22</th>

                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Customer 1</td>
                                  <td>200.00</td>
                              </tr>
                              <tr>
                                  <td>Customer 1</td>
                                  <td>200.00</td>
                              </tr>
                              <tr>
                                  <td>Customer 1</td>
                                  <td>200.00</td>
                              </tr>
                              <tr>
                                  <td>Customer 1</td>
                                  <td>200.00</td>
                              </tr>
                              <tr>
                                  <td>Customer 1</td>
                                  <td>200.00</td>
                              </tr>
                              <tr>
                                  <td>Customer 1</td>
                                  <td>200.00</td>
                              </tr>
                              <tr>
                                  <td>Customer 1</td>
                                  <td>200.00</td>
                              </tr>
                              <tr>

                                  <td>Totals</td>
                                  <td>200.00</td>
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

export default IncomeCustomerSummary