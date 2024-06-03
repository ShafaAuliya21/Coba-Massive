import NavbarRevisi from "../components/NavbarRevisi";
import Section from "../components/Section";
import HeroContent from "../components/HeroContent";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterColor from "../components/FooterColor";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavbarRevisi />
      <section className="section-1-parent">
        <Section />
        <div className="rent-content-parent">
        </div>
        <HeroContent />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <div className="scroll-top-button">
        <img
          className="arrow-up-square-fill-icon"
          loading="lazy"
          alt=""
          src="/arrowupsquarefill@2x.png"
        />
      </div>
      <FooterColor />
    </div>
  );
};

export default LandingPage;
