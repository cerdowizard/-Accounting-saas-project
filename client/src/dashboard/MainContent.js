import '../styles/dashboardStyle.scss'
import FooterBoard from './FooterBoard';
import NavBoard from "./NavBoard";
const MainContent = () => {
    return (
        <div id='MainContent'>
            <NavBoard />
            <div className="cardHolder container">

                <div className="box">
                    <div className="fes">
                        <img src="" alt="" />
                    </div>
                    <div className="sec">
                        <h1>15</h1>
                    </div>
                    <div className="thr">
                        <h3>Team members</h3>
                    </div>
                </div>

                <div className="box">
                    <div className="fes">
                        <img src="" alt="" />
                    </div>
                    <div className="sec">
                        <h1>120</h1>
                    </div>
                    <div className="thr">
                        <h3>Number of subcribers</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="fes">
                        <img src="" alt="" />
                    </div>
                    <div className="sec">
                        <h1>32</h1>
                    </div>
                    <div className="thr">
                        <h3>Number of Companies</h3>
                    </div>
                </div>

                <div className="box">
                    <div className="fes">
                        <img src="" alt="" />
                    </div>
                    <div className="sec">
                        <h1>242</h1>
                    </div>
                    <div className="thr">
                        <h3>Number of registered users</h3>
                    </div>
                </div>
            </div>
            <FooterBoard />
        </div>
    )
}

export default MainContent