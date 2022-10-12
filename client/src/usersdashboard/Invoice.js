import ButtomNav from '../component/ButtomNav'
import UserNavbar from './UserNavbar'
import '../styles/inputs.scss'
import '../styles/in.scss'
const Invoice = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Invoice</h1>
                                </div>
                                <div className="bottom">
                                    <h1>No. 10021</h1>
                                </div>
                            </div>
                            <div className="right">
                                <div className="top">
                                    <h1>Invoice</h1>
                                </div>
                                <div className="bottom">
                                    <h1>No. 10021</h1>
                                </div>
                            </div>
                        </div>
                        <div className="main">
                            <div className="header">
                                <h1>Choose what you can use:</h1>
                                <div className="inputHolder">
                                    <div className="in-check">
                                        <input type="checkbox" />
                                        <span>Shipping</span>
                                    </div>
                                    <div className="in-check">
                                        <input type="checkbox" />
                                        <span>Total Discount</span>
                                    </div>
                                    <div className="in-check">
                                        <input type="checkbox" />
                                        <span>Class</span>
                                    </div>
                                    <div className="in-check">
                                        <input type="checkbox" />
                                        <span>Deposit</span>
                                    </div>
                                </div>
                            </div>
                            <form action="" id='FormInput'>
                                <div className="container">
                                    <div className="row mt-5 customer">
                                        <h1>Customer Details</h1>
                                        <div className="col-md-6">
                                            <div className="name mt-2">

                                                <div className="select">
                                                    <label htmlFor="">Customer Name*</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Select customer</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="btnHolder">
                                                    <button>Add new customer</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="email">
                                                <label htmlFor="">Email</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='Separate multiple emails with commas' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row shipping mt-4">
                                        <h1>Shipping Details</h1>
                                        <div className="col-md-6">
                                            <div className="name mt-2">

                                                <div className="select">
                                                    <label htmlFor="">Ship via*</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Select customer</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>

                                                </div>
                                                <div className="email">
                                                    <label htmlFor="">Shipping Date</label>
                                                    <div className="email-input">
                                                        <input type="date" />
                                                    </div>
                                                </div>

                                                <div className="email">
                                                    <label htmlFor="">Tacking no.</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='#56567' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="email">
                                                <label htmlFor="">Email</label>
                                                <div className="email-input">
                                                    <input className='p' type="text" placeholder='Separate multiple emails with commas' />
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

export default Invoice