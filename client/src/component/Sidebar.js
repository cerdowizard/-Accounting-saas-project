import "../styles/dashboardStyle.scss";
import img from "../assets/Logo.png";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Sidebar = () => {
    return (
        <div id="Sidebar">
            <div className="navBarHolder">
                <div className="fesSection">
                    <img src={img} />
                    <div className="activate ones mt-4">
                        <DashboardIcon className='icons' />
                        <Link to="/HomeDashboard">Dashboard</Link>
                    </div>
                </div>
                <hr />
                <div className="secSection">
                    <ul>
                        <li >
                            <GroupAddIcon className='icons' />
                            <Link to="/Teams">Super Admin Team</Link>
                        </li>
                        <li>
                            <PeopleOutlineIcon className='icons' />
                            <Link to="/Subscribers">Subscribers</Link>
                        </li>
                        <li>
                            <AccountBalanceIcon className='icons' />
                            <Link to="/Companies">Companies</Link>
                        </li>
                        <li>
                            <HowToRegIcon className='icons' />
                            <Link to="/RegisteredUser">Registered users</Link>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="thirdSection">
                    <ul>
                        <li>
                            <LocalAtmIcon className='icons' />
                            <Link to="">Billing & plans</Link>{" "}
                        </li>
                        <li>
                            <ReviewsIcon className='icons' />
                            <Link to="">Revenue</Link>{" "}
                        </li>
                        <li>
                            <AccountBalanceWalletIcon className='icons' />
                            <Link to="">Transactions</Link>{" "}
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="lastSection">
                    <ul>
                        <li>
                            <AccountCircleIcon className='icons' />
                            <Link to="">Profile</Link>{" "}
                        </li>
                        <li>
                            <CropLandscapeIcon className='icons' />
                            <Link to="">Landing page</Link>{" "}
                        </li>
                        <li>
                             <NotificationsIcon className='icons' />
                            <Link to="">Notifications</Link>{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
