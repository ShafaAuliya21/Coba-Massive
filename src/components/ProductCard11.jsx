import PropTypes from "prop-types";
import "./ProductCard11.css";

const ProductCard1 = ({
  className = "",
  rectangle415,
  handThumbsUp,
  productName,
  mainPrice,
}) => {
  return (
    <div className={`product-card2 ${className}`}>
      <div className="rectangle-parent4">
        <img className="frame-child14" alt="" src={rectangle415} />
        <div className="duotone-button2">
          <img className="hand-thumbs-up-icon2" alt="" src={handThumbsUp} />
        </div>
      </div>
      <div className="product-card-inner1">
        <div className="product-name-group">
          <div className="product-name2">{productName}</div>
          <div className="star-group">
            <img className="star-icon2" alt="" src="/star.svg" />
            <div className="discount2">
              <div className="km2">3 KM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-card-inner2">
        <div className="frame-parent24">
          <div className="pricing-frame">
            <div className="pricing2">
              <b className="main-price2">{mainPrice}</b>
            </div>
          </div>
          <div className="primary-button-group">
            <button className="primary-button14">
              <b className="primary-button15">Sewa</b>
            </button>
            <div className="primary-button16">
              <img className="iconheart2" alt="" src="/iconheart.svg" />
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
