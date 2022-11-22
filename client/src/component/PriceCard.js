
import '../styles/price.scss'
import checkBox from '../assets/Group.png'
const PriceCard = () => {
    const listData = [
        {
            'id': "1",
            'title': "Basic",
            'sub': "Monthly",
            'price': 30,
            'sybText': "Perfect for small business owners.",
            'userNumber': "1 user",
            'bussy': "5 built-in business report",
            'email': "Email/ print reports, export reports -excel, microsoft word",
            'entry': "Journal entry",
            'config': "Configure with local sales tax rates",
            img: ""
        },
        {
            'id': "2",
            'title': "Medium",
            'sub': "Monthly",
            'price': 60,
            'sybText': "Includes all features in basic subscription",
            'userNumber': "5 users",
            'bussy': "10 built-in business report",
            'email': "Control what users can access",
            'entry': "Payroll - (Gross Salary, Loan, Statutory deductions e.t.c)",
            'config': "Invite other users or experts to access your data",
            img: ""
        },
        {
            'id': "3",
            'title': "Advance",
            'sub': "Monthly",
            'price': 120,
            'sybText': "Includes both basic and advance features",
            'userNumber': "15 user",
            'bussy': "30 built-in business report",
            'email': "Company setup internationalized (multi-currency)",
            'entry': "Track Inventory",
            'config': "Track sales and profitability for each of your locations",
            img: ""
        },
        {
            'id': "4",
            'title': "Tax Module",
            'sub': "Monthly",
            'price': '***',
            'sybText': "Includes both basic and advance features",
            'userNumber': "15 user",
            'bussy': "30 built-in business report",
            'email': "Company setup internationalized (multi-currency)",
            'entry': "Track Inventory",
            'config': "Track sales and profitability for each of your locations",
            img: ""
        },
    ]
  return (
      <div id='PriceCard' >
          <div className="priceCardHolder  container ">
              <div className="row">
                  {listData.map((listDatas) => (
                      <div className="col-md-3 mt-4 mb-4">
                          <div className="priceIng" key={listDatas.id}>

                              <div className="top">
                                  <h3>{listDatas.title}</h3>
                                  <span className='pricep'>{listDatas.title}</span>
                                  <h2>${listDatas.price}</h2>
                              </div>
                              <div className="middle">
                                  <p>{listDatas.sybText}</p>
                                  <div className="pricebuttonHolder">
                                      <button>
                                          Buy now
                                      </button>
                                    
                                  </div>
                              </div>
                              <div className="bottom">
                                  <ul>
                                      <li>
                                          <img src={checkBox} />
                                          {listDatas.userNumber}
                                      </li>
                                      <li>
                                          <img src={checkBox} />
                                          {listDatas.bussy}
                                      </li>
                                      <li>
                                          <img src={checkBox} />
                                          {listDatas.email}
                                      </li>
                                      <li>
                                          <img src={checkBox} />
                                          {listDatas.entry}
                                      </li>
                                      <li>
                                          <img src={checkBox} />
                                          {listDatas.config}
                                      </li>
                                  </ul>
                              </div>

                          </div>
                      </div>

                  ))}</div>
             
          </div>
      </div>
  )
}

export default PriceCard