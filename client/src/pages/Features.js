import '../styles/features.scss'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import features from '../data/features'
import Headers from '../component/Headers'
import countList from '../assets/Frame 422.png'
const Features = () => {
  return (
      <div>
          <Navbar/>
          <div id="Features">
              <div className="featerHolder">
                    <div className="main">
                      <Headers title="Finance made easy" subText="Discover all the features you need to run your business" />
                    </div>
           </div>
              <div className="cards container">
                  <div className="row rowCard">
                      {features.map((listData) => (
                          <div className="cardHolder" key={listData.id}>
                              <div className="imgHolder">
                                  <img src={listData.image} alt="" />
                              </div>
                              <div className="title">
                                  <h1>{listData.title}</h1>
                              </div>
                              <div className="list">
                                  <ul>
                                      {listData.details.map(experience => (
                                          <li key={experience.index}>{experience.info}</li>
                                      ))}
                                  </ul>
                              </div>
                              <div className="buttonHolder">
                                  <button>Read more</button>
                              </div>

                          </div>
                      ))}
                      
                  </div>
              </div>
              <div className="divider">
                  <div className="tryDemo">
                      <div className="row">
                          <div className="col-md-6 right">
                              <h1><span>InnerReports</span> can be used in any English Speaking Country</h1>
                          </div>

                          <div className="col-md-6 left">
                              <img src={countList} alt="" />
                              <span>Available in 54+ countries</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="qAholder">
                  <div className="faq">
                      <h1>Frequently Asked Questions</h1>

                  </div>
                  <div className="faqHolder container">
                      <div class="accordion" id="accordionPanelsStayOpenExample">
                          <div class="accordion-item">
                              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                      What is Accounting Saas
                                  </button>
                              </h2>
                              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                  <div class="accordion-body">
                                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                  </div>
                              </div>
                          </div>
                          <div class="accordion-item">
                              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                      What is Accounting Saas
                                  </button>
                              </h2>
                              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                  <div class="accordion-body">
                                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                  </div>
                              </div>
                          </div>
                          <div class="accordion-item">
                              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                      What is Accounting Saas
                                  </button>
                              </h2>
                              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                  <div class="accordion-body">
                                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                  </div>
                              </div>
                          </div>
                          <div class="accordion-item">
                              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                      What is Accounting Saas
                                  </button>
                              </h2>
                              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                  <div class="accordion-body">
                                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                  </div>
                              </div>
                          </div>
                          <div class="accordion-item">
                              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                      What is Accounting Saas
                                  </button>
                              </h2>
                              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                  <div class="accordion-body">
                                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
          </div>  
          <Footer/>
      </div>
  )
}

export default Features