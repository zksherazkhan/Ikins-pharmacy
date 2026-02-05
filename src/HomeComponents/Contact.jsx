import "../style/contact.css";
import { NavLink } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import contactImg from "../assets/download.png";
const iconsStyle = {
  fontSize: "60px",
  marginBottom: "5px",
  color: "#1a4d6d",
};
const getIntouchStyle = {
  color: "#1a4d6d",
};
const Contact = () => {
  return (
    <>
      <div
        className="container  px-5"
        style={{ marginTop: "2rem", marginBottom: "4rem" }}
      >
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h1 style={getIntouchStyle}>
              <span>GET IN TOUCH</span>
            </h1>
            <p style={{ width: "70%", fontSize: "15px" }} className="my-4">
              Your Health and Queries Matter. Reach Out for Expert Pharmacy
              Assistance and Personalized Support.
            </p>
            <div className="contact-details">
              <div className="contact-info">
                <LocalPhoneIcon style={iconsStyle} />
                <p>
                  <span style={{ color: "blue" }}>Phone : </span> +267 420200
                </p>
              </div>
              <div className="contact-info">
                <EmailIcon style={iconsStyle} />
                <p>
                  <span style={{ color: "blue" }}>Gmail : </span>
                  ikram69ikin@gmail.com
                </p>
              </div>
              <div className="contact-info">
                <AccessTimeIcon style={iconsStyle} />
                <p>
                  <span style={{ color: "blue" }}>Hours : </span>
                  Mon-Fri: 8:30am-5:30pm Sat:8:30am - 2:30m Sun:9am - 1:pm
                </p>
              </div>
              <div className="contact-info">
                <LocationOnIcon style={iconsStyle} />
                <p>
                  <span style={{ color: "blue" }}>Location : </span>Box 210
                  Mahalapye, opposite Taxi Rank
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.6399906751717!2d26.830618275424293!3d-23.110271079112472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb0a39e335ed171%3A0x9cce76702e8b665c!2sIkins%20Pharmacy!5e0!3m2!1sen!2sbw!4v1737242757638!5m2!1sen!2sbw"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export const SocialMediaIcons = () => {
  const contactNum = "26777148663";
  const message = "Hello , did you do consultation for patients?";
  const whatsappUrl = `https://wa.me/${contactNum}?text=${encodeURIComponent(
    message,
  )}`;

  //for email
  const email = "ikram69ikin@gmail.com";
  const subject = "Ikins Pharmacy";
  const body = "Hello , did you do consultation for patients?";
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  return (
    <>
      <div className="container social-Icons">
        <div className="icons-dev">
          <h1>Visit us on Social Media </h1>
          <p>
            Stay connected with the pharmacy on social media by following us at
            our links below.
          </p>
          <div className="logos">
            <NavLink to={"https://www.facebook.com/share/17MziupdWq/"}>
              <FacebookIcon className="iconLogoStye" />
            </NavLink>
            <NavLink to={whatsappUrl}>
              <WhatsAppIcon className="iconLogoStye" />
            </NavLink>
            <NavLink to={emailUrl}>
              <EmailIcon className="iconLogoStye" />
            </NavLink>
          </div>
        </div>
        <div className="contactimg-box">
          <div className="contact-img">
            <img src={contactImg} alt="" className="contactImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
