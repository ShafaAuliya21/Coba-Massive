import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`category-content-wrapper ${className}`}>
      <div className="category-content">
        <div className="category-header">
          <div className="category-title">
            <div className="kategori-wrapper">
              <b className="kategori">Kategori</b>
            </div>
            <h1 className="kami-sediakan-yang">
              Kami Sediakan yang Anda Butuhkan
            </h1>
          </div>
        </div>
        <div className="category-list">
          <div className="category-items">
            <div className="category-element">
              <img
                className="category-element-child"
                alt=""
                src="/rectangle-419.svg"
              />
              <b className="elektronik">Elektronik</b>
              <img
                className="camera-icon"
                loading="lazy"
                alt=""
                src="/camera.svg"
              />
            </div>
          </div>
          <div className="category-items1">
            <div className="vector-parent7">
              <img className="rectangle-icon" alt="" src="/rectangle-419.svg" />
              <b className="pakaian">Pakaian</b>
              <img
                className="group-icon"
                loading="lazy"
                alt=""
                src="/group-55.svg"
              />
            </div>
          </div>
          <div className="vehicle-icon-wrapper">
            <div className="vehicle-icon">
              <img
                className="vehicle-icon-child"
                alt=""
                src="/rectangle-419.svg"
              />
              <b className="kendaraan">Kendaraan</b>
              <img
                className="vehicle-icon-item"
                loading="lazy"
                alt=""
                src="/group-56.svg"
              />
            </div>
          </div>
          <div className="category-items2">
            <div className="vector-parent8">
              <img className="frame-child8" alt="" src="/rectangle-419.svg" />
              <b className="hobi">Hobi</b>
              <img
                className="frame-child9"
                loading="lazy"
                alt=""
                src="/group-57.svg"
              />
            </div>
          </div>
          <div className="category-items3">
            <div className="vector-parent9">
              <img className="frame-child10" alt="" src="/rectangle-419.svg" />
              <b className="peralatan">Peralatan</b>
              <div className="frame-wrapper18">
                <div className="vector-parent10">
                  <img className="vector-icon21" alt="" src="/vector.svg" />
                  <img className="vector-icon22" alt="" src="/vector-1.svg" />
                  <img className="vector-icon23" alt="" src="/vector-2.svg" />
                  <img className="vector-icon24" alt="" src="/vector-3.svg" />
                  <img className="vector-icon25" alt="" src="/vector-4.svg" />
                  <img className="vector-icon26" alt="" src="/vector-5.svg" />
                  <img className="vector-icon27" alt="" src="/vector-6.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
