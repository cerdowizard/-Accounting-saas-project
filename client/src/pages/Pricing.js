import React from "react";
import Footer from "../component/Footer";
import Headers from "../component/Headers";
import Navbar from "../component/Navbar";
import PriceCard from '../component/PriceCard'
import Table from "../component/Table";
import '../styles/pricing.scss'
const Pricing = () => {
    return (
        <div>
            <Navbar />
            <div id="Pricing">
                <Headers
                    title="Simple pricing for companies of any scale"
                    subText="Choose your perfect plan and get started."
                />
                <div className="pricingSection">
                    <PriceCard />
                </div>
                <div className="table">
                    <h1>Compare Plans</h1>
                    <Table/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;
