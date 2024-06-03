import NavColor from "./NavColor";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./NavbarRevisi1.css";

const NavbarRevisi1 = ({ className = "" }) => {
  return (
    <form className={`navbar-revisi1 ${className}`}>
      <NavColor
        navColorOverflow="hidden"
        frameDivPadding="var(--padding-2xs-5) var(--padding-10xs)"
        paymentIconPadding="0px 0px"
      />
      <div className="nav-putih1">
        <div className="primary-button10">
          <b className="pilih-kategori-barang1">Pilih Kategori Barang</b>
          <div className="chevron-wrapper">
            <img className="chevron-icon2" alt="" src="/chevron.svg" />
          </div>
        </div>
        <div className="nav-putih-inner">
          <div className="secondary-button-container">
            <div className="secondary-button25">
              <Link to="/" className="katalog7">Beranda</Link>
            </div>
            <div className="secondary-button26">
              <Link to="/katalog" className="katalog8">Katalog</Link>
            </div>
            <div className="secondary-button27">
              <a className="katalog9">Favorite</a>
            </div>
            <div className="secondary-button28">
              <a className="katalog10">Chat</a>
            </div>
            <div className="secondary-button29">
              <Link to="/faqs" className="katalog11">Bantuan</Link>
            </div>
          </div>
        </div>
        <div className="alamat-wrapper">
          <div className="alamat1">
            <div className="secondary-button30">
              <b className="secondary-button31">Secondary Button</b>
            </div>
            <input
              className="jl-dahlia-blok1"
              placeholder="Jl. Dahlia Blok J5 No. 32"
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

NavbarRevisi1.propTypes = {
  className: PropTypes.string,
};

export default NavbarRevisi1;
