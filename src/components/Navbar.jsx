import "../style/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ikins-nav">
      <NavLink className="navbar-brand" to={"/"}>
        IKINS PHARMACY
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav myNav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link myLink" to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link myLink" to={"/about"}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link myLink" to={"/services"}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link myLink" to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
