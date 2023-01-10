import UserNavbar from "../usersdashboard/UserNavbar"
import SideBar from "./SideBar"
import '../styles/AccountingSettings.scss'
import RigthBar from "./RigthBar"
const PaymentsSettinhs = () => {
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
                <h4>Receive Payments</h4>
                <div className="check">
                  <div className="">
                    <input type="checkbox" defaultChecked="checked" name="" id="" />
                    <span className="center">Automatically apply payments</span>

                    <div className="" style={{

                    }}>
                      <input type="checkbox" name="" defaultChecked="checke" id="" />
                      <span className="center">Automatically calculate payments</span>
                    </div>

                    <div className="" style={{

                    }}>
                      <input type="checkbox" name="" defaultChecked="checke" id="" />
                      <span className="center">Use Undeposited Funds as a default deposit to account</span>
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

export default PaymentsSettinhs