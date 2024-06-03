import NavColor from "./NavColor";
import NavPutih from "./NavPutih";
import PropTypes from "prop-types";
import "./NavbarRevisi.css";

const NavbarRevisi = ({ className = "" }) => {
  return (
    <header className={`navbar-revisi ${className}`}>
      <NavColor />
      <NavPutih />
    </header>
  );
};

NavbarRevisi.propTypes = {
  className: PropTypes.string,
};

export default NavbarRevisi;
