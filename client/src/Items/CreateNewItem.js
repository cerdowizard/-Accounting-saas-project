import '../styles/item.scss'
import UserNavbar from '../usersdashboard/UserNavbar'

const CreateNewItem = () => {
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
                                                <p>Physical Item
                                                    <br />
                                                    Use for goods you purchase, track as inventory, and resell.
                                                </p>
                                                
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5" >
                                    <div className="col-md-6 right">
                                        <div className="">
                                            <label htmlFor="">Item Name <span>*</span></label>
                                            <div className="email-input">
                                                <input type="text" placeholder='Item Name' />
                                            </div>
                                        </div>

                                        <div className="select">
                                            <label>Category</label>
                                            <select class="role" aria-label="Default select example">
                                                <option selected>Select category</option>
                                                <option value="1">Nigeria</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="btnHolder">
                                            <button>Add new category</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 left">
                                        <div className="">
                                            <label htmlFor="">VAT reference</label>
                                            <div className="email-input">
                                                <input type="text" placeholder='Enter VAT reference' />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <label htmlFor="">Credit limit</label>
                                            <div className="email-input">
                                                <input type="text" placeholder='Enter VAT reference' />
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
    )
}

export default CreateNewItem