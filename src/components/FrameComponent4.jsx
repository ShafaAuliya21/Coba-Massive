import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
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
    <div className={`footer-color-wrapper ${className}`}>
      <div className="footer-color2">
        <div className="footer-color-child1" />
        <div className="frame-parent25">
          <div className="frame-wrapper20">
            <div className="about-us-group">
              <div className="about-us1">
                <b className="zerent2">Zerent</b>
                <div className="zerent-adalah-platform-e-comme-group">
                  <p className="zerent-adalah-platform-container2">
                    <span>{`Zerent adalah platform `}</span>
                    <i>e-commerce</i>
                    <span>
                      {" "}
                      inovatif yang mengkhususkan dalam penyewaan barang dari
                      berbagai kategori. Zerent juga menyediakan fitur
                      permintaan untuk penyediaan stok barang yang kalian
                      butuhkan.
                    </span>
                  </p>
                  <div className="facebook-container">
                    <img
                      className="facebook-icon2"
                      loading="lazy"
                      alt=""
                      src="/facebook.svg"
                      onClick={onFacebookIconClick}
                    />
                  </div>
                </div>
                <img
                  className="messenger-icon2"
                  loading="lazy"
                  alt=""
                  src="/messenger.svg"
                  onClick={onMessengerIconClick}
                />
                <img
                  className="telegram-icon2"
                  loading="lazy"
                  alt=""
                  src="/telegram@2x.png"
                  onClick={onTelegramIconClick}
                />
              </div>
              <div className="frame-wrapper21">
                <div className="stay-in-the-loop-group">
                  <div className="stay-in-the-loop1">
                    <div className="terus-ikuti-perkembangan-container">
                      <b className="terus-ikuti-perkembangan2">
                        Terus ikuti Perkembangan
                      </b>
                    </div>
                    <div className="bergabunglah-dengan-mailling-l-container">
                      <p className="bergabunglah-dengan-mailling2">
                        Bergabunglah dengan mailling list kami untuk terus
                        mengikuti perkembangan info-info menarik dari kami
                      </p>
                    </div>
                    <div className="field-email2">
                      <div className="field-email-inner" />
                      <div className="masukkan-email2">Masukkan email</div>
                    </div>
                  </div>
                  <button className="primary-button17">
                    <b className="buka-toko6">Bergabung</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="customer-care1">
            <b className="logo2">Logo</b>
            <div className="bantuan-pengembalian-barang-container2">
              <p className="bantuan2">Bantuan</p>
              <p className="pengembalian-barang3">Pengembalian Barang</p>
              <p className="syarat-ketentuan2">{`Syarat & Ketentuan`}</p>
              <p className="faq2">FAQ</p>
            </div>
          </div>
        </div>
        <footer className="copyright-container">
          <div className="copyright1">
            <div className="copyright-item" />
            <div className="copyright-2024-curtinaambhil-frame">
              <div className="copyright-20242">
                Copyright © 2024 CurtinaAmbhilasa
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
