import '../styles/inputs.scss'
import '../styles/in.scss'
import UserNavbar from "../usersdashboard/UserNavbar";
import ButtomNav from "../component/ButtomNav";
const ItemReceipt = () => {
  return (
      <div>
          <UserNavbar />
          <div id="Invoice">
              <div className="container">
                  <div className="Invoice-container ">
                      <div className="invoice-header">
                          <div className="left">
                              <div className="top">
                                  <h1>Item Receipt</h1>
                              </div>

                          </div>

                      </div>
                      <div className="main">
                       
                          <form action="" id='FormInput'>
                              <div className="container">

                                  <div className="row shipping mt-4">
                                  
                                      <div className="col-md-6">
                                          <div className="name mt-2">

                                              <div className="select">
                                                  <label htmlFor="">Vendor</label>
                                                  <select
                                                      class="role"
                                                      aria-label="Default select example"
                                                  >
                                                      <option selected>Dollar Vendor Ltd</option>
                                                      <option value="1">Nigeria</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </select>
                                              </div>
                                              <div>
                                                  <label htmlFor="">Reference Number</label>
                                                  <div className="email-input">
                                                      <input type="text" placeholder='' />
                                                  </div>
                                              </div>
                                              <div className="Message mt-4 w-75">
                                                  <div className="title">
                                                      <div className="titleHolder mb-2 d-flex justify-content-between">
                                                          <span>Memo</span>
                                                      </div>
                                                      <textarea className='w-100 h-h-75 btn-outline-info' name="" id="" placeholder=''></textarea>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6 mt-1">
                                          <div>
                                              <label htmlFor="">Adjustment Date</label>
                                              <div className="email-input">
                                                  <input type="date" placeholder='Street' />
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
                          <div className="tables">
                              <div className="tables">
                                  <div id='Intable'>
                                      <table className="table mt-5">
                                          <thead className='heading'>
                                              <tr>
                                                  <th scope="col">#</th>
                                                  <th scope="col">Item</th>
                                                  <th scope="col">Description</th>
                                                  <th scope="col">Quantity</th>
                                                  <th scope="col">U/M</th>
                                                  <th scope="col">Customer Name</th>
                                                  <th scope="col">Class</th>
                                                  <th scope="col">PO/Bill</th>
                                              </tr>
                                          </thead>
                                          <tbody>

                                              <tr>
                                                  <th scope="row">1</th>
                                                  <td>PO/Bill</td>
                                                  <td></td>
                                                  <td>1,000</td>
                                                  <td>hr</td>
                                                  <td>Customer 1</td>
                                                  <td></td>
                                                  <td>1,000</td>
                                              </tr>

                                              <tr>
                                                  <th scope="row">1</th>
                                                  <td>PO/Bill</td>
                                                  <td></td>
                                                  <td>1,000</td>
                                                  <td>hr</td>
                                                  <td>Customer 1</td>
                                                  <td></td>
                                                  <td>1,000</td>
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
                                                  <button type="button" class="btn create" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Show PO</button>

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
                                                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"></button>
                                                                  <button type="button" class="btn btn-primary">Send message</button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <button className='btn delete'>Clear Qtys</button>
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

export default ItemReceipt