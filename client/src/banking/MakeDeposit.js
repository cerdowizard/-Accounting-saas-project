import "../styles/inputs.scss";
import "../styles/in.scss";
import UserNavbar from "../usersdashboard/UserNavbar";
import ButtomNav from "../component/ButtomNav";

const MakeDeposit = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Make Deposit</h1>
                                </div>
                            </div>
                            {/* <div className="right d-flex">
                                <div className="top">
                                    <button
                                        style={{
                                            backgroundColor: "white",
                                            color: "#128C7E",
                                            border: "1px solid #128C7E ",
                                        }}
                                    >
                                        Banking Module
                                    </button>
                                </div>

                                <div className="top">
                                    <button>List of Payment Vouchers</button>
                                </div>
                            </div> */}
                        </div>
                        <div className="main" id="FormInput">
                            {/* <div className="header ">
                                <div className="left">
                                    <h1>Choose what you can use:</h1>
                                    <div className="inputHolder">
                                        <div className="in-check">
                                            <input type="checkbox" defaultChecked />
                                            <span>Class</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="right">
                                    <h1>Ending Balance:</h1>
                                    <p>EUR 0.00</p>
                                </div>
                            </div> */}
                            <form action="" id="FormInput">
                                <div className="payment">
                                    <div className="row mt-3">
                                        <h1>Account Details</h1>
                                        <div className="paymentMethod">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="dividedForm">
                                                        <div className="select mt-2">
                                                            <label htmlFor="">Deposit To</label>
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
                                                        <div className="select mt-2">
                                                            <label htmlFor="">Currency</label>
                                                            <select
                                                                class="role"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected>Nigerian Naira NGN</option>
                                                                <option value="1">Nigeria</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>

                                                        <div className="Message mt-2">
                                                            <div className="title">
                                                                <div className="titleHolder mb-2 d-flex justify-content-between">
                                                                    <span>Memo</span>
                                                                </div>
                                                                <textarea
                                                                    className="w-100 h-h-75 btn-outline-info"
                                                                    name=""
                                                                    id=""
                                                                    placeholder=""
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="left col-md-6">
                                                    <div className="Exchange mt-2">
                                                        <div className="">
                                                            <label htmlFor="">Date</label>
                                                            <input type="date" />
                                                        </div>

                                                        <label htmlFor="" className="mt-1">
                                                            Exchange Rate
                                                        </label>
                                                        <div className="box-circl-holder d-flex">
                                                            <input type="radio" defaultChecked />
                                                            <span>Market Rate</span>

                                                            <input type="radio" />
                                                            <span>Custom Rate</span>
                                                            <input
                                                                type="text"
                                                                placeholder="N0.00"
                                                                className="text"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="notes">
                                <span>i</span>
                                <p>
                                    To get cash back from this deposit, enter the amount below.
                                    Indicate the account where you want this money to go, such as
                                    your Petty Cash account.
                                </p>
                            </div>
                            <div id="GeneralTable">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Received From</th>
                                            <th scope="col">From Accout</th>
                                            <th scope="col">Memo</th>
                                            <th scope="col">CHK No.</th>
                                            <th scope="col">Payment Method</th>
                                            <th scope="col">Class</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="buttom mt-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="notes w-100">
                                                <span>i</span>
                                                <p>
                                                    To get cash back from this deposit, enter the amount
                                                    below. Indicate the account where you want this money
                                                    to go, such as your Petty Cash account.
                                                </p>
                                            </div>
                                         
                                           
                                        </div>

                                        <div className="col-md-6 right">
                                            {/* <div className="Total">
                        <h4>Deposit Subtotal</h4>
                        <span>NGN</span>
                        <span>0.00</span>
                      </div> */}

                                            <div className="Total">
                                                <h4>Deposit Total</h4>
                                                <span>NGN</span>
                                                <span></span>
                                            </div>
                                            <div className="Total"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="select mt-2">
                                                    <label htmlFor="">Cash back goes to</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Busky LTD_Dollar</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="">
                                                    <label>Cash back Amount</label>
                                                    <input type="text" placeholder="EUR 0.00" />
                                                </div>
                                                <div className="Message mt-4">
                                                    <div className="title">
                                                        <div className="titleHolder mb-2 d-flex justify-content-between">
                                                            <span>Cash back Memo</span>
                                                        </div>
                                                        <textarea
                                                            className="w-100 h-h-75 btn-outline-info"
                                                            name=""
                                                            id=""
                                                            placeholder=""
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 right">
                                                <div className="d-flex deposit">
                                                    <h4>Deposit Total</h4>
                                                    <div className="Deposit">
                                                        <span>EUR</span>
                                                        <span>NGN</span>
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
            </div>
            <ButtomNav />
        </div>
    );
};

export default MakeDeposit;
