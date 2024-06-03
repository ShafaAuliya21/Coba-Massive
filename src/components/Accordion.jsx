import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

const Accordion = ({
  className = "",
  pertanyaanYangSeringMuncu,
  vector205,
  loremIpsumDolorSitAmetCon,
  propMinWidth,
}) => {
  const pertanyaanYangSering1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`accordion1 ${className}`}>
      <div className="heading1">
        <p
          className="pertanyaan-yang-sering2"
          style={pertanyaanYangSering1Style}
        >
          {pertanyaanYangSeringMuncu}
        </p>
        <div className="ellipse-parent1">
          <div className="frame-child18" />
          <img className="frame-child19" alt="" src={vector205} />
        </div>
      </div>
      <div className="lorem-ipsum-dolor1">{loremIpsumDolorSitAmetCon}</div>
    </div>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
  pertanyaanYangSeringMuncu: PropTypes.string,
  vector205: PropTypes.string,
  loremIpsumDolorSitAmetCon: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Accordion;
