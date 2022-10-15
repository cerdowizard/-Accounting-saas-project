import ButtomNav from '../component/ButtomNav'
import UserNavbar from './UserNavbar'
import '../styles/inputs.scss'
import '../styles/in.scss'
import Table from '../component/Table'
import { useState } from 'react'
import Intable from "../component/Intable";
const Invoice = () => {
    let [tableData, setTableData] = useState([]);
    // [
    //     { "id": 1, "name": "Abel", "lName": "Michael" },
    //     { "id": 1, "name": "Abel", "lName": "Michael" },
    //     { "id": 1, "name": "Abel", "lName": "Michael" },
    //     { "id": 1, "name": "Abel", "lName": "Michael" },
    // ]
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Recurring Invoice</h1>
                                </div>

                            </div>
                            <div className="right">
                                <div className="top">
                                    <button>Recurring Invoice List</button>
                                </div>

                            </div>
                        </div>
                        <div className="main">
                            <div className="header ">
                                <div className="left">
                                    <h1>Choose what you can use:</h1>
                                    <div className="inputHolder">
                                        <div className="in-check">
                                            <input type="checkbox" defaultChecked />
                                            <span>Shipping</span>
                                        </div>
                                        <div className="in-check">
                                            <input type="checkbox" defaultChecked />
                                            <span>Total Discount</span>
                                        </div>
                                        <div className="in-check">
                                            <input type="checkbox" defaultChecked />
                                            <span>Class</span>
                                        </div>
                                        <div className="in-check">
                                            <input type="checkbox" defaultChecked />
                                            <span>Deposit</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <h1>Balance Due:</h1>
                                    <p>₦0.00</p>
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
                                            <div>
                                                <label htmlFor="">Shipping Address</label>
                                                <div className="email-input">
                                                    <input className='p' type="text" placeholder='Street' />
                                                </div>
                                            </div>
                                            <div className="div d-flex gap-3 mt-2">
                                                <input type="text" placeholder='City/Town' />
                                                <input type="text" placeholder='State/Province' />

                                            </div>
                                            <div className="div d-flex gap-3 mt-2">
                                                <input type="text" placeholder='Postal Code' />
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

                                        </div>
                                    </div>

                                    <div className="payment">
                                        <div className="row mt-3">
                                            <h1>Payment Details</h1>
                                            <div className="col-md-6">

                                                <div className="select">
                                                    <label htmlFor="">Payment Method</label>
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
                                                <div className="select">
                                                    <label htmlFor="">Deposit to</label>
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
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="">Reference no.</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='15268558' />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="invoice-deatil mt-3">
                                        <div className="row">
                                            <h1>Invoice Details</h1>
                                            <div className="col-md-6">
                                                <div className="fs">
                                                    <label htmlFor="">Invoice no.</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='15268558' />
                                                    </div>
                                                </div>
                                                <div className="fs">
                                                    <label htmlFor="">Reference no.</label>
                                                    <div className="email-input">
                                                        <input type="date" />
                                                    </div>
                                                </div>
                                                <div className="select">
                                                    <label htmlFor="">Layout</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Default (Classic)</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select">
                                                    <label htmlFor="">Terms</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>NET 15</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <div className="email-input">
                                                        <label htmlFor="">Due Date</label>
                                                        <input type="date" />
                                                    </div>
                                                    <div className="tax-rate mt-3">
                                                        <label htmlFor="">Amounts are</label>
                                                        <div className="radios">
                                                            <div className="check">
                                                                <input type="radio" defaultChecked />
                                                                <span>Exclusive of Tax</span>
                                                            </div>

                                                            <div className="check">
                                                                <input type="radio" defaultChecked />
                                                                <span>Inclusive of Tax</span>
                                                            </div>
                                                            <div className="check">
                                                                <input type="radio" defaultChecked />
                                                                <span>Out of Scope of Tax</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
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
                            <div className="tables">
                                <Intable />

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
                                            </div>
                                            <div className="col-md-6 right">
                                                <div className="Total">
                                                    <h4>Total Discount</h4>
                                                    <span>₦0.00</span>
                                                </div>
                                                <div className="Total">
                                                    <h4>Total Amount</h4>
                                                    <span>₦0.00</span>
                                                </div>
                                                <div className="Total">
                                                    <h4>Total VAT</h4>
                                                    <span>₦0.00</span>
                                                </div>
                                                <div className="Total">
                                                    <h4>Total</h4>
                                                    <span>₦0.00</span>
                                                </div>

                                                <div className="Total">
                                                    <h4>Deposit</h4>
                                                    <span><input type="text" placeholder='#45' /></span>
                                                </div>
                                                <div className="Total">
                                                    <h4>Balance Due</h4>
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

export default Invoice