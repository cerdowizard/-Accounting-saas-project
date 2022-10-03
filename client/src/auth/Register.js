import React from "react";
import "../styles/register.scss";
import img from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Register = () => {
  const listData = [
    {
      id: "1",
      title: "Payroll",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
      image:
        "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664578415/Features_Icon_cbcl4j.png",
    },
    {
      id: "2",
      title: "Inventory",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
      image:
        "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664578467/Features_Icon_qxsqa0.png",
    },
    {
      id: "3",
      title: "Budget",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
      image:
        "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664578467/Features_Icon_qxsqa0.png",
    },
  ];
  return (
    <div id="Register">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <div className="LogoHolder">
              <img src={img} alt="" />
            </div>
            {listData.map((listDatass) => (
              <div className="contentHolder" key={listDatass.id}>
                <div className="img">
                  <img src={listDatass.image} alt="" />
                </div>
                <div className="text">
                  <h1>{listDatass.title}</h1>
                  <p>{listDatass.sub}</p>
                </div>
              </div>
            ))}
            <div className="tabNav">
              <p>Accounting Saas</p>
              <p>Accounting Saas</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="col-md-6 right">
            <div className="loginHolder">
              <h1>Create your account</h1>
              <div className="navTabs">
                <ul>
                  <li className="act">
                    <Link>1. Basic Info</Link>
                  </li>
                  <li>
                    <Link>2. Login Info</Link>
                  </li>
                  <li>
                    <Link>3. Verification</Link>
                  </li>
                </ul>
              </div>

              <div className="formHolder">
                <form>
                  <div className="mail">
                    <div className="number">
                      <div>
                        <label>First Name</label>
                      </div>
                      <input type="text" placeholder="First Name" />
                    </div>

                    <div className="number">
                      <div>
                        <label>Last Name</label>
                      </div>
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="a1">
                    <label>Your Role</label>
                    <select class="role" aria-label="Default select example">
                      <option selected>Business Owner</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="location">
                    <div className="loc">
                      <div>
                        <label>Location</label>
                    </div>
                      <select class="role" aria-label="Default select example">
                        <option selected>Nigeria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                     
                    </div>
                    <div className="number">
                      <div>
                        <label>Phone</label>
                      </div>
                      <input type="text" placeholder="+234" />
                    </div>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p>I confirm that I have read and agree to Accounting Saas Terms & conditions and Privacy Policy.</p>
                  </div>
                  <div className="button">
                    <button>
                      <Link to="/login">Log in</Link>
                    </button>
                  </div>
                  <p className="dont">
                    Already have an account?{" "}
                    <Link to="/login"> Log in.</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
