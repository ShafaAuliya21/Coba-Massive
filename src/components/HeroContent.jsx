import PropTypes from "prop-types";
import "./HeroContent.css";

const HeroContent = ({ className = "" }) => {
  return (
    <div className={`hero-content ${className}`}>
      <div className="hero-content-child" />
      <div className="hero-content-inner">
        <div className="kualitas-barang-terjamin-past-parent">
          <h1 className="kualitas-barang-terjamin-container">
            <p className="kualitas-barang-terjamin">
              Kualitas Barang Terjamin,
            </p>
            <p className="pastikan-sewa-lagi">Pastikan Sewa Lagi</p>
          </h1>
          <div className="frame-wrapper17">
            <div className="secondary-button-group">
              <div className="secondary-button21">
                <b className="secondary-button22">Katalog</b>
              </div>
              <div className="secondary-button23">
                <b className="secondary-button24">Request</b>
              </div>
            </div>
          </div>
          <div className="dots">
            <div className="dot-parent">
              <div className="dot" />
              <div className="dot-two" />
              <div className="dot-three" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="image-removebg-preview-1-tra-icon"
        loading="lazy"
        alt=""
        src="/imageremovebgpreview--1-transformed--1-removebgpreview-1@2x.png"
      />
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
