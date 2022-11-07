import React from 'react'
import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import '../styles/inputs.scss'
import '../styles/in.scss'
const MakeJournalEntries = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Make Journal Entries</h1>
                                </div>

                            </div>
                            <div className="right d-flex">
                                <div className="top" >
                                    <button style={{ backgroundColor: "transparent", color: "#128C7E", border:"1px solid #128C7E" }}>Import Journal Entries</button>
                                </div>
                                <div className="top">
                                    <button>List of Journal Entries</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="main">

                            <form action="" id='FormInput'>
                                <div className="container">

                                    <div className="payment">
                                        <div className="row mt-3">
                                          
                                            <div className="col-md-6">

                                                <div className="select">
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

                                                <div className="fs mt-2">
                                                    <label htmlFor="">Date</label>
                                                    <div className="email-input">
                                                        <input type="date"/>
                                                    </div>
                                                </div>

                                             

                                            </div>
                                            <div className="col-md-6">
                                                <div className="Exchange mt-2">
                                                    <label htmlFor="">Exchange Rate</label>
                                                    <div className="box-circl-holder">

                                                        <input type="radio" defaultChecked />
                                                        <span>Market Rate</span>

                                                        <input type="radio" />
                                                        <span>Custom Rate</span>
                                                        <input type="text" placeholder='N0.00' className='text' />
                                                    </div>
                                                </div>
                                           
                                                <div className="fs">
                                                    <div className="d-flex Adjusting" style={{ justifyContent: "space-between" }}>
                                                        <label htmlFor="">Date</label>
                                                        <div className="d-flex Adjusted">
                                                            <input type="checkbox"  checked/>
                                                            <label htmlFor="">Adjusting Entry</label>
                                                        </div>
                                                     
                                                    </div>
                                                    
                                                    <div className="email-input">
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                 
                                </div>
                            </form>

                            <div id='GeneralTable'>
                                <table className="table scrollable">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
export default MakeJournalEntries