import '../styles/list.scss'
import UserNavbar from "./UserNavbar";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import img from '../assets/Youtube video player.png'
import { Table } from '@mui/material';
import ListTabel from '../component/ListTabel';
const ListUsers = () => {
    return (
        <div>
            <UserNavbar />
            <div id="ListUsers">
                <div className="container">
                    <div className=" main">
                        <div className="header">
                            <div className="left">
                                <h1>List of Customers</h1>
                            </div>
                            <div className="right">
                                <button className='btn'>
                                    Import Customers
                                </button>
                                <button className="button one btn">
                                    Create New Customer
                                </button>
                            </div>
                        </div>
                        <div className="secondLayer">
                            <div className="left">
                                <button className='btn'>
                                    Import Customers
                                </button>
                            </div>
                            <div className="middle">
                                <div className="search">
                                    <span>  Search:</span>
                                    <div className="">
                                        <input type="text" />
                                        <SearchIcon className='icon' />
                                    </div>
                                </div>
                                <div className="setting">
                                    <span>Sort by:</span>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            All (No Filter)
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item active" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>

                                        </ul>
                                    </div>
                                    <SettingsIcon />
                                    <SwapVertIcon />
                                </div>

                            </div>
                            <div className="right">
                                <div className="youtube">
                                    <h1>Help center</h1>
                                    <div className="img">

                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tableSection mt-5">
                            <div className="nav">
                                <h1 className='text-bg-danger'>Nav</h1>
                            </div>
                            <ListTabel />
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListUsers