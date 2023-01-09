import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import { useState } from "react";
import { Link } from "react-router-dom";
const SetTaxRate = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isBillabled, setIsBillabled] = useState(false);
    const [isRecurring, setIsRecurring] = useState(false);
    const [isRecurringCharges, setRecurringCharges] = useState(false);
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
        console.log('clicked');
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
                                    <h1>Set Tax Rate</h1>
                                </div>

                            </div>
                            <div className="right">
                                <div className="top">
                                    <Link to='/BudgetPage'>
                                        <button>Taxes Dashboard</button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="main" style={{
                            width: '95%',
                        }}>

                            <div className="tax" >
                                <h2>Tax Details</h2>
                                <div className="fs" style={{
                                    width: '100%',
                                }}>
                                    <label htmlFor="">Tax Type</label>
                                    <div className="d-flex mt gap-2">
                                        <input type="checkbox" defaultChecked="checked" onClick={clicked}/>
                                        <span>Income Taxes</span>

                                        <input type="checkbox" onClick={handleClick} style={{

                                        }} />
                                        <span>Sales Taxes</span>
                                    </div>
                                    {isChecked && <div style={{ display: 'block' }}>
                                        <div className="aboutTax mt-3">
                                            <div className="topNav">
                                                <div className="left">
                                                    <span>i</span>
                                                    <p>About income taxes</p>
                                                </div>
                                                <div className="right">
                                                    <button onClick={Billable} className="btn">Show Less</button>
                                                </div>
                                            </div>

                                            {isBillabled && <div style={{ display: 'block' }}>
                                                <div className="content">
                                                    <p> If your business is profitable in a given year, you will need to pay a variety of taxes on that profit. Enter an overall tax rate to include in your financial plan. This estimated rate should cover all applicable income taxes — federal, state, local, etc. If you're not sure what to put, though, a 20% rate is probably close. These taxes typically apply only when you are profitable. Unprofitable years may still have a tax burden for any profitable quarters, but the year should end up with zero taxes.
                                                    </p>
                                                    <br />
                                                    <p> Note that this rate is only for income taxes. Employee-related taxes like payroll and social welfare taxes are covered on the personnel step. Other taxes, such as property taxes, are generally best added as regular expenses.</p>
                                                </div>
                                            </div>}
                                          
                                        </div>
                                    </div>
                                    }
                                   
                                    {isVisible && <div style={{ display: 'block' }}>
                                        <div className="aboutTax mt-3">
                                            <div className="topNav">
                                                <div className="left">
                                                    <span>i</span>
                                                    <p>About sales taxes</p>
                                                </div>
                                                <div className="right">
                                                    <button onClick={RecurringCharges} className="btn">Show Less</button>
                                                </div>
                                            </div>
                                            {isRecurringCharges && <div style={{ display: 'block' }}>  <div className="content">
                                                <p> Are you required to collect sales taxes from your customers? Some or all of your revenue streams might be subject to a national general sales tax (GST), value-added tax (VAT), or other state or local sales taxes. If that’s the case, fill in the details below. 
                                                </p>
                                                <p> Collecting sales taxes will not affect your profitability, since you are obliged to pay the collected taxes to the government on a regular schedule. But it will affect your cash flow projections for the time from when you receive the revenue to when you pay them to the government. It’s important not to treat temporary tax money as readily available cash.</p>
                                            </div></div>}
                                          
                                        </div>
                                    </div>
                                    }
                                    <div className="row mt-3" id="FormInput">
                                        <div className="col-md-6">
                                            <label htmlFor="">What is your estimated tax rate?</label>
                                            <input type="text" name="" id="" placeholder="%" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">How often will you pay your taxes?</label>
                                            <div className="select mt-1 ">
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
export default SetTaxRate