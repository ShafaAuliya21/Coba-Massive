import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section-1 ${className}`}>
      <div className="section-1-child" />
      <div className="hero-title-wrapper">
        <div className="hero-title">
          <div className="terpenuhi-dengan-rental-parent">
            <h1 className="terpenuhi-dengan-rental">TERPENUHI DENGAN RENTAL</h1>
            <div className="slogan">
              <h2 className="aplikasi-penyedia-kebutuhan">
                Aplikasi Penyedia Kebutuhan Sementara
              </h2>
            </div>
          </div>
          <div className="hero-image-content-wrapper">
            <button className="hero-image-content">
              <div className="secondary-button11">
                <b className="secondary-button12">Download Now</b>
              </div>
              <img
                className="image-removebg-preview-1-1"
                alt=""
                src="/imageremovebgpreview-1-1@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
      <img
        className="section-1-item"
        loading="lazy"
        alt=""
        src="/group-133530@2x.png"
      />
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
