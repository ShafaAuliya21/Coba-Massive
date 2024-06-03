import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Accordion1.css";

const Accordion1 = ({
  className = "",
  pertanyaanYangSeringMuncu,
  vector205,
  loremIpsumDolorSitAmetCon,
  propMinWidth,
}) => {
  const pertanyaanYangSeringStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`accordion ${className}`}>
      <div className="heading">
        <b
          className="pertanyaan-yang-sering1"
          style={pertanyaanYangSeringStyle}
        >
          {pertanyaanYangSeringMuncu}
        </b>
        <div className="ellipse-container">
          <div className="frame-child16" />
          <img className="frame-child17" alt="" src={vector205} />
        </div>
      </div>
      <div className="lorem-ipsum-dolor">{loremIpsumDolorSitAmetCon}</div>
    </div>
  );
};

Accordion1.propTypes = {
  className: PropTypes.string,
  pertanyaanYangSeringMuncu: PropTypes.string,
  vector205: PropTypes.string,
  loremIpsumDolorSitAmetCon: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Accordion1;
