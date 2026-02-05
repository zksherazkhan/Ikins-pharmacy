import About from "./HomeComponents/About";
import Contact from "./HomeComponents/Contact";
import Header from "./HomeComponents/Header";
import Services from "./HomeComponents/Services";
import { SocialMediaIcons } from "./HomeComponents/Contact";

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Contact />
      <SocialMediaIcons />
    </>
  );
};

export default Homepage;
