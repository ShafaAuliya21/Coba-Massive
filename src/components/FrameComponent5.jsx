import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  urutBerdasarkan,
  radioFilterName,
  jabodetabek,
  jabodetabek1,
  jabodetabek2,
  propWidth,
  propPadding,
  propAlignSelf,
  propWidth1,
  propFlex,
  propWidth2,
  propPadding1,
  propAlignSelf1,
  propWidth3,
  propFlex1,
  propWidth4,
  propPadding2,
  propAlignSelf2,
  propWidth5,
  propFlex2,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth2,
      padding: propPadding1,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth2, propPadding1, propAlignSelf1]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth3,
      flex: propFlex1,
    };
  }, [propWidth3, propFlex1]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth4,
      padding: propPadding2,
      alignSelf: propAlignSelf2,
    };
  }, [propWidth4, propPadding2, propAlignSelf2]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth5,
      flex: propFlex2,
    };
  }, [propWidth5, propFlex2]);

  return (
    <div className={`frame-wrapper19 ${className}`}>
      <div className="urut-berdasarkan-parent">
        <b className="urut-berdasarkan">{urutBerdasarkan}</b>
        <div className="filter-lokasi-container">
          <div className="filter-lokasi8">
            <div className="filter-lokasi-inner8" style={frameDiv1Style}>
              <div className="frame-parent20" style={frameDiv2Style}>
                <div className="radio-filter-wrapper6">
                  <input
                    className="radio-filter8"
                    type="radio"
                    name={radioFilterName}
                  />
                </div>
                <div className="jabodetabek8">{jabodetabek}</div>
              </div>
            </div>
            <div className="filter-lokasi-child6" />
          </div>
          <div className="filter-lokasi9">
            <div className="filter-lokasi-inner9" style={frameDiv3Style}>
              <div className="frame-parent21" style={frameDiv4Style}>
                <div className="radio-filter-wrapper7">
                  <input className="radio-filter9" type="radio" />
                </div>
                <div className="jabodetabek9">{jabodetabek1}</div>
              </div>
            </div>
            <div className="filter-lokasi-child7" />
          </div>
          <div className="filter-lokasi10">
            <div className="filter-lokasi-inner10" style={frameDiv5Style}>
              <div className="frame-parent22" style={frameDiv6Style}>
                <div className="radio-filter-wrapper8">
                  <input className="radio-filter10" type="radio" />
                </div>
                <div className="jabodetabek10">{jabodetabek2}</div>
              </div>
            </div>
            <div className="filter-lokasi-child8" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  urutBerdasarkan: PropTypes.string,
  radioFilterName: PropTypes.string,
  jabodetabek: PropTypes.string,
  jabodetabek1: PropTypes.string,
  jabodetabek2: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth2: PropTypes.any,
  propPadding1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth3: PropTypes.any,
  propFlex1: PropTypes.any,
  propWidth4: PropTypes.any,
  propPadding2: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth5: PropTypes.any,
  propFlex2: PropTypes.any,
};

export default FrameComponent5;
