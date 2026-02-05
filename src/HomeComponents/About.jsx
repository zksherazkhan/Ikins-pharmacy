import "../style/about.css";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row about-section">
        <div className="col-md-6  about-Img-box">
          <div className="myImgBox">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="col-md-6 about-text">
          <h1 style={{ color: "#1a4d6d" }}>About Ikins Pharmacy</h1>
          <p className="about-para">
            Since 2000, Ikins Pharmacy has been a trusted healthcare partner for
            the Mahalapye community. As a leading local pharmacy, we are
            dedicated to providing reliable access to medicine, expert
            assistance with medical aid claims, and support for Motor Vehicle
            Accident (MVA) cases. Our commitment goes beyond the counter—we
            believe in giving back and are proud to support our community
            through various initiatives. Your health and well-being are at the
            heart of everything we do.
          </p>

          <p className="desing-text">Expert Pharmacist Consultations</p>
          <p className="desing-text" style={{ width: "70%" }}>
            Wide Range of Medications
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
