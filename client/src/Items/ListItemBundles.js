import '../styles/list.scss'
import '../styles/generalTabel.scss'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import img from '../assets/Youtube video player.png'
import GetAppIcon from '@mui/icons-material/GetApp';
import dropArrow from '../assets/Vectors.png'
import UserNavbar from '../usersdashboard/UserNavbar';
const ListItemBundles = () => {
  return (
      <div>
          <UserNavbar />
          <div id="ListUsers">
              <div className="container">
                  <div className="main ">
                      <div className="header">
                          <div className="left">
                              <h1> List of Item Bundles</h1>
                          </div>
                          <div className="right">
                              {/* <div className="left">
                                    <button className='btn'>
                                        Allocate Items Receipt
                                    </button>
                                </div> */}
                              <button className="button btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                  Create New Item Bundle
                              </button>

                          </div>
                      </div>
                      <div className="secondLayer">
                          <div className="left">
                              <button className='btn'>
                                  Item Dashboard
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
                      <div className="tableSection ">
                          <div className="nav mb-2">
                              <img src={dropArrow} alt="" />
                              <span>Select</span>
                              <li>Delete</li>
                          </div>
                          <div className="p-2">
                              <div id='GeneralTable'>
                                  <table class="table">
                                      <thead>
                                          <tr>
                                              <th scope="col"><input type="checkbox" /></th>
                                              <th scope="col">Code</th>
                                              <th scope="col">Description</th>
                                              <th scope="col">Status</th>
                                              <th scope="col">Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <input type="checkbox" />
                                              </td>
                                              <td>100230</td>
                                              <td>Carton Biscuit</td>
                                              <td>
                                                  <span className='act'>Active</span>
                                              </td>
                                              <td>
                                                  <span class="dropdown">
                                                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                          Actions
                                                      </span>
                                                      <ul class="dropdown-menu">
                                                          <li><a class="dropdown-item" href="#">Action</a></li>
                                                          <li><a class="dropdown-item" href="#">Another action</a></li>
                                                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                      </ul>
                                                  </span>
                                              </td>
                                          </tr>

                                          <tr>
                                              <td>
                                                  <input type="checkbox" />
                                              </td>
                                              <td>100230</td>
                                              <td>Carton Biscuit</td>
                                              <td>
                                                  <span className='inact'>Inactive</span>
                                              </td>
                                              <td>
                                                  <span class="dropdown">
                                                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                          Actions
                                                      </span>
                                                      <ul class="dropdown-menu">
                                                          <li><a class="dropdown-item" href="#">Action</a></li>
                                                          <li><a class="dropdown-item" href="#">Another action</a></li>
                                                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                      </ul>
                                                  </span>
                                              </td>
                                          </tr>

                                          <tr>
                                              <td>
                                                  <input type="checkbox" />
                                              </td>
                                              <td>100230</td>
                                              <td>Carton Biscuit</td>
                                              <td>
                                                  <span className='act'>Active</span>
                                              </td>
                                              <td>
                                                  <span class="dropdown">
                                                      <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                          Actions
                                                      </span>
                                                      <ul class="dropdown-menu">
                                                          <li><a class="dropdown-item" href="#">Action</a></li>
                                                          <li><a class="dropdown-item" href="#">Another action</a></li>
                                                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                      </ul>
                                                  </span>
                                              </td>
                                          </tr>

                                      </tbody>
                                  </table>
                              </div>
                              <div className="paginate">
                                  <nav aria-label="...">
                                      <ul class="pagination">
                                          <li class="page-item disabled">
                                              <a class="page-link">Previous</a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item active" aria-current="page">
                                              <a class="page-link" href="#">2</a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item">
                                              <a class="page-link" href="#">Next</a>
                                          </li>
                                      </ul>
                                      <span>Displaying 1 - 2 of 2</span>
                                  </nav>
                                  <button className="btn">
                                      <GetAppIcon />
                                      Export as CSV
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default ListItemBundles