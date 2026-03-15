import { NavLink } from "react-router-dom";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid ">
      <div className="row p-5">
        <div className="col-sm-12 col-md-4 ">
          <h1>Ikins Pharmacy</h1>
          <p style={{ color: "#fff", fontSize: "0.9rem" }}>
            Customized healthcare for everyone infants, seniors, pets, and your
            entire household Committed to delivering exceptional attention and
            personalized solutions to meet individual health requirements.
          </p>
        </div>
        <div className="col-sm-12 col-md-4 text-center footerLinks pt-3">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to={"/"} className="f-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="f-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/services"} className="f-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="f-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-4  pt-3 ">
          <h4>Contact Us</h4>
          <ul style={{ listStyleType: "none" }}>
            <li>Phone: 420200</li>
            <li>
              Hours: Mon-Fri: 8:30am-5:30pm Sat:8:30am - 2:30m Sun:9am - 1:pm
            </li>
            <li>Location: Box 210 Mahalapye, opposite Taxi Rank</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className="text-center pt-3">
          Copyright 2025, Ikins Pharmacy. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
