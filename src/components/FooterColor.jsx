import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FooterColor.css";

const FooterColor = ({ className = "" }) => {
  const onFacebookIconClick = useCallback(() => {
    window.open("https://id-id.facebook.com/");
  }, []);

  const onMessengerIconClick = useCallback(() => {
    window.open("https://www.messenger.com/");
  }, []);

  const onTelegramIconClick = useCallback(() => {
    window.open("https://web.telegram.org/");
  }, []);

  return (
    <section className={`footer-color1 ${className}`}>
      <div className="footer-color-item" />
      <div className="footer-content">
        <div className="footer-content-inner">
          <div className="about-content-parent">
            <div className="about-content">
              <b className="zerent1">Zerent</b>
              <div className="about-description">
                <p className="zerent-adalah-platform-container1">
                  <span>{`Zerent adalah platform `}</span>
                  <i>e-commerce</i>
                  <span>
                    {" "}
                    inovatif yang mengkhususkan dalam penyewaan barang dari
                    berbagai kategori. Zerent juga menyediakan fitur permintaan
                    untuk penyediaan stok barang yang kalian butuhkan.
                  </span>
                </p>
                <div className="social-media">
                  <div className="social-media-icons">
                    <img
                      className="facebook-icon1"
                      loading="lazy"
                      alt=""
                      src="/facebook.svg"
                      onClick={onFacebookIconClick}
                    />
                    <img
                      className="messenger-icon1"
                      loading="lazy"
                      alt=""
                      src="/messenger.svg"
                      onClick={onMessengerIconClick}
                    />
                    <img
                      className="telegram-icon1"
                      loading="lazy"
                      alt=""
                      src="/telegram@2x.png"
                      onClick={onTelegramIconClick}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter-content-wrapper">
              <div className="newsletter-content">
                <div className="newsletter-title">
                  <b className="terus-ikuti-perkembangan1">
                    Terus ikuti Perkembangan
                  </b>
                </div>
                <div className="newsletter-description">
                  <p className="bergabunglah-dengan-mailling1">
                    Bergabunglah dengan mailling list kami untuk terus mengikuti
                    perkembangan info-info menarik dari kami
                  </p>
                </div>
                <div className="field-email1">
                  <div className="field-email-item" />
                  <div className="email-input-field">
                    <div className="masukkan-email1">Masukkan email</div>
                  </div>
                  <button className="primary-button8">
                    <b className="buka-toko4">Bergabung</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-info">
          <b className="logo1">Logo</b>
          <p className="bantuan-pengembalian-barang-container1">
            <span className="bantuan1">Bantuan</span>
            <span className="pengembalian-barang2">Pengembalian Barang</span>
            <span className="syarat-ketentuan1">{`Syarat & Ketentuan`}</span>
            <span className="faq1">FAQ</span>
          </p>
        </div>
      </div>
      <footer className="footer-color-inner">
        <div className="line-parent">
          <div className="frame-child12" />
          <div className="copyright-2024-curtinaambhil-container">
            <div className="copyright-20241">
              Copyright © 2024 CurtinaAmbhilasa
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

FooterColor.propTypes = {
  className: PropTypes.string,
};

export default FooterColor;
