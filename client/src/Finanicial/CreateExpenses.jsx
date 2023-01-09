
import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import { useState } from "react";
import { Link } from "react-router-dom";
const CreateExpenses = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isBillabled, setIsBillabled] = useState(false);
    const [isRecurring, setIsRecurring] = useState(false);
    const [isRecurringCharges, setRecurringCharges] = useState(true);
    const [isrevenueStream, setRevenueStream] = useState(false);
    function handleClick() {
        setIsVisible(!isVisible);
    }
    function clicked() {
        setIsChecked(!isChecked);
    }
    function Billable() {
        setIsBillabled(!isBillabled);
    }
    function Recurring() {
        setIsRecurring(!isRecurring)
    }
    function RecurringCharges() {
        setRecurringCharges(!isRecurringCharges)
    }
    function RecurringStream() {
        setRevenueStream(!isrevenueStream)
    }
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Expenses Details</h1>
                                </div>

                            </div>
                            <div className="right">
                                <div className="top">
                                    <Link to='/BudgetPage'>
                                        <button>Expenses Dashboard</button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="main" style={{
                            width: '95%',
                        }}>
                            <form action="" id='FormInput'>
                                <div className="">
                                    <div className="invoice-deatil mt-3">
                                        <div className="row">
                                            <h1>Expenses Details</h1>
                                            <div className="col-md-6">
                                                <div className="fs">
                                                    <label htmlFor="">Expenses Name</label>
                                                    <div className="email-input">
                                                        <input type="text" placeholder='Enter name or description' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-4">
                                                <div className="fs" style={{
                                                    width: '100%',
                                                }}>
                                                    <label htmlFor="">Expenses Type</label>
                                                    <div className="d-flex mt">
                                                        <input type="checkbox"  onChange={handleClick} style={{
                                                            width: 25
                                                        }} />
                                                        <span>Rent or lease </span>

                                                        <input type="checkbox"style={{
                                                            width: 25
                                                        }} />
                                                        <span>Marketing</span>

                                                        <input type="checkbox"  style={{
                                                            width: 25
                                                        }} />
                                                        <span>Other expense</span>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    {isVisible && <div style={{ display: 'block' }}>
                                       
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <h6>Expense Amount</h6>
                                                <div className="d-flex mt-2 mb-3">
                                                    <input type="checkbox" defaultChecked="checked" onChange={RecurringCharges} style={{
                                                        width: 25
                                                    }} />
                                                    <span>Constant amount</span>
                                                    <input type="checkbox" onClick={clicked} style={{
                                                        width: 25
                                                    }} />
                                                    <span>Varying amounts over time</span>
                                                    <input type="checkbox" onChange={Billable} style={{
                                                        width: 25
                                                    }} />
                                                    <span>One-time amount</span>
                                                    <input type="checkbox" onClick={Recurring} placeholder='Enter name or description' style={{
                                                        width: 25
                                                    }} />
                                                    <span>% of overall revenue</span>
                                                    <input type="checkbox" onClick={RecurringStream} placeholder='Enter name or description' style={{
                                                        width: 25
                                                    }} />
                                                    <span>% of specific revenue stream</span>
                                                </div>

                                                {isRecurringCharges && <div style={{ display: 'block' }}>
                                                    <div className="fs" style={{
                                                        width: '100%',
                                                    }}>

                                                        <div className="d-flex gap-3 mt-2" style={{
                                                            alignItems: 'center'
                                                        }}>
                                                            <input type="text" placeholder="$" />
                                                            Per
                                                            <div className="select mt-2">
                                                                <select
                                                                    class="role"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected>Monthly</option>
                                                                    <option value="1">Nigeria</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="fs">
                                                            <label htmlFor="">Expenses Date</label>
                                                            <div className="email-input">
                                                                <input type="date" style={{
                                                                    width: '95%'
                                                                }}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}

                                            </div>
                                            
                                        </div>
                                    </div>
                                    }

                                    {/* Billable Hours */}
                                    {
                                        isBillabled && <div style={{ display: 'block' }}>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <div className="">
                                                    <div className="fs" style={{
                                                        width: '100%',
                                                    }}>
                                                        <div className="d-flex gap-3 mt-2">
                                                            <input type="text" placeholder="$" />
                                                        </div>
                                                        <div className="fs">
                                                            <label htmlFor="">Expenses Date</label>
                                                            <div className="email-input">
                                                                <input type="date" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-5">
                                               
                                            </div>
                                        </div>
                                        </div>
                                    }

                                    {/* Recurring Charges */}
                                    {
                                        isRecurring && <div style={{ display: 'block' }} className="Recurring">
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <div className="">
                                                    <div className="fs" style={{
                                                        width: '100%',
                                                    }}>
                                                        <div className="d-flex gap-3 mt-2">
                                                            <input type="text" placeholder="%" />
                                                        </div>
                                                        <div className="fs">
                                                            <label htmlFor="">Expenses Date</label>
                                                            <div className="email-input">
                                                                <input type="date" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-5">

                                            </div>
                                        </div>
                                        </div>
                                    }
                                    {
                                        isrevenueStream && <div style={{ display: 'block' }}>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <h6>Revenue Stream</h6>
                                                    <div className="">
                                                        <div className="fs" style={{
                                                            width: '100%',
                                                        }}>
                                                            <div className="select mt-2">
                                                                <select
                                                                    class="role"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected>Select Revenue Stream</option>
                                                                    <option value="1">Nigeria</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="d-flex gap-3 mt-2">
                                                                <input type="text" placeholder="%" />
                                                            </div>
                                                            <div className="fs">
                                                                <label htmlFor="">Expenses Date</label>
                                                                <div className="email-input">
                                                                    <input type="date" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-5">

                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        isChecked && <div style={{ display: 'block' }}>
                                        <div className="">
                                            <div className="want">
                                                <div className="d-flex one">
                                                    <h5>2022</h5>
                                                    <p>Click on the chart or enter values below to set the amounts you want <span>Learn More.</span></p>
                                                </div>
                                                <div className="two">
                                                    <input type="text" name="" id="" placeholder="0%" style={{
                                                        width: '25%'
                                                    }} />
                                                    <button style={{
                                                        border: "none",
                                                        background: "#128C7E",
                                                        color: "#fff",
                                                    }}>Apply</button>
                                                </div>
                                            </div>

                                            <div className="">
                                                <div className="lines">
                                                    <span></span>
                                                    <p>100</p>
                                                </div>

                                                <div className="lines">
                                                    <span></span>
                                                    <p>100</p>
                                                </div>

                                                <div className="lines">
                                                    <span></span>
                                                    <p>100</p>
                                                </div>

                                                <div className="lines">
                                                    <span></span>
                                                    <p>100</p>
                                                </div>

                                                <div className="lines">
                                                    <span></span>
                                                    <p>100</p>
                                                </div>
                                            </div>
                                            <div className="yearBox">
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                            </div>
                                            <div className="yearBox mt-1">
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                                <div className="yer">
                                                    <p>Jan ‘22</p>
                                                    <div className="box"></div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    }

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


export default CreateExpenses