import '../styles/dashboardStyle.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import img from "../assets/Logo.png";
const NavBoard = () => {
  return (
    <div id='NavBoard'>
      <div className="content">
        <SearchIcon className='icon'/>
        <NotificationsIcon className='icon'/>
        <div className="imgs">
          <img src='' alt="" /> 
        </div>
        <span class="dropdown">
          <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Super Admin
          </span>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default NavBoard