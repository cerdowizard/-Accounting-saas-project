import Footer from "../component/Footer";
import Headers from "../component/Headers";
import Navbar from "../component/Navbar";
import PriceCard from '../component/PriceCard'
import Table from "../component/Table";
import '../styles/pricing.scss'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <div id="Pricing">
                <div className="select">
                    <h1>SELECT COUNTRY:</h1>
                    <ul>
                        <li>outside nigeria</li>
                        <li className="act">nigeria</li>
                    </ul>
                </div>
                <div className="pricingHolder">
                    <Headers
                        title="Simple pricing for companies of any scale"
                        subText="Choose your perfect plan and get started."
                    />
                    <div className="switch d-flex">
                        <span>Monthly</span>
                        <ToggleOffIcon className="icon"/>
                        <span>Annual</span>
                    </div>
                </div>
                <div className="pricingSection">
                    <PriceCard />
                </div>
                <div className="table">
                    <h1>Compare Plans</h1>
                    <Table />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;
