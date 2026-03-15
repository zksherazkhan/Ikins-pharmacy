import { Link } from "react-router-dom";
import "../src/style/ServicesPage.css";
import { SocialMediaIcons } from "./HomeComponents/Contact";
import OurServices from "./OurServices";
const cardsData = [
  {
    id: 1,
    title: "Chronic Medication",
  },
  {
    id: 2,
    title: "Diabetic Care",
  },
  {
    id: 3,
    title: "Acute Medication",
  },
  {
    id: 4,
    title: "OTC Medication",
  },
  {
    id: 5,
    title: "Pet Medication",
  },
  {
    id: 6,
    title: "Immunizations",
  },
  {
    id: 7,
    title: "Medical Aid",
  },
  {
    id: 8,
    title: "MVA",
  },
  {
    id: 9,

    title: "Traditional Medicine",
  },
];

const ServicesPage = () => {
  const handleCick = (navigateId) => {
    const element = document.getElementById(navigateId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="services" id="allServices">
      <h1 className="text-center mt-5" style={{ color: "#1a4d6d" }}>
        Our Services
      </h1>
      <div className="container d-flex justify-content-center flex-wrap gap-4 my-5">
        {cardsData.map((val) => {
          return (
            <Link
              key={val.id}
              className="services-card-text text-center "
              onClick={() => handleCick(val.id)}
            >
              {val.title}
            </Link>
          );
        })}
      </div>

      <div className="container  px-5" style={{ marginTop: "6rem" }}>
        <h2 className="text-center ">Services we offer</h2>
        <p
          className="mx-auto"
          style={{
            width: "80%",
            marginTop: "20px",
            textAlign: "center",
            color: "#6C6D57",
          }}
        >
          As an independent pharmacy, we’re working hard to get to know you by
          name and treat you like a neighbor, because that’s, in fact who you
          are! Stop in and see why so many patients prefer us over a large chain
          pharmacy.
        </p>
      </div>
      <OurServices />
      <SocialMediaIcons />
    </div>
  );
};

export default ServicesPage;
