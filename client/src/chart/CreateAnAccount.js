import React from 'react'
import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import '../styles/inputs.scss'
import '../styles/in.scss'
const CreateAnAccount = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Create an Account</h1>
                                </div>

                            </div>
                            <div className="right">
                                <div className="top">
                                    <button>Chart of Accounts</button>
                                </div>

                            </div>
                        </div>
                        <div className="main">

                            <form action="" id='FormInput'>
                                <div className="container">

                                    <div className="payment">
                                        <div className="row mt-3">
                                            <h1>Account Details</h1>
                                            <div className="col-md-6">

                                                <div className="select">
                                                    <label htmlFor="">Account Type</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Bank</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>


                                                <div className="fs">
                                                    <label htmlFor="">Account Name *</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='15268558' />
                                                    </div>
                                                </div>

                                                <div className="select">
                                                    <label htmlFor="">Currency</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Euro</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="">Account Number</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='15268558' />
                                                </div>
                                                <div className="d-flex gap-2 sub">
                                                    <input type="checkbox" style={{width:20}} className='w-20 h-25' />
                                                    <span>Subaccount of</span>
                                                     <div className="select mt-2">
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
                                        </div>

                                    </div>
                                    <div className="invoice-deatil mt-3">
                                        <div className="row">
                                            <h1>Optional</h1>
                                            <div className="col-md-6">
                                                <div className="fs">
                                                    <label htmlFor="">Bank Account Number</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='15268558' />
                                                    </div>
                                                </div>
                                                <div className="fs d-flex gap-3">
                                                    <div className="fs">
                                                        <label htmlFor="">Opening Balance</label>
                                                        <div className="email-input">
                                                            <input type="text" placeholder='15268558' />
                                                        </div>
                                                    </div>


                                                    <div className="fs">
                                                        <label htmlFor="">As of</label>
                                                        <div className="email-input">
                                                            <input type="date" placeholder='15268558' />
                                                        </div>
                                                    </div>

                                                    
                                                </div>
                                             
                                            </div>
                                            <div className="col-md-6">
                                                <div className="fs">
                                                    <label htmlFor="">Routing Number</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='Routing Number' />
                                                    </div>
                                                </div>

                                                <div className="Message mt-4 w-100">
                                                    <div className="title">
                                                        <div className="titleHolder mb-2 d-flex justify-content-between">
                                                            <span>Description</span>
                                                        </div>
                                                        <textarea className='w-100 h-h-75 btn-outline-info' name="" id="" placeholder=''></textarea>
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
                       

                        </div>
                    </div>
                </div>

            </div>
            <ButtomNav />
        </div>
    )
}

export default CreateAnAccount