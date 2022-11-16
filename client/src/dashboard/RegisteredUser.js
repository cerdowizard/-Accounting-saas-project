import '../styles/dashboardStyle.scss'
import Sidebar from "../component/Sidebar";
import FooterBoard from './FooterBoard';
import NavBoard from "./NavBoard";
import Search from './Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Pagenate from '../component/Pagenate';
const RegisteredUser = () => {
  return (
    <div id='HomeDashboard'>
      <Sidebar />
      <div id='MainContent'>
        <NavBoard />
        <div className="Team">
          <h1 className='mt-5 mb-5'>Registered Users</h1>

          <Search />
          <div className="tableSection">
            <div id='GeneralTable'>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Actions</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
               
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                  
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                  
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                    
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                   
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                   
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                   
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                    
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                  
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                  
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                    
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                   
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                   
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                    
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                 
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>
                  <tr>
                    
                    <td>Marvin McKinney</td>
                    <td>debra.holt@example.com</td>
                   
                    <td>    <span class="dropdown">
                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                      </span>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </span></td>
                    <td><DeleteForeverIcon style={{
                      color: "red"
                    }} /></td>
                  </tr>



                </tbody>
              </table>
            </div>
          </div>
          <Pagenate />
        </div>
        <FooterBoard />
      </div>
    </div>

  )
}

export default RegisteredUser