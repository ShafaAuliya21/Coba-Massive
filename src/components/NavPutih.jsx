import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./NavPutih.css";

const NavPutih = ({ className = "" }) => {
  return (
    <div className={`nav-putih ${className}`}>
      <div className="primary-button4">
        <b className="pilih-kategori-barang">Pilih Kategori Barang</b>
        <div className="chevron-icon">
          <img className="chevron-icon1" alt="" src="/chevron.svg" />
        </div>
      </div>
      <div className="catalog-buttons">
        <div className="secondary-button-parent">
          <div className="secondary-button4">
            <Link to="/" className="katalog2">Beranda</Link>
          </div>
          <div className="secondary-button5">
            <Link to="/katalog" className="katalog3">Katalog</Link>
          </div>
          <div className="secondary-button6">
            <a className="katalog4">Favorite</a>
          </div>
          <div className="secondary-button7">
            <a className="katalog5">Chat</a>
          </div>
          <div className="secondary-button8">
            <Link to="/faqs" className="katalog6">Bantuan</Link>
          </div>
        </div>
      </div>
      <div className="address">
        <div className="alamat">
        <div className="secondary-button9">
          <Link to="/lokasi" className="link-wrapper">
            <img className="search-icon" alt="" src="/search.svg" />
            <input
              className="terdekat"
              placeholder="Masukkan Alamat"
              type="text"
            />
          </Link>
        </div>
        </div>
        </div>
    </div>
  );
};

NavPutih.propTypes = {
  className: PropTypes.string,
};

export default NavPutih;
