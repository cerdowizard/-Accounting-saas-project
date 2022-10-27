import UserNavbar from "../usersdashboard/UserNavbar"
import ButtomNav from "../component/ButtomNav";


const NewVendorCategory = () => {
  return (
    <div>
      <UserNavbar />
      <div id="Invoice" className='ProcessReceipt'>
        <div className="container">
          <div className="Invoice-container ">
            <div className="invoice-header">
              <div className="left">
                <div className="top">
                  <h1>New Vendor Category</h1>
                </div>

              </div>
              <div className="right">
                <div className="top">
                  <button>Vendor Categories List</button>
                </div>

              </div>
            </div>
            <div className="main">
              <div className="header ">

              </div>
              <form action="" id='FormInput'>
                <div className="container">

                  <div className="row shipping mt-5">

                    <div className="col-md-6">
                      <div className="name mt-2">

                        <div className="email">
                          <label htmlFor="">Category Name</label>
                          <div className="email-input">
                            <input type="text" placeholder='Enter new category name' />
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="col-md-6 px-5 Process">
                      <div className="Message ">
                        <div className="title">
                          <div className="titleHolder mb-2 d-flex justify-content-between">
                            <span>Description</span>
                            <span className='set'>Set Default Meassage</span>
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

export default NewVendorCategory