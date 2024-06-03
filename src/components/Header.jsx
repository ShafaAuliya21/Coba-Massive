import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  const onArrowLeftIconClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <header className={`header ${className}`}>
      <div className="frame-parent19">
        <div className="arrow-left-wrapper">
          <img
            className="arrow-left-icon"
            loading="lazy"
            alt=""
            src="/arrowleft.svg"
            onClick={onArrowLeftIconClick}
          />
        </div>
        <h1 className="tentukan-lokasi">Tentukan Lokasi</h1>
      </div>
      <div className="search-bar">
        <div className="search-input">
          <div className="search2">
            <div className="search-input-box">
              <img
                className="leading-icon1"
                loading="lazy"
                alt=""
                src="/leading-icon.svg"
              />
              <a className="search3">Search</a>
              <img className="trailing-icon1" alt="" />
            </div>
          </div>
          <button className="primary-button9">
            <a className="buka-toko5">Cari</a>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
