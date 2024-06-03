import { useCallback } from "react";
import NavColor from "./NavColor";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSecondaryButtonContainer4Click = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  return (
    <section className={`frame-parent26 ${className}`}>
      <header className="frame-header">
        <div className="frame-child15" />
        <form className="navbar-revisi2">
          <NavColor
            navColorOverflow="unset"
            frameDivPadding="var(--padding-5xs) var(--padding-10xs)"
            paymentIconPadding="var(--padding-10xs-5) 0px"
          />
          <div className="nav-putih2">
            <div className="primary-button18">
              <b className="pilih-kategori-barang2">Pilih Kategori Barang</b>
              <div className="chevron-container">
                <img className="chevron-icon3" alt="" src="/chevron.svg" />
              </div>
            </div>
            <div className="nav-putih-child">
              <div className="secondary-button-parent1">
                <div className="secondary-button32">
                  <Link to="/" className="katalog12">Beranda</Link>
                </div>
                <div className="secondary-button33">
                  <Link to="/katalog" className="katalog13">Katalog</Link>
                </div>
                <div className="secondary-button34">
                  <a className="katalog14">Favorite</a>
                </div>
                <div className="secondary-button35">
                  <a className="katalog15">Chat</a>
                </div>
                <div
                  className="secondary-button36"
                  onClick={onSecondaryButtonContainer4Click}
                >
                  <Link to="/faqs" className="katalog16">Bantuan</Link>
                </div>
              </div>
            </div>
            <div className="alamat-container">
              <div className="alamat2">
                <div className="secondary-button37">
                  <b className="secondary-button38">Secondary Button</b>
                </div>
                <img className="search-icon1" alt="" src="/search.svg" />
                <input
                  className="terdekat1"
                  placeholder="Masukkan Alamat"
                  type="text"
                />
              </div>
            </div>
          </div>
        </form>
      </header>
      <img
        className="untitled-design-icon"
        loading="lazy"
        alt=""
        src="/untitled-design@2x.png"
      />
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
