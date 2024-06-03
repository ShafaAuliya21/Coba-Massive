import { useMemo } from "react";
import PropTypes from "prop-types";
import "./NavColor.css";

const NavColor = ({
  className = "",
  navColorOverflow,
  frameDivPadding,
  paymentIconPadding,
}) => {
  const navColorStyle = useMemo(() => {
    return {
      overflow: navColorOverflow,
    };
  }, [navColorOverflow]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const paymentIconStyle = useMemo(() => {
    return {
      padding: paymentIconPadding,
    };
  }, [paymentIconPadding]);

  return (
    <div className={`nav-color ${className}`} style={navColorStyle}>
      <div className="logo-searchbar">
        <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
        <div className="logo-searchbar-inner">
          <div className="search-parent">
            <div className="search">
              <div className="search-field">
                <img className="leading-icon" alt="" src="/leading-icon.svg" />
                <input className="search1" placeholder="Search" type="text" />
                <img className="trailing-icon" alt="" />
              </div>
            </div>
            <button className="primary-button2">
              <a className="buka-toko2">Cari</a>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-buttons">
        <div className="button-navbar">
          <div className="bell-notif">
            <img className="bell-icon" loading="lazy" alt="" src="/bell.svg" />
            <div className="notif-count">
              <a className="notifikasi">Notifikasi</a>
            </div>
          </div>
          <div className="message-box">
            <div className="message-icon">
              <img className="box-icon" loading="lazy" alt="" src="/box.svg" />
              <a className="pesanan">Pesanan</a>
            </div>
          </div>
          <div className="payment-icon-wrapper" style={frameDivStyle}>
            <div className="payment-icon" style={paymentIconStyle}>
              <div className="scan-payment">
                <img
                  className="upc-scan-icon"
                  loading="lazy"
                  alt=""
                  src="/upcscan.svg"
                />
                <a className="pembayaran1">Pembayaran</a>
              </div>
            </div>
          </div>
          <button className="primary-button3">
            <a className="buka-toko3">Daftar</a>
          </button>
        </div>
      </div>
    </div>
  );
};

NavColor.propTypes = {
  className: PropTypes.string,

  /** Style props */
  navColorOverflow: PropTypes.any,
  frameDivPadding: PropTypes.any,
  paymentIconPadding: PropTypes.any,
};

export default NavColor;
