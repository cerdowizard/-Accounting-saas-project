import UserNavbar from "../usersdashboard/UserNavbar"
import SideBar from "./SideBar"
import '../styles/AccountingSettings.scss'
import RigthBar from "./RigthBar"
const ItemsInventorySettings = () => {
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
                <h4>Purchase Orders and Inventory</h4>
                <div className="check">
                  <div className="">
                    <input type="checkbox" defaultChecked="checked" disabled name="" id="" />
                    <span className="center">Inventory and purchase orders are active</span>
                    <div className="mt-1">
                      <input type="checkbox" defaultChecked="checked" name="" id="" />
                      <span className="center">Warn about duplicate purchase order numbers</span>
                    </div>
                  </div>

                </div>
                <p className="mt-2">When calculating Quantity Available for my inventory, deduct</p>
                <div className="check mt-2 mx-3" >
                  <div className="">
                    <input type="checkbox" defaultChecked="checked" name="" id="" />
                    <span className="center">Quantity reserved for Pending Builds</span>
                  </div>
                  <div className="">
                    <input type="checkbox" defaultChecked="checked" name="" id="" />
                    <span className="center">Quantity on Sales Orders</span>
                  </div>
                </div>

                <div className="mt-2">
                  <input type="checkbox" defaultChecked="checked" name="" id="" />
                  <span className="mt-2">Warn if not enough inventory to sell</span>
                  <div className="check mt-2 mx-3" >
                    <div className="">
                      <input type="radio" defaultChecked="checked" name="" id="" />
                      <span className="center">When the quantity I want to sell exceeds Quantity On Hand</span>
                    </div>

                  </div>
                  <div className="mx-3 mt-1">
                    <input type="radio" defaultChecked="checked" name="" id="" />
                    <span className="center">When the quantity I want to sell exceeds Quantity Available</span>
                  </div>
                  <div className="mx-3 mt-1">
                    <input type="radio" defaultChecked="" name="" id="" />
                    <span className="center">Don’t allow negative quantities</span>
                  </div>
                </div>
                <button style={{
                  backgroundColor: "#A4A5A6",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  marginTop: 10
                }}>Advanced Inventory Settings</button>
              </div>


              <div className="boxex">
                <h4>Unit of Measure</h4>
                <div className="">
                  <div className="">
                    <select style={{
                      marginLeft: 0,
                      padding:10,
                      width:'300px'
                    }}
                      aria-label="Default select example"
                    >
                      <option selected>Multiple U/M Per Item</option>
                      <option value="1">Nigeria</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                   
                  </div>
                  <button style={{
                    backgroundColor: "#fff",
                    border: "2px solid #128C7E",
                    padding: "10px",
                    borderRadius: "10px",
                    marginTop: 10,
                    color: "#128C7E"
                    
                  }}>Advanced Inventory Settings</button>
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

export default ItemsInventorySettings