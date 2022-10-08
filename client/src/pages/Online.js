import '../styles/online.scss'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Headers from '../component/Headers'
import img from "../assets/Rectangle 22.png"
import checkBox from '../assets/Group.png'
import { Link } from 'react-router-dom'
const Online = () => {
    return (
        <div>
            <Navbar />
            <div id="Online">
                <Headers title="Online Accountant" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum." />
                <div className="online-contact-divider container">
                    <div className="row">
                        <div className="col-md-6 left">
                            <div className="imgHolderOnline">
                                <img src={img} alt="" />
                            </div>
                            <div className="servicesHolder">
                                <h1>Services provided to include:</h1>
                                <div className="listHolder">
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span> All-Inclusive fixed fee service</span>
                                    </div>
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span>Accounts production for sole traders, partnerships and LTD companies</span>
                                    </div>
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span>Companies to include VAT preparation through making Tax Digital compliant software, payroll and other returns</span>
                                    </div>
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span> All-Inclusive fixed fee service</span>
                                    </div>
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span>Self- Assessment taxation for individuals and partners</span>
                                    </div>
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span>Corporate Taxation Returns including IXBRL digital tagging</span>
                                    </div>
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span>Provision of software, training and book keeping as requires</span>
                                    </div>
                                    <div className="box">
                                        <img src={checkBox} />
                                        <span>Ongoing support</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 righFormHolder">
                            <div className="col-col-md-6 right">
                                <h1>Are you looking for an online accountant?</h1>
                                <div className="formHolder">
                                    <form>
                                        <div className="mail">
                                            <label>Name</label>
                                            <input type="text" placeholder='Enter your full name' />
                                        </div>
                                       
                                        <div className="pass">
                                            <label>Email</label>
                                            <input type="text" placeholder='Enter your email address' />
                                        </div>
                                        <div className="pass">
                                            <label>Phone</label>
                                            <input type="text" placeholder='+234' />
                                        </div>
                                        <div className="a1">
                                            <label>Required Service</label>
                                            <select class="role" aria-label="Default select example">
                                                <option selected>Accountants production</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="button">
                                            <button><Link to='/verify-email'>Find an accountant</Link></button>

                                        </div>
                                      
                                    </form>
                                </div>
                            </div>
                     </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Online