import ServicesData from "./ServicesData";
import "../style/services.css";
import { HashLink } from "react-router-hash-link";

const paraStyle = {
  width: "80%",
  marginTop: "20px",
  textAlign: "center",
  color: "#6C6D57",
};

const Services = () => {
  return (
    <div className="container services-container  px-5">
      <h1 className="text-center " style={{ color: "#1a4d6d" }}>
        Services we offer
      </h1>
      <p className="mx-auto" style={paraStyle}>
        As an independent pharmacy, we’re working hard to get to know you by
        name and treat you like a neighbor, because that’s, in fact who you are!
        Stop in and see why so many patients prefer us over a large chain
        pharmacy.
      </p>

      <div className="row gy-5  my-2 px-5">
        {ServicesData.map((val) => {
          return (
            <Card
              title={val.title}
              description={val.description}
              key={val.id}
            />
          );
        })}
      </div>
      <HashLink
        to="/services#allServices"
        smooth
        className="servicesBtn my-5 text-center"
      >
        View All Services
      </HashLink>
    </div>
  );
};

const Card = ({ title, description }) => {
  return (
    <>
      <div className="col-md-6  ">
        <div className="card p-6 mycard">
          <div className="card-body services-card">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{ lineHeight: "30px" }}>
              {description}
            </p>
            <HashLink
              to={`/services#${title}`}
              smooth
              className="btn "
              style={{ backgroundColor: "#0098da", color: "white" }}
              // onClick={() => handleClick(title)}
            >
              Read More
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
