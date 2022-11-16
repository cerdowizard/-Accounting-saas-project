import '../styles/dashboardStyle.scss'
import Sidebar from "../component/Sidebar";
import MainContent from './MainContent';
const HomeDashboard = () => {
  return (
    
      <div id='HomeDashboard'>
          <Sidebar />
          <MainContent/>
    </div>
  )
}

export default HomeDashboard