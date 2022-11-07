import React from 'react'
import Homes from './pages/Homes'
import './styles/Gobal-style.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import ForgotPassword from './auth/ForgotPassword';
import VerifyEmail from './auth/VerifyEmail';
import Register from './auth/Register';
import Otp from './auth/Otp';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import ClientsSupport from './pages/ClientsSupport';
import Online from './pages/Online';
import UserHomePage from './usersdashboard/UserHomePage';
import Settings from './usersdashboard/Settings';
import AddNewCustomer from './usersdashboard/AddNewCustomer';
import Invoice from './usersdashboard/Invoice';
import CustomersDashBoard from "./usersdashboard/CustomersDashBoard";
import ListUsers from "./usersdashboard/ListUsers";
import CustomersSales from "./usersdashboard/CustomersSales";
import CustomerCategories from "./usersdashboard/CustomerCategories";
import CustomerCredit from "./usersdashboard/CustomerCredit";
import CustomerReceipt from "./usersdashboard/CustomerReceipt";
import ListSales from "./usersdashboard/ListSales";
import CustomerWrite from "./usersdashboard/CustomerWrite";
import CustomerInvoices from "./usersdashboard/CustomerInvoices";
import ProcessReceipt from './usersdashboard/ProcessReceipt';
import CustomerWriteOffs from "./usersdashboard/CustomerWriteOffs";
import NewCustomerCategory from './usersdashboard/NewCustomerCategory';
import RecurringInvoice from "./usersdashboard/RecurringInvoice";
import VendorDashboard from "./vendors/VendorDashboard";
import CreateNewVendor from './vendors/CreateNewVendor';
import BankDetails from './vendors/BankDetails';
import Address from './vendors/Address';
import AdditionalContact from "./vendors/AdditionalContact";
import Payment from './vendors/Payment';
import Notes from './vendors/Notes';
import Upload from './vendors/Upload';
import VendorAdjustments from "./vendors/VendorAdjustments";
import ListVendors from "./vendors/ListVendors";
import VendorCategories from "./vendors/VendorCategories";
import VendorPurchaseOrders from "./vendors/VendorPurchaseOrders";
import VendorInvoices from './vendors/VendorInvoices';
import VendorReturns from './vendors/VendorReturns';
import VendorPayment from './vendors/VendorPayment';
import ProcessPayment from './vendors/ProcessPayment';
import AdjustVendorOpeningBalances from './vendors/AdjustVendorOpeningBalances';
import NewVendorCategory from './vendors/NewVendorCategory';
import ProcessVendorInvoice from './vendors/ProcessVendorInvoice';
import ProcessVendorReturn from './vendors/ProcessVendorReturn';
import ProcessVendorAdjustment from "./vendors/ProcessVendorAdjustment";
import ItemDashboard from './Items/ItemDashboard';
import CreateNewItem from './Items/CreateNewItem';
import CreateNewPhysical from './Items/CreateNewPhysical';
import CreateItemUnchecked from './Items/CreateItemUnchecked ';
import CreateItemChecked from "./Items/CreateItemChecked";
import ItemDashboardCat from "./Items/ItemDashboardCat";
import ItemDashboarList from './Items/ItemDashboarList';
import ListItemBundles from './Items/ListItemBundles';
import AdjustItemOpeningBalances from "./Items/AdjustItemOpeningBalances";
import ItemBundle from './Items/ItemBundle';
import CreateInventoryAdjustment from './Items/CreateInventoryAdjustment';
import ItemReceipt from './Items/ItemReceipt';
import ListOfAccounr from "./chart/ListOfAccount";
import ListOfAccount from './chart/ListOfAccount';
import CreateAnAccount from './chart/CreateAnAccount';
import ChartOfAccountExpenses from './chart/ChartOfAccountExpenses';
import MakeJournalEntries from "./chart/MakeJournalEntries";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/post' element={<SinglePage />} />
          <Route path='/contact' element={<ContactUsPage />} />
         */}
          <Route path='/MakeJournalEntries' element={<MakeJournalEntries />} />
          <Route path='/ChartOfAccountExpenses' element={<ChartOfAccountExpenses />} />
          <Route path='/CreateAnAccount' element={<CreateAnAccount />} />
          <Route path='/ListOfAccount' element={<ListOfAccount />} />
          <Route path='/ItemReceipt' element={<ItemReceipt />} />
          <Route path='/CreateInventoryAdjustment' element={<CreateInventoryAdjustment />} />
          <Route path='/ItemBundle' element={<ItemBundle />} />
          <Route path='/AdjustItemOpeningBalances' element={<AdjustItemOpeningBalances />} />
          <Route path='/ListItemBundles' element={<ListItemBundles />} />
          <Route path='/ItemDashboarList' element={< ItemDashboarList />} />
          <Route path='/ItemDashboardCat' element={< ItemDashboardCat />} />
          <Route path='/CreateItemChecked' element={< CreateItemChecked />} />
          <Route path='/CreateItemUnchecked' element={< CreateItemUnchecked />} />
          <Route path='/CreateNewPhysical' element={< CreateNewPhysical />} />
          <Route path='/CreateNewItem' element={< CreateNewItem />} />
          <Route path='/ItemDashboard' element={< ItemDashboard />} />
          <Route path='/ProcessVendorAdjustment' element={< ProcessVendorAdjustment />} />
          <Route path='/ProcessVendorReturn' element={< ProcessVendorReturn />} />
          <Route path='/ProcessVendorInvoice' element={< ProcessVendorInvoice />} />
          <Route path='/NewVendorCategory' element={< NewVendorCategory />} />
          <Route path='/AdjustVendorOpeningBalances' element={< AdjustVendorOpeningBalances />} />
          <Route path='/ProcessPayment' element={< ProcessPayment />} />
          <Route path='/VendorPayment' element={< VendorPayment />} />
          <Route path='/VendorReturns' element={< VendorReturns />} />
          <Route path='/VendorInvoices' element={< VendorInvoices />} />
          <Route path='/VendorPurchaseOrders' element={< VendorPurchaseOrders />} />
          <Route path='/VendorCategories' element={< VendorCategories />} />
          <Route path='/ListVendors' element={< ListVendors />} />
          <Route path='/VendorAdjustments' element={< VendorAdjustments />} />
          <Route path='/Upload' element={< Upload />} />
          <Route path='/Note' element={< Notes />} />
          <Route path='/Payment' element={< Payment />} />
          <Route path='/AdditionalContact' element={< AdditionalContact />} />
          <Route path='/Address' element={< Address />} />
          <Route path='/BankDetails' element={< BankDetails />} />
          <Route path='/CreateNewVendor' element={<CreateNewVendor />} />
          <Route path='/VendorDashboard' element={<VendorDashboard />} />
          <Route path='/RecurringInvoice' element={<RecurringInvoice />} />
          <Route path='/NewCustomerCategory' element={<NewCustomerCategory />} />
          <Route path='/CustomerWriteOffs' element={<CustomerWriteOffs />} />
          <Route path='/ProcessReceipt' element={<ProcessReceipt />} />
          <Route path='/CustomerInvoices' element={<CustomerInvoices />} />
          <Route path='/CustomerWrite' element={<CustomerWrite />} />
          <Route path='/ListSales' element={<ListSales />} />
          <Route path='/CustomerReceipt' element={<CustomerReceipt />} />
          <Route path='/CustomerCredit' element={<CustomerCredit />} />
          <Route path='/CustomerCategories' element={<CustomerCategories />} />
          <Route path='/sales' element={<CustomersSales />} />
          <Route path='/list' element={<ListUsers />} />
          <Route path='/csdasboard' element={<CustomersDashBoard />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/add-customer' element={<AddNewCustomer />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/user-dashboard' element={<UserHomePage />} />
          <Route path='/online' element={<Online />} />
          <Route path='/support' element={<ClientsSupport />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/price' element={<Pricing />} />
          <Route path='/features' element={<Features />} />
          <Route path="/token" element={<Otp />} />
          <Route path='/reg' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Homes />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App