import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import '../styles/inputs.scss'
import '../styles/in.scss'
import Intable from "../component/Intable";
import imgIcon from "../assets/fluent_folder-48-filled.png";
import UserNavbar from "../usersdashboard/UserNavbar";
import ButtomNav from "../component/ButtomNav";
const CreateInventoryAdjustment = () => {
  return (
      <div>
          <UserNavbar />
          <div id="Invoice">
              <div className="container">
                  <div className="Invoice-container ">
                      <div className="invoice-header">
                          <div className="left">
                              <div className="top">
                                  <h1>Create Inventory Adjustment</h1>
                              </div>

                          </div>
                         
                      </div>
                      <div className="main">
                          <div className="header item">
                              <div className="left">
                                  <h1>Choose what you can use:</h1>
                                  <div className="inputHolder">
                                     
                                      
                                      <div className="in-check">
                                          <input type="checkbox" defaultChecked />
                                          <span>Class</span>
                                      </div>
                                     
                                  </div>
                              </div>
                             
                          </div>
                          <form action="" id='FormInput'>
                              <div className="container">
                                 
                                  <div className="row shipping mt-4">
                                      <h1>Adjustment Details</h1>
                                      <div className="col-md-6">
                                          <div className="name mt-2">

                                              <div className="select">
                                                  <label htmlFor="">Adjustment Type</label>
                                                  <select
                                                      class="role"
                                                      aria-label="Default select example"
                                                  >
                                                      <option selected>Quantity</option>
                                                      <option value="1">Nigeria</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </select>
                                              </div>
                                              <div className="select">
                                                  <label htmlFor="">Adjustment Account</label>
                                                  <select
                                                      class="role"
                                                      aria-label="Default select example"
                                                  >
                                                      <option selected>Opening Balance Equity</option>
                                                      <option value="1">Nigeria</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </select>
                                              </div>

                                         
                                                  <div className="select">
                                                  <label htmlFor="">Customer Job</label>
                                                      <select
                                                          class="role"
                                                          aria-label="Default select example"
                                                      >
                                                      <option selected>Customer Job</option>
                                                          <option value="1">Nigeria</option>
                                                          <option value="2">Two</option>
                                                          <option value="3">Three</option>
                                                      </select>
                                              </div>
                                              
                                             
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div>
                                              <label htmlFor="">Adjustment Date</label>
                                              <div className="email-input">
                                                  <input type="date" placeholder='Street' />
                                              </div>
                                          </div>
                                       
                                          <div>
                                              <label htmlFor="">Reference Number</label>
                                              <div className="email-input">
                                                  <input type="text" placeholder='Street' />
                                              </div>
                                          </div>

                                          <div className="select">
                                              <label htmlFor="">Class</label>
                                              <select
                                                  class="role"
                                                  aria-label="Default select example"
                                              >
                                                  <option selected>Customer Job</option>
                                                  <option value="1">Nigeria</option>
                                                  <option value="2">Two</option>
                                                  <option value="3">Three</option>
                                              </select>
                                          </div>
                                          
                                      </div>
                                  </div>

                                
                               
                              </div>
                          </form>
                          {/* <Table data={tableData} />
                            <button onClick={() => {
                                var tableD = tableData.map((value, index) => (value));
                                tableD.push({ id: 2, lName: "aaa", name: "aqef" })
                                setTableData(tableD)
                            }}>new row</button>
                            <button className='btn-danger' onClick={() => {
                                setTableData([])
                            }}>Clear All</button> */}
                          
                          <button className='btn mt-4' style={{ backgroundColor:"#128C7E", color:"white"}}>Find & Select Items...</button>
                          <div className="tables">
                              <div className="tables">
                                  <div id='Intable'>
                                      
                                      <table className="table ">
                                          
                                          <thead className='heading'>
                                              <tr>
                                                  <th scope="col">#</th>
                                                  <th scope="col">Item Code</th>
                                                  <th scope="col">Item Description</th>
                                                  <th scope="col">Quantity</th>
                                                  <th scope="col"></th>
                                              </tr>
                                          </thead>
                                          <tbody>

                                              <tr>
                                                  <th scope="row"></th>
                                                  <td></td>
                                                  <td></td>
                                                  <td>0</td>
                                                  <td><DeleteForeverIcon style={{ color: "red" }} /></td>
                                              </tr>

                                              <tr>
                                                  <th scope="row"></th>
                                                  <td></td>
                                                  <td></td>
                                                  <td>0</td>
                                                  <td><DeleteForeverIcon style={{ color: "red" }} /></td>
                                              </tr>

                                          </tbody>
                                      </table>

                                  </div>

                             
                              </div>

                              <div className="buttom mt-5">
                                  <div className="container">
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="button">
                                                  <button type="button" class="btn create" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add new line</button>

                                                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                      <div class="modal-dialog">
                                                          <div class="modal-content">
                                                              <div class="modal-header">
                                                                  <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                              </div>
                                                              <div class="modal-body">
                                                                  <form>
                                                                      <div class="mb-3">
                                                                          <label for="recipient-name" class="col-form-label">Recipient:</label>
                                                                          <input type="text" class="form-control" id="recipient-name" />
                                                                      </div>
                                                                      <div class="mb-3">
                                                                          <label for="message-text" class="col-form-label">Message:</label>
                                                                          <textarea class="form-control" id="message-text"></textarea>
                                                                      </div>
                                                                  </form>
                                                              </div>
                                                              <div class="modal-footer">
                                                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                  <button type="button" class="btn btn-primary">Send message</button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <button className='btn delete'>Clear all lines</button>
                                              </div>
                                              <div className="Message mt-4 w-75">
                                                  <div className="title">
                                                      <div className="titleHolder mb-2 d-flex justify-content-between">
                                                          <span>Item Info After Adjustment</span>
                                                      </div>
                                                      <textarea className='w-100 h-h-75 btn-outline-info' name="" id="" placeholder='Quantity On Hand'></textarea>
                                                  </div>
                                              </div>
                                              <div className="Message mt-4 w-75">
                                                  <div className="title">
                                                      <div className="titleHolder mb-2 d-flex justify-content-between">
                                                          <span>Memo</span>
                                                      </div>
                                                      <textarea className='w-100 h-h-75 btn-outline-info' name="" id="" placeholder='If you send statements to customers, this will show up as the description for the invoice'></textarea>
                                                  </div>
                                              </div>
                                          
                                          </div>

                                          <div className="col-md-6 right">
                                              <div className="Total">
                                                  <h4>Total Value of Adjustment</h4>
                                                  <span>₦0.00</span>
                                              </div>
                                              <div className="Total">
                                                  <h4>Number of Item Adjustment</h4>
                                                  <span>₦0.00</span>
                                              </div>
                                              
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>

                      </div>
                  </div>
              </div>

          </div>
          <ButtomNav />
      </div>
  )
}

export default CreateInventoryAdjustment