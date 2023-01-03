import UserNavbar from "../usersdashboard/UserNavbar";
import FooterBoard from "../dashboard/FooterBoard";
import '../styles/reports.scss'
import '../styles/generalTabel.scss'
import { useState } from "react";
import { margin } from "@mui/system";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
const ProfitLossComparison = () => {
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
    };
    const [close, setClose] = useState(true);
    const openMenu = () => { 
        setClose(!close);
    }
    return (
        <div>
            <UserNavbar />
            <div id="RealizedLosses">
                <div className="container repHolder">
                    <div className="header">
                        <div className="left">
                            <h1>Profit & Loss YTD Comparison</h1>
                        </div>
                        <div className="right">
                            <button className="btnOne">Comment</button>
                            <button className="btnTwo">Email</button>
                            <button className="btnThrree">Print</button>
                            <button className="btnFour">Download Report</button>
                        </div>
                    </div>
                    <div className="period">
                        <div className="left">
                            <span>Selected Period</span>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Last Fiscal Year
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <span>From</span>
                            <input type="date" />
                            <span>To</span>
                            <input type="date" />
                        </div>
                        <div className="right">
                            <span>Show Columns</span>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Total Only
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <button
                        onClick={handleClick}
                        class="btn btn-info mb-5">
                        Ordinary Income/Expense
                    </button>

                    {toggle ?
                        <ul class="list-group">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                        :
                        <></>
                    } */}
                    <div className="contentHolder">
                        <div className="date">
                            <div className="left">

                            </div>
                            <div className="right">
                               
                                <p>Jan - Dec 22</p>
                                <span></span>
                                <p>Jan - Dec 22</p>
                            </div>
                        </div>
                        <div className="ordinary">
                            <div
                                onClick={handleClick}
                                className="p-2" style={{
                                    backgroundColor: '#D2D2D3',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                <ArrowDropDownIcon/>
                                Ordinary Income/Expense
                            </div>

                            {toggle ?
                                <div className="">
                                    <p style={{
                                        padding: '15px',
                                        backgroundColor: '#f3f3f3',
                                        margin:0
                                    }}>Income</p>   
                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>45000-Tithes/Offerings (Unrestricted contributions,...</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>45000-Tithes/Offerings (Unrestricted contributions,...</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>45000-Tithes/Offerings (Unrestricted contributions,...</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>Total Income</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                </div>
                                    
                                :
                                <></>
                            }
                        </div>

                        <div className="ordinary">
                            <div
                                onClick={openMenu}
                                className="p-2" style={{
                                    backgroundColor: '#D2D2D3'

                                }}>
                                <ArrowDropDownIcon />
                                Cost of Goods Sold
                            </div>

                            {close ?
                                <div className="">
                                    
                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>50000 - Cost of Goods Sold (Cost of items purchased...</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>Total COGS</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>Gross Profit</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>Net Ordinary Income</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                    <div className="date " style={{
                                        paddingLeft: '25px',
                                        paddingRight: '25px'
                                    }}>
                                        <div className="left">
                                            <p>Net Income</p>
                                        </div>
                                        <div className="right">
                                            <p>200.00</p>
                                            <span></span>
                                            <p>200.00</p>
                                        </div>
                                    </div>

                                </div>

                                :
                                <></>
                            }
                        </div>
                        <div className="fesSection">
                            <div className="left">
                               
                            </div>
                            <div className="right"></div>
                        </div>
                    </div>
                    <div className="nextBtn">
                        <Link to='/ProfitLossComparisonOne'><button>Next</button></Link>
                    </div>
                </div>
            </div>
            <FooterBoard />
        </div>
    )
}

export default ProfitLossComparison