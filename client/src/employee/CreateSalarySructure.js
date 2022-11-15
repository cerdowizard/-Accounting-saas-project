import "../styles/inputs.scss";
import "../styles/in.scss";
import UserNavbar from "../usersdashboard/UserNavbar";
import ButtomNav from "../component/ButtomNav";
import dropArrow from '../assets/Vectors.png'
const CreateSalarySructure = () => {
    return (
        <div>
            <UserNavbar />
            <div id="Invoice">
                <div className="container">
                    <div className="Invoice-container ">
                        <div className="invoice-header">
                            <div className="left">
                                <div className="top">
                                    <h1>Create Salary Sructure</h1>
                                </div>
                            </div>
                            <div className="right">
                                <button
                                    className="button one btn"
                                    style={{
                                        backgroundColor: "#128C7E",
                                        padding: 10,
                                        color: "#fff",
                                    }}
                                >
                                    List of Salary Grade/Level
                                </button>
                            </div>
                        </div>
                        <div className="main mt-4">
                            <form id="FormInput">
                                <div className="row">
                                    <h3>Salary Details</h3>
                                    <div className="col-md-6 mt-3">
                                        <div className="">
                                            <label>Salary Grade/Level Name</label>
                                            <input
                                                type="text"
                                                placeholder="Salary Grade/Level Name"
                                            />
                                        </div>
                                        <div className="select mt-2">
                                            <label>Salary Type</label>
                                            <select class="role" aria-label="Default select example">
                                                <option selected>Flat Salary</option>
                                                <option value="1">Nigeria</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className="select mt-2">
                                            <label>Salary Frequency</label>
                                            <select class="role" aria-label="Default select example">
                                                <option selected>Monthly</option>
                                                <option value="1">Nigeria</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="row mt-4">
                                <div className="col-md-6 col-sm-12">
                                    <div
                                        className="fesTable "
                                        style={{
                                            border: "1px solid #D2D2D3",
                                            padding: 15,
                                        }}
                                    >
                                        <h3
                                            className="text-center"
                                            style={{
                                                color: "#1C1E21",
                                            }}
                                        >
                                            Earnings
                                        </h3>
                                        <div className="nav ">
                                            <img src={dropArrow} alt="" />
                                            <span>Select</span>
                                            <li>Edit</li>

                                        </div>
                                        <div id="GeneralTable">
                                            <table class="table">

                                                <thead
                                                    style={{
                                                        backgroundColor: "#273443",
                                                        color: "#fff",
                                                        padding: 20,
                                                    }}
                                                >

                                                    <tr>
                                                        <th scope="col">
                                                            <input type="checkbox" />
                                                        </th>
                                                        <th scope="col">Components in salary</th>
                                                        <th scope="col">Per Month</th>
                                                        <th scope="col">Per Annum</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>Basic Salary</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>Transport Allowance</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>Special Allowance</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="">
                                                <button
                                                    className="btn"
                                                    style={{
                                                        width: 200,
                                                        padding: 10,
                                                        border: "1px solid #128C7E",
                                                        color: "#128C7E",
                                                    }}
                                                >
                                                    + Add new earning
                                                </button>
                                            </div>
                                            <table className="table">
                                                <thead
                                                    style={{
                                                        backgroundColor: "#273443",
                                                        color: "#fff",
                                                        padding: 20,
                                                    }}
                                                ></thead>
                                                <tbody
                                                    style={{
                                                        backgroundColor: "#D2D2D3",
                                                    }}
                                                >
                                                    <tr>
                                                        <td>Gross Salary</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Deductions</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Net Salary</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div
                                        className="fesTable "
                                        style={{
                                            border: "1px solid #D2D2D3",
                                            padding: 15,
                                        }}
                                    >
                                        <h3
                                            className="text-center"
                                            style={{
                                                color: "#1C1E21",
                                            }}
                                        >
                                            Deductions
                                        </h3>
                                        <div className="nav ">
                                            <img src={dropArrow} alt="" />
                                            <span>Select</span>
                                            <li>Edit</li>

                                        </div>
                                        <div id="GeneralTable">
                                            <table class="table">

                                                <thead
                                                    style={{
                                                        backgroundColor: "#273443",
                                                        color: "#fff",
                                                        padding: 20,
                                                    }}
                                                >

                                                    <tr>
                                                      
                                                        <th scope="col">Staturoty Deduction</th>
                                                        <th scope="col">Per Month</th>
                                                        <th scope="col">Per Annum</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                       
                                                        <td>PAYE</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td>Pension</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Housing</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="">
                                                <button
                                                    className="btn"
                                                    style={{
                                                        width: 200,
                                                        padding: 10,
                                                        border: "1px solid #F54765",
                                                        color: "#F54765",
                                                    }}
                                                >
                                                    + Add new deduction
                                                </button>
                                            </div>
                                            <table className="table">
                                                <thead
                                                    style={{
                                                        backgroundColor: "#273443",
                                                        color: "#fff",
                                                        padding: 20,
                                                    }}
                                                ></thead>
                                                <tbody
                                                    style={{
                                                        backgroundColor: "#D2D2D3",
                                                    }}
                                                >
                                                    <tr>
                                                        <td>Total deductions</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                   
                                                </tbody>
                                            </table>
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
    );
};
export default CreateSalarySructure;
