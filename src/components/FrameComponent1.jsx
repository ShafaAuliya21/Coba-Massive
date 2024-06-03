import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`landing-page-inner ${className}`}>
      <div className="group-div">
        <div className="frame-child11" />
        <div className="product-title">
          <div className="see-all-container">
            <div className="see-all-link">
              <div className="produk-wrapper">
                <h1 className="produk">Produk</h1>
              </div>
              <div className="see-all-button">
                <div className="lihat-semua">Lihat Semua</div>
                <div className="see-all-button-child" />
              </div>
            </div>
          </div>
          <div className="frame-card">
            <ProductCard
              rectangle415="/rectangle-415@2x.png"
              handThumbsUp="/handthumbsup.svg"
              productName="ASUS ROG STRIX-G"
              star="/star.svg"
              mainPrice="Rp 600.000"
            />
            <ProductCard
              rectangle415="/rectangle-415-1@2x.png"
              handThumbsUp="/pinmapfill.svg"
              productName="ASUS TUF A15"
              star="/star-1.svg"
              mainPrice="Rp 450.000"
              propBackgroundColor="#e2f4ff"
              propBackgroundColor1="#003f62"
              propMargin="unset"
              propBackgroundColor2="#003f62"
              propColor="#fff"
              propPadding="0px var(--padding-base) 0px var(--padding-6xs)"
            />
            <ProductCard
              rectangle415="/rectangle-415-2@2x.png"
              handThumbsUp="/handthumbsup.svg"
              productName="ASUS ZenBook"
              star="/star.svg"
              mainPrice="Rp 400.000"
              propBackgroundColor="#fff"
              propBackgroundColor1="#e9f0ff"
              propMargin="unset"
              propBackgroundColor2="#e9f0ff"
              propColor="#102b6b"
              propPadding="0px var(--padding-mini) 0px var(--padding-6xs)"
            />
            <ProductCard
              rectangle415="/rectangle-415-3@2x.png"
              handThumbsUp="/pinmapfill.svg"
              productName="ASUS A416MAO-FHD427"
              star="/star-1.svg"
              mainPrice="Rp 300.000"
              propBackgroundColor="#e2f4ff"
              propBackgroundColor1="#003f62"
              propMargin="0"
              propBackgroundColor2="#003f62"
              propColor="#fff"
              propPadding="0px var(--padding-base) 0px var(--padding-6xs)"
            />
          </div>
        </div>
        <div className="card-navigation">
          <div className="navigation-dots">
            <div className="navigation-dots-child" />
            <div className="navigation-dots-item" />
            <div className="navigation-dots-inner" />
            <div className="navigation-dots-child1" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
