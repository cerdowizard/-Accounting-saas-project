import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import { useState } from "react";
import { Link } from "react-router-dom";
const CreateLoan = () => {
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
                                    <h1>Create Loan</h1>
                                </div>

                            </div>
                            <div className="right">
                                <div className="top">
                                    <Link to='/BudgetPage'>
                                        <button>Financing Dashboard</button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="main" style={{
                            width: '95%',
                        }}>

                            <div className="tax" >
                                <h2>Loan Details</h2>
                                <div className="fs" style={{
                                    width: '100%',
                                }}>
                                   
                                   
                                    {isChecked && <div style={{ display: 'block' }}>
                                        <div className="aboutTax mt-3">
                                            <div className="topNav">
                                                <div className="left">
                                                    <span>i</span>
                                                    <p>Tips about loans</p>
                                                </div>
                                                <div className="right">
                                                    <button onClick={Billable} className="btn">Show Less</button>
                                                </div>
                                            </div>

                                            {isBillabled && <div style={{ display: 'block' }}>
                                                <div className="content">
                                                    <p> 

                                                        Adding loans to your forecast — whether for general funding or to pay for specific purchases like a company car — is easy. Just fill in the details below, and we will calculate the amortization schedule, determine your payments, and incorporate the correct principal and interest payments into your financial projections.
                                                    </p>
                                                    <br />
                                                    <p>  Be sure not to add your loan payments as a separate expense. If you did that already, go delete that expense. All you need to do with loans is tell us about them here, and we’ll take care of the payback details.</p>
                                                    <p>

                                                        Note that this feature assumes you are following the standard repayment schedule. Want to pay a loan off faster than required, incorporate a balloon payment at the end, or otherwise customize the payment schedule? In those cases, cancel this loan, and use the Add Other option instead.
                                                    </p>
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
                                            <label htmlFor="">Loan Name</label>
                                            <input type="text" name="" id="" placeholder="Enter a name or description   " />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">When will you receive it</label>
                                            <div className="select mt-1 ">
                                               <input type="date" name="" id="" />
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

export default CreateLoan