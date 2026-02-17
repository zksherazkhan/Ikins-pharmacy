import { Link } from "react-router-dom";
import "../src/style/ServicesPage.css";
import { SocialMediaIcons } from "./HomeComponents/Contact";
import servicesImg from "../src/assets/aboutImg.jpg";
import diabeticImg from "../src/assets/diabetic.jpg";
import petImg from "../src/assets/petmedicine.avif";
import immunizationImg from "../src/assets/immunization.jpg";
import mvaImg from "../src/assets/mva.png";
import medicalAidImg from "../src/assets/bpomas.jpg";
import traditionalMedicineImg from "../src/assets/traditional-medicine.jpg";
import acuteMedicationImg from "../src/assets/acute medication.jpg";
import OTCMedicationImg from "../src/assets/OTC.jpg";
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

const OurServices = () => {
  return (
    <div className="container mt-5">
      {OurServicesDetails.map((services, index) => {
        const isImgLeft = index % 2 === 0; //  Determine if the image should be on the left or right
        return (
          <div key={services.id} className="row m-3 py-4" id={services.id}>
            <div
              className={`col-sm-6  services-Img-box ${isImgLeft ? "" : "order-2"}`}
            >
              <div className="service-img">
                <img src={services.img} alt="" />
              </div>
            </div>
            <div
              className={`col-sm-6 about-text ${isImgLeft ? "order-2" : ""}`}
              id={services.title}
            >
              <h2>{services.title}</h2>
              <p>{services.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const OurServicesDetails = [
  {
    id: 1,
    title: "Chronic Medication",
    description:
      "Living well with a chronic condition starts with reliable,consistent care. For over 20 years, the Mahalapye community hastrusted us to provide just that. Our Chronic Medication servicetakes the worry out of your long-term health. We ensure your vital medicines are always ready, manage refills and medical aid paperwork seamlessly, and offer discreet, expert advice. We’re here to simplify your routine, so you can focus on your well-being. Let us be your partner in health. Speak to us today for a simpler way to manage your health.",
    img: servicesImg,
  },
  {
    id: 2,
    title: "Diabetic Care",
    description:
      "  Effective diabetes management is built on consistency, the right tools, and trusted guidance. At Ikins Pharmacy, we are your local partner for comprehensive diabetic care. We provide reliable access to essential medication, glucose monitoring systems, and specialized supplies, all supported by confidential, expert advice on daily management. Our goal is to empower you with the knowledge and products you need to stay healthy, seamlessly integrating this care with your overall chronic health plan. Let us help you navigate your journey with confidence. Visit us for personalized support and supplies.",
    img: diabeticImg,
  },
  {
    id: 3,
    title: "Acute Medication",
    description:
      "   When you need immediate relief, we are here for you.We provide prompt access to acute medicines for common conditions like pain, fever, infections, allergies, and minor ailments. Our knowledgeable pharmacists are always available to offer advice, help you select the right treatment, and ensure you start feeling better as quickly as possible.Visit us for fast, professional care when you need it most.",
    img: acuteMedicationImg,
  },
  {
    id: 4,
    title: "OTC Medication",
    description:
      " From common colds to everyday aches, we have you covered.We stock a comprehensive selection of over-the-counter medicines and health products. Whether you need pain relief, cough and cold remedies, allergy treatments, or digestive health solutions, our shelves are ready with trusted brands. Our pharmacists are always on hand to guide you toward the right choice for your symptoms. Ask our team for friendly, expert advice on OTC products.",
    img: OTCMedicationImg,
  },
  {
    id: 5,
    title: "Pet Medication",
    description:
      "At Ikins Pharmacy, we care for the health and happiness of every member of your family—including the furry ones. We offer a selection of essential pet care products to support their wellbeing. From specialized shampoos for skin conditions to treatments for ticks and fleas, we provide trusted solutions to keep your pets clean, comfortable, and healthy. Visit our section to find what you need for your beloved companions. Shop our pet care range today.",
    img: petImg,
  },
  {
    id: 6,
    title: "Immunizations",
    description:
      "  Protecting the health of our community is our priority. We provide convenient and reliable immunization services for children and adults. From routine childhood vaccines to essential travel and seasonal flu shots, our trained pharmacists ensure a safe and professional experience. We help you stay up-to-date with recommended vaccinations to prevent illness and promote long-term wellness for you and your family. Speak to our pharmacists about your vaccination needs.",
    img: immunizationImg,
  },
  {
    id: 7,
    title: "Medical Aid",
    description:
      " We make accessing your benefits simple and swift. We expertly handle all the paperwork and directly submit your claims online for seamless processing with BPMOS, PULA, BOMAID, and BOTSOGO</b>. You receive your medication immediately while we manage the administrative process directly with your scheme. Our goal is to ensure you get the care you need without delay or hassle. Visit us for direct billing and expert support with your medical aid.",
    img: medicalAidImg,
  },
  {
    id: 8,
    title: "MVA",
    description:
      "  If you have been involved in a motor vehicle accident, we are here to help you navigate the next steps with care and expertise.We assist you in processing the necessary pharmaceutical claims related to your MVA case. We provide the prescribed medications you need and handle the required documentation andliaison, helping to ensure your recovery is supported without added administrative stress. Let us assist you with your MVA pharmaceutical needs.",
    img: mvaImg,
  },
  {
    id: 9,
    title: "Traditional Medicine",
    description:
      "We honor the holistic health traditions of our community. We believe in a respectful approach to wellness that includes valued traditional remedies. Our pharmacists are here to provide informed, confidential guidance on how these practices can complement your overall healthcare plan, ensuring safe and coordinated support for your well-being.",
    img: traditionalMedicineImg,
  },
];
