import UserNavbar from "../usersdashboard/UserNavbar";
import FooterBoard from "../dashboard/FooterBoard";
import '../styles/reports.scss'
import '../styles/generalTabel.scss'
const IncomeCustomerDetail = () => {
  return (
    <div>
      <UserNavbar />
      <div id="RealizedLosses">
        <div className="container repHolder">
          <div className="header">
            <div className="left">
              <h1>Income by Customer Detail</h1>
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
          <div className="table">
            <table className="table">

              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Date</th>
                  <th scope="col">Num</th>
                  <th scope="col">Memo</th>
                  <th scope="col">Account</th>
                  <th scope="col">Date</th>
                  <th scope="col">Clr</th>
                  <th scope="col">Split</th>
                  <th scope="col">Debit</th>
                  <th scope="col">Credit</th>
                  <th scope="col">Balance</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Total Customer 1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{
                    borderTop:'2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>100,320.00</td>
                </tr> 
               
                
                <tr>
                  <td>Invoice</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Invoice</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
               
                <tr>
                  <td>Total Customer Canada PLC</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>100,320.00</td>
                </tr> 

                <tr>
                  <td>Invoice</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Invoice</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Invoice</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Invoice</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Total Customer USD PLC</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>100,320.00</td>
                </tr> 

                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Credit Memo</td>
                  <td>21/02/2021</td>
                  <td>12</td>
                  <td>Sales product...</td>
                  <td>Payment</td>
                  <td>Cost of goods</td>
                  <td></td>
                  <td>11000-Account...</td>
                  <td>800</td>
                  <td>800</td>
                  <td>100,320.00</td>
                </tr>
                <tr>
                  <td>Total Customer 1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>800</td>
                  <td style={{
                    borderTop: '2px solid black'
                  }}>100,320.00</td>
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

export default IncomeCustomerDetail