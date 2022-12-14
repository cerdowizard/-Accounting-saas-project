import '../styles/userNavbar.scss'
import img from "../assets/Logo.png";
import settings from '../assets/fluent_settings-24-regular.png'
import ques from '../assets/fluent_question-circle-24-regular.png'
import phone from '../assets/fluent_call-24-regular.png'
import userprofile from '../assets/Icon.png'
import user from '../assets/fluent_person-support-24-regular.png'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
const UserNavbar = () => {
    return (
        <div id='UserNavbar' className='sticky-top'>
            <div className="fsLayer">
                <div className="left-user-holder">
                    <img src={img} alt="" />
                    <span>InnerReports</span>
                    <span className='line'></span>
                    <div className="search-box">
                        <SearchIcon className='icon' />
                        <input type="text" placeholder='General search' />
                    </div>
                </div>
                <div className="rightPlaceholder">
                    <span class="dropdown">
                        <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            CompanyA LTD
                        </span>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </span>
                    <Link to='/AccountingSettings'><img src={settings} alt="" /></Link>
                    
                    <img src={phone} alt="" />
                    <img src={ques} alt="" />
                    <img src={userprofile} alt="" />

                    <span class="dropdown">
                        <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Leslie Alexander
                        </span>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="secondLayer">
                <nav>
                    <div className="left">
                     
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Customer
                            </a>
                            <ul class="dropdown-menu p-2">
                                <li>
                                    <Link class="dropdown-item" to='/csdasboard'>Customer Dashboard</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/add-customer'>Add New Customer</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/sales'>Customer Sales Order</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/list'>List of Customers</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CustomerSalesOrder'>Customer Sales Order</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CustomerCategories'>Customer Categories</Link>
                                </li>


                                <li>
                                    <Link class="dropdown-item" to='/CustomerCredit'>Customer Credit Notes</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CustomerReceipt'>Customer Receipt</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ListSales'>List of Sales Reps</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/Process Receipte'>Process Receipt</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/CustomerWrite'>Customer Write-Offs</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/invoice'>Customer Invoices</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/NewCustomerCategory'>New Customer Category</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/RecurringInvoice'>Recurring Invoice</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Vendors
                            </a>
                            <ul class="dropdown-menu p-2">
                                <li>
                                    <Link class="dropdown-item" to='/VendorDashboard'>Vendor Dashboard</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/CreateNewVendor'>Create New Vendor
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/VendorAdjustments'>Vendor Adjustments</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ListVendors'>List of Vendors</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CustomerSalesOrder'>Customer Sales Order</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/VendorCategories'>Vendor Categories</Link>
                                </li>


                                <li>
                                    <Link class="dropdown-item" to='/VendorPurchaseOrders'>Vendor Purchase Orders</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/VendorInvoices'>Vendor Invoices</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/VendorReturns'>Vendor Returns</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/VendorPayment'>Vendor Payment</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/ProcessPayment'>Process Payment</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/AdjustVendorOpeningBalances'>Adjust Vendor Opening Balances</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/AdjustVendorOpeningBalances'>Adjust Vendor Opening Balances</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/NewVendorCategory'>New Vendor Category</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ProcessVendorInvoice'>Process Vendor Invoice</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ProcessVendorReturn'>Process Vendor Return</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ProcessVendorAdjustment'>Process Vendor Adjustment</Link>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Items
                            </a>
                            <ul class="dropdown-menu p-2">
                                <li>
                                    <Link class="dropdown-item" to='/ItemDashboard'>Item Dashboard</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/CreateNewItem'>Create New Item
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CreateItemUnchecked'>Create Item Unchecked
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CreateItemChecked'>Create Item Checked</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ItemDashboardCat'>Item Categories</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ItemDashboarList'>List of Item</Link>
                                </li>


                                <li>
                                    <Link class="dropdown-item" to='/ListItemBundles'>List of Item Bundles Dashboard</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/AdjustItemOpeningBalances'>List of Item Bundles</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ItemBundle'>Item Bundle</Link>
                                </li>

                               
                                <li>
                                    <Link class="dropdown-item" to='/CreateInventoryAdjustment'>Create Inventory Adjustment</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ItemReceipt'>Item Receipt</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ListOfAccount'>List ofAccounts</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CreateAnAccount'>Create an Account</Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Chart of accounts
                            </a>
                            <ul class="dropdown-menu p-2">
                                <li>
                                    <Link class="dropdown-item" to='/CreateAnAccount'>Create an Account</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/MakeJournalEntries'>Make Journal Entries
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/TrialBalance'>Trial Balance
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ListOfAccount'>List Of Account</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ChartOfAccountExpenses'>Chart Of Account Expenses</Link>
                                </li>


                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Banking 
                            </a>
                            <ul class="dropdown-menu p-2">
                                <li>
                                    <Link class="dropdown-item" to='/CreatePaymentVoucher'>Create Payment Voucher</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/MakeDeposit'>Make Deposit
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/TransferFunds'>Transfer Funds
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CreateBatchEntryBills'>Create Batch Entry - Bills</Link>
                                </li>



                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Employee
                            </a>
                            <ul class="dropdown-menu p-2">
                                <li>
                                    <Link class="dropdown-item" to='/CreateNewEmployee'>Create New Employee</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/ListOfEmployee'>List of Employees
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/EmployeeTimeSheet'>Employee/Job Time Sheet
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/CreateSalarySructure'>Create Salary Sructure</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/CreateSructure'>Create Sructure</Link>
                                </li>


                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                HR/Payroll 
                            </a>
                            <ul class="dropdown-menu">
                               
                               <li>
                                    <Link class="dropdown-item" to='/HR/PAYROLL'>HR/Payroll Dashboard</Link>
                                </li>
                               
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Finanicial
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link class="dropdown-item" to='/BudgetPage'>Budget Page</Link>
                                </li>
                               
                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Reports
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link class="dropdown-item" to='/RealizedLosses'>Realized Gains & Losses</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/Unrealized'>Unrealized Gains & Losses</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/ExpensesSummary'>Expenses by Vendor Summary</Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to='/IncomeCustomerDetail'>Income by Customer Detail</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/IncomeCustomerSummary'>Income by Customer Summary</Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to='/ProfitLossComparison'>Profit & Loss YTD Comparison</Link>
                                </li>
                                

                                
                                
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>


                    </div>
                    <div className="right">
                        <img src={user} alt="" />
                        <span>Support</span>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default UserNavbar