import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({
  className = "",
  rectangle415,
  handThumbsUp,
  productName,
  star,
  mainPrice,
  propBackgroundColor,
  propBackgroundColor1,
  propMargin,
  propBackgroundColor2,
  propColor,
  propPadding,
}) => {
  const productCardStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const duotoneButtonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const productNameStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const discountStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const kMStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const pricingContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`product-card ${className}`} style={productCardStyle}>
      <div className="card-image-container">
        <img className="card-image-container-child" alt="" src={rectangle415} />
        <div className="duotone-button" style={duotoneButtonStyle}>
          <img
            className="hand-thumbs-up-icon"
            loading="lazy"
            alt=""
            src={handThumbsUp}
          />
        </div>
      </div>
      <div className="card-content">
        <div className="product-info">
          <div className="product-name" style={productNameStyle}>
            {productName}
          </div>
          <div className="rating">
            <img className="star-icon" loading="lazy" alt="" src={star} />
            <div className="discount" style={discountStyle}>
              <div className="km" style={kMStyle}>
                3 KM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-container" style={pricingContainerStyle}>
        <div className="pricing-info">
          <div className="price-details">
            <div className="pricing">
              <b className="main-price">{mainPrice}</b>
            </div>
          </div>
          <div className="button-container">
            <button className="primary-button5">
              <b className="primary-button6">Sewa</b>
            </button>
            <div className="primary-button7">
              <img
                className="iconheart"
                loading="lazy"
                alt=""
                src="/iconheart.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  rectangle415: PropTypes.string,
  handThumbsUp: PropTypes.string,
  productName: PropTypes.string,
  star: PropTypes.string,
  mainPrice: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propMargin: PropTypes.any,
  propBackgroundColor2: PropTypes.any,
  propColor: PropTypes.any,
  propPadding: PropTypes.any,
};

export default ProductCard;
