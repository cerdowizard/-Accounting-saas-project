import ButtomNav from '../component/ButtomNav'
import UserNavbar from '../usersdashboard/UserNavbar'
import '../styles/CreateNewVendor.scss'
const AdjustVendorOpeningBalances = () => {


  return (
    <div>
      <UserNavbar />
      <div id="Invoice" className='ProcesReceipt'>
        <div className="container">
          <div className="Invoice-container ">
            <div className="invoice-header">
              <div className="left">
                <div className="top">
                  <h1>Adjust Vendor Opening Balances</h1>
                </div>

              </div>
              <div className="right">
                <div className="top">
                  <button>List of Vendor Opening Balance</button>
                </div>

              </div>
            </div>
            <div className="main">
              <div className="header">
                <div className="note">
                  <span>i</span>
                  <p>Please select a vendor for which you wish to adjust the opening balance. Enter a reason for the adjustment and then enter the new opening balance. Should you wish to adjust the opening balance date, enter a new date.</p>
                </div>
              </div>
              <form action="" id='FormInput'>
                <div className="container">
                  <div className="row mt-4" >
                    <div className="col-md-6">
                     

                      <div className="select mt-2">
                        <label>Vendor Name <span>*</span></label>
                        <select class="role" aria-label="Default select example">
                          <option selected>Select vendor</option>
                          <option value="1">Nigeria</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="btnHolder">
                        <button>Add new category</button>
                      </div>

                      <div className="mt-2">
                        <label htmlFor="">Current Opening Balance<span>*</span></label>
                        <div className="email-input">
                          <input type="text" placeholder='₦0.00' />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="">New Opening Balance <span>*</span></label>
                        <div className="email-input">
                          <input type="text" placeholder='₦0.00' />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="">Opening Balance as At<span>*</span></label>
                        <div className="email-input">
                          <input type="date" placeholder='Vendor Name' />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 left">
                      <div className="Message ">
                        <div className="title">
                          <div className="titleHolder mb-2 d-flex justify-content-between">
                            <span>Reason</span>
                          </div>
                          <textarea className='w-100  btn-outline-info' name="" id="" placeholder='This will show up on the invoice'></textarea>
                        </div>
                      </div>

                    </div>
                  </div>
              

                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
      <ButtomNav />
    </div>
  )
}

export default AdjustVendorOpeningBalances