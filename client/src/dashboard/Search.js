import '../styles/dashboardStyle.scss'
import SettingsIcon from '@mui/icons-material/Settings';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    return (
        <div>

            <div className="settings">
                <div className="search">
                    <span>  Search:</span>
                    <div className="">
                        <input type="text" />
                        <SearchIcon className='icon' />
                    </div>
                </div>
                <div className="dropdown">
                    <span>View:</span>
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
                    <SettingsIcon className="iconz" />
                    <SwapVertIcon className="iconz" />
                </div>

                <div className="las">
                    <div className="btn">
                        <button className='btn'>Add New Member</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search