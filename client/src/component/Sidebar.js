import '../styles/dashboardStyle.scss'
import img from "../assets/Logo.png";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
const Sidebar = () => {
  return (
      <div id='Sidebar'>
          <div className="navBarHolder">
              <div className="fesSection">
                  <img src={img} />
                  <div className="">
                      <DashboardIcon/>
                      <Link to='/dashboard'>Dashboard</Link>
                </div>
              </div>
              <hr/>
              <div className="secSection">
                  <ul>
                      <li>
                          <PeopleOutlineIcon/>
                          <Link to=''>Super Admin Team</Link> </li>
                      <li><Link to=''>Subscribers</Link> </li>
                      <li><Link to=''>Companies</Link> </li>
                      <li><Link to=''>Registered users</Link> </li>
                  </ul>
              </div>
              <hr />
              <div className="thirdSection">
                  <ul>
                      <li><Link to=''>Billing & plans</Link> </li>
                      <li><Link to=''>Revenue</Link> </li>
                      <li><Link to=''>Transactions</Link> </li>
                  </ul>
              </div>
              <hr />
              <div className="lastSection">
                  <ul>
                      <li><Link to=''>Profile</Link> </li>
                      <li><Link to=''>Landing page</Link> </li>
                      <li><Link to=''>Notifications</Link> </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Sidebar