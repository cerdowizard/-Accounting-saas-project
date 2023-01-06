
import ButtomNav from "../component/ButtomNav";
import UserNavbar from "../usersdashboard/UserNavbar";
import { useState } from "react";
import { Link } from "react-router-dom";
const CreateRevenueStream = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isBillabled, setIsBillabled] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [isRecurringCharges, setRecurringCharges] = useState(false);
  function handleClick() {
    setIsVisible(!isVisible);
  }
  function clicked() {
    setIsChecked(!isChecked);
  }
  function Billable() {
    setIsBillabled(!isBillabled);
  }
  function Recurring() {
    setIsRecurring(!isRecurring)
  }
  function RecurringCharges() {
    setRecurringCharges(!isRecurringCharges)
  }
  return (
    <div>
      <UserNavbar />
      <div id="Invoice">
        <div className="container">
          <div className="Invoice-container ">
            <div className="invoice-header">
              <div className="left">
                <div className="top">
                  <h1>Create Revenue Stream</h1>
                </div>

              </div>
              <div className="right">
                <div className="top">
                  <Link to='/BudgetPage'>
                    <button>Revenue Dashboard</button>
                  </Link>
                  
                </div>

              </div>
            </div>
            <div className="main" style={{
              width: '95%',
            }}>
              <form action="" id='FormInput'>
                <div className="">
                  <div className="invoice-deatil mt-3">
                    <div className="row">
                      <h1>Revenue Details</h1>
                      <div className="col-md-6">
                        <div className="fs">
                          <label htmlFor="">Revenue Name</label>
                          <div className="email-input">
                            <input type="text" placeholder='Enter name or description' />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mt-4">
                        <div className="fs" style={{
                          width: '100%',
                        }}>
                          <label htmlFor="">Revenue Type</label>
                          <div className="d-flex">
                            <input type="checkbox" placeholder='Enter name or description' onChange={handleClick} style={{
                              width: 20
                            }} />
                            <span>Unit Sales</span>

                            <input type="checkbox" onChange={Billable} placeholder='Enter name or description' style={{
                              width: 25
                            }} />
                            <span>Billable Hours</span>

                            <input type="checkbox" onChange={Recurring} placeholder='Enter name or description' style={{
                              width: 25
                            }} />
                            <span>Recurring Charges</span>
                            <input type="checkbox" onClick={RecurringCharges} placeholder='Enter name or description' style={{
                              width: 25
                            }} />
                            <span>Revenue Only</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isVisible && <div style={{ display: 'block' }}>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <h1>Unit Sales</h1>
                        <h6>Number of Units</h6>
                        <div className="fs" style={{
                          width: '100%',
                        }}>

                          <div className="d-flex">
                            <input type="radio" placeholder='Enter name or description' style={{
                              width: 20
                            }} />
                            <span>Constant amount</span>
                            <input type="checkbox" onClick={clicked} placeholder='Enter name or description' style={{
                              width: 25
                            }} />
                            <span>Varying amounts over time</span>
                          </div>
                          <div className="d-flex gap-3 mt-2" style={{
                            alignItems: 'center'
                          }}>
                            <input type="text" />
                            Per
                            <div className="select mt-2">
                              <select
                                class="role"
                                aria-label="Default select example"
                              >
                                <option selected>Monthly</option>
                                <option value="1">Nigeria</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <h6>Price</h6>
                          <div className="fs" style={{
                            width: '100%',
                          }}>

                            <div className="d-flex">
                              <input type="radio" placeholder='Enter name or description' style={{
                                width: 20
                              }} />
                              <span>Constant amount</span>
                              <input type="checkbox" placeholder='Enter name or description' style={{
                                width: 25
                              }} />
                              <span>Varying amounts over time</span>


                            </div>
                            <div className="d-flex gap-3 mt-2">
                              <input type="text" placeholder="$" />

                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mt-5">
                        <div className="fs">
                          <label htmlFor="">Revenue Date</label>
                          <div className="email-input">
                            <input type="date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }

                  {/* Billable Hours */}

                  {isBillabled && <div style={{ display: 'block' }}>

                    <div className="row mt-2">
                      <div className="col-md-6">
                        <h1>Billable Hours</h1>
                        <h6>Number of Units</h6>
                        <div className="fs" style={{
                          width: '100%',
                        }}>

                          <div className="d-flex">
                            <input type="radio" placeholder='Enter name or description' style={{
                              width: 20
                            }} />
                            <span>Constant amount</span>
                            <input type="checkbox" onClick={clicked} placeholder='Enter name or description' style={{
                              width: 25
                            }} />
                            <span>Varying amounts over time</span>
                          </div>
                          <div className="d-flex gap-3 mt-2" style={{
                            alignItems: 'center'
                          }}>
                            <input type="text" />
                            Per
                            <div className="select mt-2">
                              <select
                                class="role"
                                aria-label="Default select example"
                              >
                                <option selected>Monthly</option>
                                <option value="1">Nigeria</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <h6>Price</h6>
                          <div className="fs" style={{
                            width: '100%',
                          }}>

                            <div className="d-flex">
                              <input type="radio" placeholder='Enter name or description' style={{
                                width: 20
                              }} />
                              <span>Constant amount</span>
                              <input type="checkbox" placeholder='Enter name or description' style={{
                                width: 25
                              }} />
                              <span>Varying amounts over time</span>


                            </div>
                            <div className="d-flex gap-3 mt-2">
                              <input type="text" placeholder="$" />

                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mt-5">
                        <div className="fs">
                          <label htmlFor="">Revenue Date</label>
                          <div className="email-input">
                            <input type="date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }

                  {/* Recurring Charges */}
                  {isRecurring && <div style={{ display: 'block' }} className="Recurring">
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <h1>Recurring Charges</h1>
                        <h6>Number of Customers</h6>
                        <div className="fs" style={{
                          width: '100%',
                        }}>

                          <div className="d-flex">
                            <input type="radio" placeholder='Enter name or description' style={{
                              width: 20
                            }} />
                            <span>Constant amount</span>
                            <input type="checkbox" onClick={clicked} placeholder='Enter name or description' style={{
                              width: 25
                            }} />
                            <span>Varying amounts over time</span>
                          </div>
                          <div className="d-flex gap-3 mt-2" style={{
                            alignItems: 'center'
                          }}>

                            Per
                            <div className="select mt-2 w-50">
                              <select
                                class="role"
                                aria-label="Default select example"
                              >
                                <option selected>Monthly</option>
                                <option value="1">Nigeria</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="fs" style={{
                          width: '100%',
                        }}>
                          <h6>Up-Front Fee</h6>
                          <div className="d-flex">
                            <input type="radio" placeholder='Enter name or description' style={{
                              width: 20
                            }} />
                            <span>No Fees</span>

                            <input type="radio" placeholder='Enter name or description' style={{
                              width: 20
                            }} />
                            <span>Constant amount</span>


                            <input type="checkbox" placeholder='Enter name or description' style={{
                              width: 25
                            }} />
                            <span>Varying amounts over time</span>
                          </div>
                          <div className="d-flex gap-3 mt-2" style={{
                            alignItems: 'center'
                          }}>
                            <input type="text" className="w-50" placeholder="$" />

                          </div>
                        </div>

                        <div className="mt-2">
                          <h6>Recurring Charge Price</h6>
                          <div className="fs" style={{
                            width: '100%',
                          }}>

                            <div className="d-flex">
                              <input type="radio" placeholder='Enter name or description' style={{
                                width: 20
                              }} />
                              <span>Constant amount</span>
                              <input type="checkbox" placeholder='Enter name or description' style={{
                                width: 25
                              }} />
                              <span>Varying amounts over time</span>


                            </div>
                            <div className="d-flex gap-3 mt-2">
                              <input type="text" className="w-50" placeholder="$" />

                            </div>


                          </div>
                        </div>

                        <div className="mt-2">
                          <h6>Churn Rate</h6>
                          <div className="fs" style={{
                            width: '100%',
                          }}>

                            <div className="d-flex">
                              <input type="radio" placeholder='Enter name or description' style={{
                                width: 20
                              }} />
                              <span>Constant amount</span>
                              <input type="checkbox" placeholder='Enter name or description' style={{
                                width: 25
                              }} />
                              <span>Varying amounts over time</span>


                            </div>
                            <div className="d-flex gap-3 mt-2">
                              <input type="text" className="w-50" placeholder="%" />

                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mt-5">
                        <div className="fs">
                          <label htmlFor="">Revenue Date</label>
                          <div className="email-input">
                            <input type="date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }

                  {/* Revenue Only */}
                  {isRecurringCharges && <div style={{ display: 'block' }} className="row mt-2">
                    <div className="col-md-6">
                      <h1>Revenue Only</h1>
                      <h6>Revenue</h6>
                      <div className="fs" style={{
                        width: '100%',
                      }}>

                        <div className="d-flex">
                          <input type="radio" placeholder='Enter name or description' style={{
                            width: 20
                          }} />
                          <span>Constant amount</span>
                          <input type="checkbox" onClick={clicked} placeholder='Enter name or description' style={{
                            width: 25
                          }} />
                          <span>Varying amounts over time</span>
                        </div>
                        <div className="d-flex gap-3 mt-2" style={{
                          alignItems: 'center'
                        }}>
                          <input type="text" />
                          Per
                          <div className="select mt-2">
                            <select
                              class="role"
                              aria-label="Default select example"
                            >
                              <option selected>Monthly</option>
                              <option value="1">Nigeria</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <div className="fs">
                        <label htmlFor="">Revenue Date</label>
                        <div className="email-input">
                          <input type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                

                  {isChecked && <div style={{ display: 'block' }}>
                    <div className="">
                      <div className="want">
                        <div className="d-flex one">
                          <h5>2022</h5>
                          <p>Click on the chart or enter values below to set the amounts you want <span>Learn More.</span></p>
                        </div>
                        <div className="two">
                          <input type="text" name="" id="" placeholder="0%" style={{
                            width: '25%'
                          }} />
                          <button style={{
                            border: "none",
                            background: "#128C7E",
                            color: "#fff",
                          }}>Apply</button>
                        </div>
                      </div>

                      <div className="">
                        <div className="lines">
                          <span></span>
                          <p>100</p>
                        </div>

                        <div className="lines">
                          <span></span>
                          <p>100</p>
                        </div>

                        <div className="lines">
                          <span></span>
                          <p>100</p>
                        </div>

                        <div className="lines">
                          <span></span>
                          <p>100</p>
                        </div>

                        <div className="lines">
                          <span></span>
                          <p>100</p>
                        </div>
                      </div>
                      <div className="yearBox">
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                      </div>
                      <div className="yearBox mt-1">
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                        <div className="yer">
                          <p>Jan ‘22</p>
                          <div className="box"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }

                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
      <ButtomNav />
    </div>
  )
}

export default CreateRevenueStream