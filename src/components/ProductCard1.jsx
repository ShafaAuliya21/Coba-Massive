import PropTypes from "prop-types";
import "./ProductCard1.css";

const ProductCard1 = ({
  className = "",
  rectangle415,
  handThumbsUp,
  productName,
  mainPrice,
}) => {
  return (
    <div className={`product-card1 ${className}`}>
      <div className="rectangle-parent3">
        <img className="frame-child13" alt="" src={rectangle415} />
        <div className="duotone-button1">
          <img
            className="hand-thumbs-up-icon1"
            loading="lazy"
            alt=""
            src={handThumbsUp}
          />
        </div>
      </div>
      <div className="product-card-inner">
        <div className="product-name-parent">
          <div className="product-name1">{productName}</div>
          <div className="star-parent">
            <img className="star-icon1" loading="lazy" alt="" src="/star.svg" />
            <div className="discount1">
              <div className="km1">3 KM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-card-child">
        <div className="frame-parent23">
          <div className="pricing-wrapper">
            <div className="pricing1">
              <b className="main-price1">{mainPrice}</b>
            </div>
          </div>
          <div className="primary-button-parent">
            <button className="primary-button11">
              <b className="primary-button12">Sewa</b>
            </button>
            <div className="primary-button13">
              <img className="iconheart1" alt="" src="/iconheart.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard1.propTypes = {
  className: PropTypes.string,
  rectangle415: PropTypes.string,
  handThumbsUp: PropTypes.string,
  productName: PropTypes.string,
  mainPrice: PropTypes.string,
};

export default ProductCard1;
