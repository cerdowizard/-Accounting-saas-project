import UserNavbar from "../usersdashboard/UserNavbar"
import SideBar from "./SideBar"
import '../styles/AccountingSettings.scss'
import RigthBar from "./RigthBar"
const GeneralSettings = () => {
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
                <h4>Time Format</h4>
                <div className="check">
                  <div className="">

                    <span className="center">Show portions of an hour as </span>
                    <div className="mt-1">
                      <input type="radio" defaultChecked="" name="" id="" />
                      <span className="center">Decimal (10.20)</span>
                    </div>
                    <div className="mt-1">
                      <input type="radio" defaultChecked="" name="" id="" />
                      <span className="center">Minutes (10:12)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxex">
               
                <div className="check">
                  <div className="">
                    <input type="checkbox" defaultChecked="checked" name="" id="" />
                    <span className="center">Always show tears as 4 digits (1999)</span>

                    <div className="" style={{

                    }}>
                      <input type="checkbox" name="" defaultChecked="checke" id="" />
                      <span className="center">Never update name information when saving transactions</span>
                    </div>

                    <div className="" style={{

                    }}>
                      <input type="checkbox" name="" defaultChecked="checke" id="" />
                      <span className="center">Save transactions before printing</span>
                    </div>

                    <div className="" style={{

                    }}>
                      <input type="checkbox" name="" defaultChecked="checke" id="" />
                      <span className="center">Allow sorting on transaction forms</span>
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


export default GeneralSettings