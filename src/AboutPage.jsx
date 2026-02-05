import About from "./HomeComponents/About.jsx";
import "./style/AboutPage.css";
import img from "./assets/aboutImg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesImg from "./assets/aboutImg.jpg";
import Contact from "./HomeComponents/Contact.jsx";
import { SocialMediaIcons } from "./HomeComponents/Contact.jsx";
import laldaImg from "./assets/lalda.jpg";
import koomaImg from "./assets/kooma.jpg";
const TeamData = [
  {
    id: 1,
    img: laldaImg,
    name: "Ikram Ullah Khan",
    position: "Managing Director & Pharmacist",
  },
  {
    id: 2,
    img: img,
    name: "Sheraz khan",
    position: "Director & IT Administrator",
  },
  {
    id: 3,
    img: koomaImg,
    name: "Mr Kooma",
    position: "pharmacist",
  },
  {
    id: 4,
    img: img,
    name: "Mr MAx",
    position: "Human Resource Manager",
  },
];

const AboutPage = () => {
  return (
    <>
      <AboutComponent />
      <ChooseServices />
      <Contact />
      <SocialMediaIcons />
    </>
  );
};

export default AboutPage;

const AboutComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="about">
        <h1 className="text-center my-5" style={{ color: "#1a4d6d" }}>
          About Us
        </h1>
        <About />
        <div className="container " style={{ marginTop: "8rem" }}>
          <h1 className="text-center mt-4">Meet Our Team</h1>
          <p className="text-center mt-4">
            Embrace your wellness journey with our dedicated team prioritizing
            your well-being. At Ikins Pharmacy, your health takes precedence.
          </p>
          <div className="team-card my-5">
            <Slider {...settings}>
              {TeamData.map((val) => {
                return (
                  <div key={val.name}>
                    <div className="card p-2">
                      <img
                        className="card-img-top"
                        src={val.img}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <p className="card-text" style={{ lineHeight: "30px" }}>
                          {val.position}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

// our services component

const ChooseServices = () => {
  const Data = [
    {
      id: 1,
      title: "Expert Care",
      description:
        "Our skilled pharmacists prioritize your health with personalized.",
    },
    {
      id: 2,
      title: "Comprehensive Services",
      description:
        "Discover a diverse range of offerings, including prescriptions and wellness products, all conveniently available.",
    },
    {
      id: 3,
      title: "Online Refills",
      description:
        "Refill your prescriptions online for a hassle-free experience.",
    },
    {
      id: 4,
      title: "Community Engagement",
      description:
        "We actively engage with the community through health events and resources, fostering a healthier neighborhood together.",
    },
    {
      id: 5,
      title: "Medical Aid",
      description:
        "We provide medical aid services , ensuring that everyone has access to the care they deserve.",
    },
    {
      id: 6,
      title: "Health Screenings",
      description:
        "We offer health screenings to monitor your health and provide guidance for optimal well-being.",
    },
  ];
  return (
    <>
      <div
        className="container "
        style={{ marginBottom: "6rem", marginTop: "6rem" }}
      >
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Why Choose Ikins Pharmacy</h2>
            <div className="our-services p-4">
              {Data.map((val) => {
                return (
                  <div className="my-4" key={val.id}>
                    <h4>{val.title}</h4>
                    <p style={{ fontSize: "15px", color: "#7d7d7d" }}>
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="services-img">
              <img src={servicesImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
