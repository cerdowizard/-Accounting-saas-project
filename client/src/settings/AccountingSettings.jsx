import UserNavbar from "../usersdashboard/UserNavbar"
import SideBar from "./SideBar"
import '../styles/AccountingSettings.scss'
import RigthBar from "./RigthBar"
const AccountingSettings = () => {
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
                <h4>Accounts</h4>
                <div className="check">
                  <div className="">
                    <input type="checkbox" name="" defaultChecked="checked" id="" />
                    <span className="center">Use account numbers</span>
                    <div className="">
                      <input type="checkbox" name="" id="" />
                      <span className="center">Use account numbers</span>
                    </div>
                  </div>

                  <div className="">
                    <input type="checkbox" defaultChecked="checked" name="" id="" />
                    <span className="center">Use account numbers</span>
                  </div>

                </div>
              </div>
              <div className="boxex">
                <h4>Class</h4>
                <div className="check">
                  <div className="">
                    <input type="checkbox" defaultChecked="checked" name="" id="" />
                    <span className="center">Use account numbers</span>

                    <div className="" style={{
                      marginLeft: 20
                    }}>
                      <input type="checkbox" name="" id="" />
                      <span className="center">Use account numbers</span>
                    </div>
                    <div className="d-flex" style={{
                      marginLeft: 20

                    }}>
                      <input type="checkbox" name="" id="" />
                      <span className="center">Use account numbers</span>
                      <select
                        aria-label="Default select example"
                      >
                        <option selected>Name</option>
                        <option value="1">Nigeria</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>



                </div>
              </div>
              <div className="boxex">

                <div className="check">
                  <div className="">
                    <input type="checkbox" defaultChecked="checked" name="" id="" />
                    <span className="center">Automatically assign general journal entry number</span>

                    <div className="" style={{

                    }}>
                      <input type="checkbox" name="" id="" />
                      <span className="center">Warn when posting a transaction ro Retained Earnings</span>
                    </div>
                    <div className="d-flex" style={{

                    }}>
                      <input type="checkbox" name="" id="" />
                      <span className="center">Hide opening balance fields in Names and Items</span>

                    </div>
                  </div>



                </div>
              </div>
              <div className="boxex">
                <h4>Date Warnings</h4>
                <div className="check">
                  <div className="">
                    <input type="checkbox" name="" defaultChecked="checked" id="" />
                    <span className="center">Warn if transactions are <input type="text" name="" id="" placeholder="90" style={{
                      width: 30
                    }} />day(s) in the past</span>
                    <div className="mt-1">
                      <input type="checkbox" name="" id="" />
                      <span className="center">Warn if transactions are <input type="text" name="" id="" placeholder="30" style={{
                        width: 30
                      }} />day(s) in the past </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxex">
                <h4>Closing Date</h4>
                <div className="check">
                  <div className="">

                    <span className="center">Date through which books are closed:</span>

                  </div>

                  <div className="">

                    <span className="center">(not set)</span>
                  </div>
                  
                </div>
                <div className="w-100% w-btn">
                  <button>Set Date/Password</button>
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

export default AccountingSettings