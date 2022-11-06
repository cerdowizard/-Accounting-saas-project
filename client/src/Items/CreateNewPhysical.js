import '../styles/item.scss'
import UserNavbar from '../usersdashboard/UserNavbar'
import ButtomNav from "../component/ButtomNav";
import '../styles/inputs.scss'

const CreateNewPhysical = () => {
    return (
        <div>
            <UserNavbar />
            <div id="CreateNewItem">
                <div className="">
                    <div id="AddNewCustomer">
                        <div className="container" id='FormInput'>
                            <div className="formHolderContact">
                                <div className="titleHolder m-4">
                                    <h1>Create New Item</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                        vulputate libero et velit interdum, ac aliquet odio mattis.
                                    </p>
                                </div>
                                <div className="selectItem">
                                    <div className="row">
                                        <div className="title">
                                            <h1>Choose Item Type</h1>
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="itemLeft">
                                                <input type="radio" />
                                                <h6>Physical Item</h6>
                                            </div>
                                            <h6 className='h6'>Use for goods you purchase, track as inventory, and resell.</h6>
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="itemLeft">
                                                <input type="radio" />
                                                <h6>Service Item</h6>
                                            </div>
                                            <h6 className='h6'>Use for service you charge for or purchase, like specialized labor, consulting hours, or professional fees.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3" >
                                    <div className="col-md-6 right">
                                        <div className="">
                                            <label htmlFor="">Item Name <span>*</span></label>
                                            <div className="email-input">
                                                <input type="text" placeholder='Item  ' />
                                            </div>
                                        </div>

                                        <div className="select">
                                            <label>Sub-Item</label>
                                            <select class="role" aria-label="Default select example">
                                                <option selected>Sub-Item</option>
                                                <option value="1">Nigeria</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                        <div className="select">
                                            <label>Unit of Measurement</label>
                                            <select class="role" aria-label="Default select example">
                                                <option selected>U/M set</option>
                                                <option value="1">Nigeria</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="inventoeyDetail">
                                            <input type="checkbox" />
                                            Set the Inventory Details
                                        </div>
                                        <div className="PurchaseDetails">
                                            <div className="title">
                                                <h1>Purchase Details</h1>
                                            </div>
                                            <div className=" mt-2">
                                                <label htmlFor="">Cost</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='₦0.00' />
                                                </div>
                                            </div>

                                            <div className="select mt-2">
                                                <label>Cost of Goods Sold</label>
                                                <select class="role" aria-label="Default select example">
                                                    <option selected>Cost of Goods Sold</option>
                                                    <option value="1">Nigeria</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="select">
                                                <label>Preferred Vendor</label>
                                                <select class="role" aria-label="Default select example">
                                                    <option selected>Preferred Vendor</option>
                                                    <option value="1">Nigeria</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="select mt-2">
                                                <label>Tax Code</label>
                                                <select class="role" aria-label="Default select example">
                                                    <option selected>Tax Code</option>
                                                    <option value="1">Nigeria</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="PurchaseDetails">
                                            <div className="title">
                                                <h1>Sales Details</h1>
                                            </div>
                                            <div className=" mt-2">
                                                <label htmlFor="">Sales Price</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='₦0.00' />
                                                </div>
                                            </div>

                                            <div className="select mt-2">
                                                <label>Income Account</label>
                                                <select class="role" aria-label="Default select example">
                                                    <option selected>Income Account</option>
                                                    <option value="1">Nigeria</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>


                                            <div className="select mt-2">
                                                <label>Tax Code</label>
                                                <select class="role" aria-label="Default select example">
                                                    <option selected>Tax Code</option>
                                                    <option value="1">Nigeria</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="PurchaseDetails">
                                            <div className="title">
                                                <h1>Inventory Details</h1>
                                            </div>


                                            <div className="select mt-2">
                                                <label>Asset Account</label>
                                                <select class="role" aria-label="Default select example">
                                                    <option selected>Income Account</option>
                                                    <option value="1">Nigeria</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className=" mt-2">
                                                <label htmlFor="">On Hand</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder='₦0.00' />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6 left">
                                        <div className="">
                                            <label htmlFor="">Item Number</label>
                                            <div className="email-input">
                                                <input type="text" placeholder='Enter item number' />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <label htmlFor="">Manufacturer's Part Number</label>
                                            <div className="email-input">
                                                <input type="text" placeholder="Manufacturer's Part Number" />
                                            </div>
                                        </div>


                                        <div className="Description mt-3 mb-5">
                                            <h1> Description on Purchase</h1>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>
                                        </div>

                                        <div className="Description mt-3 mb-5">
                                            <h1>Description on Sales Transactions</h1>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                       

                                        <div className="fesSection d-flex">
                                            <div className="mt-2">
                                                <label htmlFor="">Reorder Point (min)</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder="Min" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <label htmlFor="">Max</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder="Max" />
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="fesSection d-flex">
                                            <div className="mt-2">
                                                <label htmlFor="">Total Value</label>
                                                <div className="email-input">
                                                    <input type="text" placeholder="N0.00" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <label htmlFor="">As of</label>
                                                <div>
                                                    <input type="date" className='date' placeholder="Manufacturer's Part Number" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ButtomNav />
        </div>
    )
}

export default CreateNewPhysical