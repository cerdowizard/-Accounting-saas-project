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
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/post' element={<SinglePage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          */}
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
          <Route path='/support' element={<ClientsSupport />}/>
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