import UserNavbar from "../usersdashboard/UserNavbar"
import SideBar from "./SideBar"
import '../styles/AccountingSettings.scss'
import RigthBar from "./RigthBar"
const ReportsGraphs = () => {
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
                <h4>Summary Report Basis</h4>
                <div className="check">
                  <div className="">
                    <input type="radio" name="" defaultChecked="checked" id="" />
                    <span className="center">Accural</span>

                  </div>
                  <div className="">
                    <input type="radio" name="" id="" />
                    <span className="center">Cash</span>
                  </div>


                </div>
              </div>

              <div className="boxex">
                <h4>Aging Reports</h4>
                <div className="check">
                  <div className="">
                    <input type="radio" name="" defaultChecked="checked" id="" />
                    <span className="center">Age from due date</span>

                  </div>
                  <div className="">
                    <input type="radio" name="" id="" />
                    <span className="center">Age from transaction date</span>
                  </div>


                </div>
              </div>

              <div className="boxex">
                <h4>Reports - Show Items by:</h4>
                <div className="check">
                  <div className="">
                    <input type="radio" name="" defaultChecked="checked" id="" />
                    <span className="center">Name only</span>

                  </div>
                  <div className="">
                    <input type="radio" name="" id="" />
                    <span className="center">description only</span>
                  </div>
                  <div className="">
                    <input type="radio" name="" id="" />
                    <span className="center">Name and Description</span>
                  </div>

                </div>
              </div>

              <div className="boxex">
                <h4>Reports - Show Accounts by:</h4>
                <div className="check">
                  <div className="">
                    <input type="radio" name="" defaultChecked="checked" id="" />
                    <span className="center">Age from due date</span>

                  </div>
                  <div className="">
                    <input type="radio" name="" id="" />
                    <span className="center">Age from transaction date</span>
                  </div>


                </div>
              </div>
              <div className="boxex">
                <h4>Statement of Cash Flows</h4>
                <div className="check">
                  <p>Click here to assign accounts to sections of the statement of Cash Flows:</p>
                </div>
                <div className="w-100% w-btn">
                  <button>Classify Cash</button>
                </div>
                <div className="">

                  <input type="checkbox" name="" id="" />
                  <span className="center">Default formatting for reports</span>
                </div>

                <button style={{
                  backgroundColor: "#A4A5A6",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  marginTop: 10,
                  color:"#707173"
                }}>Format</button>
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

export default ReportsGraphs