import '../styles/inputs.scss'
import '../styles/in.scss'
import UserNavbar from '../usersdashboard/UserNavbar';
import ButtomNav from '../component/ButtomNav';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const ItemBundle = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice" className='ProcessReceipt'>
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Item Bundle</h1>
                                </div>

                            </div>
                            <div className="right">
                                <div className="top">
                                    <button>List of Item Bundle</button>
                                </div>

                            </div>
                        </div>
                        <div className="note">
                            <span className='icircle mt-1'>i</span>
                            <span>Item Bundles allow you to group multiple items into a single code. When you invoice, you enter the Item Type Bundle and the Item Bundle Code and the system brings each individual item into the invoice.
                            </span>
                        </div>
                        <div className="main">

                            <form action="" id='FormInput'>
                                <div className="container">
                                    <div className="row mt-5 Item">
                                        <h1>Item Bundle Details</h1>
                                        <div className="col-md-6">
                                            <div className="name mt-2">

                                                <div className="select">
                                                    <label htmlFor="">Item Name*</label>
                                                    <select
                                                        class="role"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected>Select vendor</option>
                                                        <option value="1">Nigeria</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="btnHolder">
                                                    <button>Add new vendor</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="Message ">
                                                <div className="title">
                                                    <div className="titleHolder mb-2 d-flex justify-content-between">
                                                        <span>Item Bundle Description</span>

                                                    </div>
                                                    <textarea className='w-100  btn-outline-info' name="" id="" placeholder='This will show up on the invoice'></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>

                            <div className="tables">
                                <div id='Intable'>
                                    <table className="table mt-5">
                                        <thead className='heading'>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Item Code</th>
                                                <th scope="col">Item Description</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th scope="row"></th>
                                                <td></td>
                                                <td></td>
                                                <td>0</td>
                                                <td><DeleteForeverIcon style={{color:"red"}}/></td>
                                            </tr>

                                            <tr>
                                                <th scope="row"></th>
                                                <td></td>
                                                <td></td>
                                                <td>0</td>
                                                <td><DeleteForeverIcon style={{ color: "red" }} /></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>

                                <div className="buttom mt-5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="button">
                                                    <button type="button" class="btn create" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add new line</button>

                                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <form>
                                                                        <div class="mb-3">
                                                                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                                                                            <input type="text" class="form-control" id="recipient-name" />
                                                                        </div>
                                                                        <div class="mb-3">
                                                                            <label for="message-text" class="col-form-label">Message:</label>
                                                                            <textarea class="form-control" id="message-text"></textarea>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" class="btn btn-primary">Send message</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className='btn delete'>Clear all lines</button>
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

export default ItemBundle