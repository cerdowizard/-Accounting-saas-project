import '../styles/customerDashboard.scss'
import '../styles/tabelz.scss'
import UserNavbar from "../usersdashboard/UserNavbar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const HrPage = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        //  toggle isActive state on click
        event.currentTarget.classList.toggle('act');

        event.currentTarget.classList.add('');

        event.currentTarget.classList.remove('remove');

    };
    const [toggle, setToggle] = useState(true);
    const handleClicks = () => {
        setToggle(!toggle);
    };
    return (
        <div>
            <UserNavbar />
            <div id="CustomersDashBoard">
                <div className='container'>

                    <div className="fsLayer">
                        <h1 className='mt-3'>HR/Payroll Dashboard</h1>
                        <div className="navHolder">

                            <div className="boxes act" onClick={handleClick}>
                                <Link to='/CreateNewVendor'>Create New Employee</Link>
                            </div>
                            <div className="boxes" onClick={handleClick}>
                                <Link to=''>Create Flat Salary Structue</Link>
                            </div>
                            <div className="boxes" onClick={handleClick}>
                                <Link to='/ProcessVendorInvoice' >Create Hourly Rate Structure</Link>
                            </div>
                            <div className="boxes" onClick={handleClick}>
                                <Link to='/ProcessVendorReturn' >Salary Structure List</Link>
                            </div>
                            <div className="boxes" onClick={handleClick}>
                                <Link to='/ProcessPayment'>Leave Approval</Link>
                            </div>
                            <div className="boxes" onClick={handleClick}>
                                <Link to=''>Employee List</Link>
                            </div>
                            <div className="boxes" onClick={handleClick}>
                                <Link to='' >Time Sheet</Link>
                            </div>


                        </div>
                    </div>

                    <div className="Attendence">
                        <div className="header p-3">
                            <div className="d-flex gap-2">
                                <input type="checkbox" />
                                <span>My Attendence</span >
                            </div>
                            <ArrowDropDownIcon onClick={handleClicks} style={{
                                color: "white"
                            }} />
                        </div>
                        <div className="nav">
                            <ul>
                                <li className='act'>Absent</li>
                                <li>Leave</li>
                            </ul>
                        </div>
                        {toggle ?

                            <div className="contentHolders d-flex">
                                <div className="">
                                    <div className="title">
                                        <h6>Miss Punch</h6>
                                    </div>
                                    <div className="body">
                                        <ul>
                                            <li>
                                                <span>0</span>
                                                Pending
                                            </li>
                                            <li>
                                                <span className='success'>0</span>
                                                Approved
                                            </li>

                                            <li>
                                                <span className='reject'>0</span>
                                                Rejected
                                            </li>

                                            <li>
                                                <span className='pending'>0</span>
                                                Partial Approved
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="title">
                                        <h6>Work From Home</h6>
                                    </div>
                                    <div className="body">
                                        <ul>
                                            <li>
                                                <span>0</span>
                                                Pending
                                            </li>
                                            <li>
                                                <span className='success'>0</span>
                                                Approved
                                            </li>

                                            <li>
                                                <span className='reject'>0</span>
                                                Rejected
                                            </li>

                                            <li>
                                                <span className='pending'>0</span>
                                                Partial Approved
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="title">
                                        <h6>Work On Holiday</h6>
                                    </div>
                                    <div className="body">
                                        <ul>
                                            <li>
                                                <span>0</span>
                                                Pending
                                            </li>
                                            <li>
                                                <span className='success'>0</span>
                                                Approved
                                            </li>

                                            <li>
                                                <span className='reject'>0</span>
                                                Rejected
                                            </li>

                                            <li>
                                                <span className='pending'>0</span>
                                                Partial Approved
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="title">
                                        <h6>Out Of Station</h6>
                                    </div>
                                    <div className="body">
                                        <ul>
                                            <li>
                                                <span>0</span>
                                                Pending
                                            </li>
                                            <li>
                                                <span className='success'>0</span>
                                                Approved
                                            </li>

                                            <li>
                                                <span className='reject'>0</span>
                                                Rejected
                                            </li>

                                            <li>
                                                <span className='pending'>0</span>
                                                Partial Approved
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                        }


                    </div>

                    <div className="Attendence">
                        <div className="header p-3">
                            <div className="d-flex gap-2">
                                <input type="checkbox" />
                                <span>Today’s Status</span >
                            </div>
                            <ArrowDropDownIcon onClick={handleClicks} style={{
                                color: "white"
                            }} />
                        </div>
                        <div className="nav">
                            <ul>
                                <li className='act'>Pending <span>32</span></li>
                                <li>Approved <span>16</span></li>
                                <li>Others</li>
                            </ul>
                        </div>
                        {toggle ?

                            <div className="contentHolders d-flex">
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            :
                            <></>
                        }


                    </div>

                    <div className="Attendence">
                        <div className="header p-3">
                            <div className="d-flex gap-2">
                                <input type="checkbox" />
                                <span>Leave Approval</span >
                            </div>
                            <ArrowDropDownIcon onClick={handleClicks} style={{
                                color: "white"
                            }} />
                        </div>
                        <div className="nav">
                            <ul>
                                <li className='act'>Pending <span>32</span></li>
                                <li>Approved <span>16</span></li>
                                <li>Others</li>
                            </ul>
                        </div>
                        {toggle ?

                            <div className="contentHolders d-flex">
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            :
                            <></>
                        }


                    </div>


                    <div className="Attendence">
                        <div className="header p-3">
                            <div className="d-flex gap-2">
                                <input type="checkbox" />
                                <span>Attendance Approval</span >
                            </div>
                            <ArrowDropDownIcon onClick={handleClicks} style={{
                                color: "white"
                            }} />
                        </div>
                        <div className="nav">
                            <ul>
                                <li className='act'>Miss Punch <span>32</span></li>
                                <li>Work From Home <span>16</span></li>
                                <li>Work on Holiday <span>6</span></li>
                                <li>Out of Station</li>
                                <li>On Site Work</li>
                            </ul>
                        </div>
                        {toggle ?

                            <div className="contentHolders d-flex">
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxHolder">
                                    <div className="box">
                                        <div className="img">
                                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="left">
                                            <p>Darrell Steward</p>
                                            <p>Darrell.steward@example.com</p>
                                            <p>09012345678</p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            :
                            <></>
                        }


                    </div>

                </div>
                <div className="footer container">
                    <p>© Copyright Accounting Saas.</p>
                    <ul>
                        <li>Accounting Saas</li>
                        <li>Terms & conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HrPage