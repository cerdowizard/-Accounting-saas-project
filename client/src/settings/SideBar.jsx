import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
    const [isActive, SetIsActive] = useState(false)
    function Click() {
        SetIsActive(!isActive);
    }
    const [dataTabs, setDataTabs] = useState([
        {
            id: 1,
            tabTitle: "Title 1",
            tabClass: "myCustomClass",
            tabClicked: false
        },
        {
            id: 2,
            tabTitle: "Title 2",
            tabClass: "myCustomClass",
            tabClicked: false
        }
    ]);
    return (
    
        <div id='SideBar'>
            
          <ul>
                <Link to='' onClick={Click} ><li className={isActive ? "act" : ""}>Accounting</li></Link>
              
                <Link to='/BillsSettings' onClick={Click} ><li className={isActive ? "act" : ""}>Bill</li></Link>
              
              <Link to=''> <li>General</li></Link>
             
              <Link to=''><li>Items & Inventory</li></Link>
              
              <Link to=''><li>Payments</li></Link>
              
              <Link to=''><li>Payroll & Employees</li></Link>
              
              <Link to=''><li>Reports & Graphs</li></Link>
              
              <Link to=''><li>Sales & Customers</li></Link>
              
              <Link to=''> <li>Sales Tax</li></Link>
             
              <Link to=''><li>Send Forms</li></Link>
              
          </ul>
      </div>
  )
}

export default SideBar