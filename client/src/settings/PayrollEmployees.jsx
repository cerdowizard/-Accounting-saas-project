import UserNavbar from "../usersdashboard/UserNavbar"
import SideBar from "./SideBar"
import '../styles/AccountingSettings.scss'
import RigthBar from "./RigthBar"
const PayrollEmployees = () => {
  return (
    <div>
      <UserNavbar />
      <div className="container-fluid">
        <h1 className="pt-3 pb-3">Settings</h1>
        <div className="split" id="AccountingSettings">
          <div className="sidebar">
            <SideBar />
          </div>

          <div className="main">
            <div className="boxHoldingSettings">
              <div className="boxex">
                <h4>Payroll Features</h4>
                <div className="check">
                  <div className="">
                    <input type="radio" name="" defaultChecked="checked" id="" />
                    <span className="center">Full Payroll</span>
                   
                  </div>
                  <div className="">
                    <input type="radio" name="" id="" />
                    <span className="center">No Payroll</span>
                  </div>
                  <div className="">
                    <input type="radio" defaultChecked="" name="" id="" />
                    <span className="center">Online Payroll</span>
                  </div>

                </div>
              </div>
              <div className="boxex">
                <h4>Set Preferences For</h4>
                <div className=" d-flex gap-2">
                  <button style={{
                    backgroundColor: "#fff",
                    border: "2px solid #128C7E",
                    padding: "10px",
                    borderRadius: "10px",
                    marginTop: 10,
                    color: "#128C7E"

                  }}>Pay Stub & Voucher Printing</button>

                  <button style={{
                    backgroundColor: "#fff",
                    border: "2px solid #128C7E",
                    padding: "10px",
                    borderRadius: "10px",
                    marginTop: 10,
                    color: "#128C7E"

                  }}>Workers Compensation</button>

                  <button style={{
                    backgroundColor: "#fff",
                    border: "2px solid #128C7E",
                    padding: "10x",
                    borderRadius: "10px",
                    marginTop: 10,
                    color: "#128C7E"

                  }}>Sick and Vacation</button>
                </div>
              </div>
              <div className="boxex">

                <div className="">
                  <div className="">
                    <input type="checkbox"  name="" id="" />
                    <span className="center"> Copy earnings details from previous paychecks</span>

                    <div className="mt-1 mb-1" style={{

                    }}>
                      <input type="checkbox" defaultChecked="checked" name="" id="" />
                      <span className="center">Recall quantity field on paychecks</span>
                    </div>
                    <div className="d-flex" style={{

                    }}>
                      <input type="checkbox" defaultChecked="checked" name="" id="" />
                      <span className="center">Recall hour field on paychecks</span>

                    </div>

                    <div className="d-flex mt-1 mb-1" style={{

                    }}>
                      <input type="checkbox" defaultChecked="checked" name="" id="" />
                      <span className="center">Job Costing, Class and Item tracking for paycheck expenses</span>

                    </div>
                  </div>

                  <p className="mt-2">Assign one class per</p>
                  <div className="check mt-2 mx-3" >
                    <div className="">
                      <input type="radio" defaultChecked="checked" name="" id="" />
                      <span className="center">Entire paycheck</span>
                    </div>
                    <div className="">
                      <input type="radio" defaultChecked="checked" name="" id="" />
                      <span className="center">Earnings Item</span>
                    </div>
                  </div>

                </div>
              </div>
            
              <div className="boxex">
                <h4>Display Employee List</h4>
                <div className="check" style={{
                  alignItems: 'center',
                }}>
                  <div className="">
                    <input type="radio" defaultChecked="checked" name="" id="" />
                    <span className="center">First Name</span>

                  </div>

                  <div className="">
                    <input type="radio" defaultChecked="checked" name="" id="" />
                    <span className="center">Last Name</span>
                  </div>
                  <button style={{
                    backgroundColor: "#A4A5A6",
                    border: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    marginTop: 10,
                    color:'#707173'
                  }}>Employee Defaults...</button>
                </div>
                <div className="">
                  <div className="">
                  
                    <div className="d-flex" style={{

                    }}>
                      <input type="checkbox" defaultChecked="checked" name="" id="" />
                      <span className="center">Merk new employees as sales reps</span>

                    </div>

                    <div className="d-flex mt-1 mb-1" style={{

                    }}>
                      <input type="checkbox" defaultChecked="checked" name="" id="" />
                      <span className="center">Display employee social securrity numbers in headers on reports</span>

                    </div>
                  </div>

                 

                </div>
              </div>
            </div>

          </div>
          <div className="extra">
            <RigthBar />
          </div>
        </div>
      </div>

    </div>
  )
}


export default PayrollEmployees