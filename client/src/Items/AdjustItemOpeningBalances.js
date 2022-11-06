import '../styles/inputs.scss'
import '../styles/in.scss'
import UserNavbar from '../usersdashboard/UserNavbar';
import ButtomNav from '../component/ButtomNav';
const AdjustItemOpeningBalances = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice" className='ProcessReceipt'>
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>List of Item Bundles</h1>
                                </div>

                            </div>
                            <div className="right">
                                <div className="top">
                                    <button>Create New Item Bundle</button>
                                </div>

                            </div>
                        </div>
                        <div className="note">
                            <span className='icircle'>i</span>
                            <span>This option will adjust the opening quantity and opening cost that you entered when creating an item.
                                <br />
                                <br />
                                You should only use this option if the opening balance values you entered were incorrect and you are unable to change them because you have processed transactions using the item. Adjusting the opening balance will not recalculate your average cost. To adjust your average cost or set specific item quantities, use the Item Adjustments option.
                            </span>
                        </div>
                        <div className="main">
                            <div className="header ">

                            </div>
                            <form action="" id='FormInput'>
                                <div className="container">
                                    <div className="row mt-5 Item">
                                        <h1>Item Opening Balance Details</h1>
                                        <div className="col-md-6">
                                            <div className="name mt-2">

                                                <div className="select">
                                                    <label htmlFor="">Item Name*</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Select vendor</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="btnHolder">
                                                    <button>Add new vendor</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                           
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
                                    <div className="row shipping mt-1">
                                   
                                        <div className="col-md-6">
                                            <div className="name mt-2">

                                                <div className="email">
                                                    <label htmlFor="">Current Opening Cost</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='₦0.00' />
                                                    </div>
                                                </div>

                                                <div className="email">
                                                    <label htmlFor="">New Opening Cost</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='₦0.00' />
                                                    </div>
                                                </div>

                                                <div className="email">
                                                    <label htmlFor="">Date</label>
                                                    <div className="email-input">
                                                        <input type="date"/>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            
                                          
                                            <div className="email">
                                                <label htmlFor="">Current Opening Quantity</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='Current Opening Quantity' />
                                                </div>
                                            </div>

                                            <div className="email">
                                                <label htmlFor="">New Opening Quantity</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='New Opening Quantity' />
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

export default AdjustItemOpeningBalances