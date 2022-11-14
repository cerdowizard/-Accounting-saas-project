import "../styles/inputs.scss";
import "../styles/in.scss";
import UserNavbar from "../usersdashboard/UserNavbar";
import ButtomNav from "../component/ButtomNav";

const TransferFunds = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Transfer Funds</h1>
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
                                        <h1>Transfer Details</h1>
                                        <div className="paymentMethod">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="dividedForm">
                                                        <div className="select mt-2">
                                                            <label htmlFor="">Class</label>
                                                            <select
                                                                class="role"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected></option>
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

                                                        <div className="select mt-2">
                                                      

                                                        <div className="select mt-2">
                                                            <label htmlFor="">Transfer Funds From</label>
                                                            <select
                                                                class="role"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected>12000 - Undeposited Funds</option>
                                                                <option value="1">Nigeria</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>

                                                        <div className="select mt-2">
                                                            <label htmlFor="">Transfer Funds To</label>
                                                            <select
                                                                class="role"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected>12000 - Undeposited Funds</option>
                                                                <option value="1">Nigeria</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                            <label htmlFor="">Transer Amount</label>
                                                            <select
                                                                class="role"
                                                                aria-label="Default select example"
                                                            >
                                                                <option selected>N0.00</option>
                                                                <option value="1">Nigeria</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
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
                                                    <div className="">
                                                        <label htmlFor="">Account Balance</label>
                                                        <input type="text" placeholder="N0.00"/>
                                                    </div>
                                                    <div className="">
                                                        <label htmlFor="">Account Balance</label>
                                                        <input type="text" placeholder="N0.00"/>
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
    );
};

export default TransferFunds