import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`rental-steps-wrapper ${className}`}>
      <div className="rental-steps">
        <div className="rental-header">
          <div className="rental-title">
            <div className="steps-title">
              <h2 className="cara-sewa">Cara Sewa</h2>
              <h1 className="sewa-mudah-hanya">
                Sewa Mudah Hanya dengan 3 Langkah
              </h1>
            </div>
          </div>
          <div className="rental-steps-container">
            <div className="rental-step">
              <div className="step-content">
                <img className="image-icon" loading="lazy" alt="" />
                <img
                  className="step-content-child"
                  alt=""
                  src="/Group-21.svg"
                />
              </div>
              <div className="step-description">
                <div className="step-title-container">
                  <b className="pilih-produk">Pilih Produk</b>
                  <p className="menyewa-barang-yang">
                    Menyewa barang yang dibutuhkan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rental-step1">
            <div className="step-content1">
              <img
                className="step-content-item"
                loading="lazy"
                alt=""
                src="/group-25.svg"
              />
            </div>
            <div className="step-description1">
              <b className="pemakaian-dan-perpanjang">
                Pemakaian dan Perpanjang
              </b>
              <p className="mengunggah-fotovideo-yang">
                Mengunggah foto/video yang memperlihatkan kondisi barang saat
                diterima
              </p>
            </div>
          </div>
          <div className="rental-step2">
            <div className="step-content2">
              <img
                className="step-content-inner"
                loading="lazy"
                alt=""
                src="/group-24@2x.png"
              />
            </div>
            <div className="step-description2">
              <b className="pengembalian-barang1">Pengembalian Barang</b>
              <p className="mengisi-form-selesai">
                Mengisi form selesai sewa dengan menyertakan foto/video barang
                sesudah dipakai
              </p>
            </div>
          </div>
        </div>
        <img className="group-icon1" loading="lazy" alt="" src="/group.svg" />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
