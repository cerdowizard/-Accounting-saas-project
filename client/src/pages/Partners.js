import '../styles/Partners.scss'
import Footer from '../component/Footer'
import Headers from '../component/Headers'
import Navbar from '../component/Navbar'

const Partners = () => {
    return (
        <div>
            <Navbar />
            <div id="Partners">
                <div className="partnersHeading">
                    <Headers title="Join us today and be our partner" subText="Find out how a partnership with us can extend your product, add revenue to your service offerings, or expand your addressable market." />
                </div>
                <div className="formHolder">
                    <div className="innerFormHolder">
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Partners