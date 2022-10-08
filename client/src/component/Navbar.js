import "../styles/nav.scss";
import { Link } from "react-router-dom";
import img from "../assets/Logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand">
          <div className="LogoHolder">
            <img src={img} alt="" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/features" className="nav-link">
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/price" className="nav-link">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/partners" className="nav-link">
                Partners
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/support" className="nav-link">
                Client’s support
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Online Accountant
              </Link>
            </li>
          </ul>

          <div className="d-flex last">
           
            <Link to="/login" className="nav-link">
              Log In
            </Link>
            <button className="createAccount">
              <Link to="/reg">Create an account</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
