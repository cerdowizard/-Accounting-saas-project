import UserNavbar from "../usersdashboard/UserNavbar"
import SideBar from "./SideBar"
import '../styles/AccountingSettings.scss'
import RigthBar from "./RigthBar"
const BillsSettings = () => {
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
                <h4>Entering Bills</h4>
                <div className="check">
                  <div className="">
                   
                    <span className="center">Bills are due <input type="text" name="" id="" placeholder="90" style={{
                      width: 30
                    }} />day(s) in the past</span>
                    <div className="mt-1">
                      <input type="checkbox" defaultChecked="checked" name="" id="" />
                      <span className="center">Warn about duplicate bill numbers from same vendor</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxex">
                <h4>Paying Bills</h4>
                <div className="check">
                  <div className="">
                    <input type="checkbox" defaultChecked="" name="" id="" />
                    <span className="center">Automatically use credits</span>

                    <div className="" style={{
                    
                    }}>
                      <input type="checkbox" name="" id="" />
                      <span className="center">Automatically use discounts</span>
                    </div>
                    <div className="d-flex" style={{
                    

                    }}>
                      <span className="center">Default Discount Account</span>
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

export default BillsSettings