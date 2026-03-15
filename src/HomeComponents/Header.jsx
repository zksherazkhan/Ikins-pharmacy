import "../style/header.css";
import headerImg from "../assets/header-img.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid row header ">
      <div className=" col-md-7 col-sm-12 header-content">
        <h1 className="heading-text"> Ikins Pharmacy</h1>
        <p>
          We are a locally based pharmacy dedicated to providing personalized
          support and patient advocacy services for your health issues.Our
          commitment includes providing best dispensing,counseling and related
          pharmacy services to our clients.We commit to provide the best
          medicines and related products at a competitive price without
          compromising on quality.
        </p>
        <button className="header-btn mt-2">
          <NavLink to={"/about"}>About us</NavLink>
        </button>
      </div>

      <div className="col-md-5 col-sm-12 header-img-container">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
