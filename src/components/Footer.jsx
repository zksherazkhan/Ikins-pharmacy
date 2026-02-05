import { NavLink } from "react-router-dom";
import "../style/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <div className="col-md-3 offset-md-1 ">
            <div>
              <h1>Ikins Pharmacy</h1>
              <p style={{ color: "#fff", fontSize: "0.9rem" }}>
                Customized healthcare for everyone infants, seniors, pets, and
                your entire household Committed to delivering exceptional
                attention and personalized solutions to meet individual health
                requirements.
              </p>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="footerLinks pt-3">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <NavLink to={"/"}>home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 pt-3 ">
            <div>
              <h4>Policies</h4>
              <a href="">Privacy Policy</a>
            </div>
          </div>
          <div className="col-md-3 pt-3 ">
            <div>
              <h4>Contact Us</h4>
              <ul style={{ listStyleType: "none" }}>
                <li>Phone: 420200</li>
                <li>
                  Hours: Mon-Fri: 8:30am-5:30pm Sat:8:30am - 2:30m Sun:9am -
                  1:pm
                </li>
                <li>Location: Box 210 Mahalapye, opposite Taxi Rank</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-center pt-3">
            Copyright 2025, Ikins Pharmacy. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
