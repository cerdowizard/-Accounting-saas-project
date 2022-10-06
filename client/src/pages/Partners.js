import '../styles/Partners.scss'
import Footer from '../component/Footer'
import Headers from '../component/Headers'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'

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
                        <div className="formHolder">

                            <form>
                                <h1>Become our partner</h1>
                                <div className="mail">
                                    <label>Email Address</label>
                                    <input type="text" placeholder='Email Address' />
                                </div>
                                <div className="mail">
                                    <label>Name</label>
                                    <input type="text" placeholder='Name' />
                                </div>
                              

                                <div className="location">
                                    <div className="loc">
                                        <div>
                                            <label>Location</label>
                                        </div>
                                        <select class="role" aria-label="Default select example">
                                            <option selected>Nigeria</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                    <div className="number">
                                        <div>
                                            <label>Phone</label>
                                        </div>
                                        <input type="text" placeholder="+234" />
                                    </div>
                                </div>
                                <div className="a1">
                                    <label>Your Role</label>
                                    <select class="role" aria-label="Default select example">
                                        <option selected>Business Owner</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                               
                                <div className="button">
                                    <button><Link to='/verify-email'>Apply to become our partener</Link></button>

                                </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Partners