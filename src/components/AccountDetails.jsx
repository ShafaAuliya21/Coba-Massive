import { useCallback } from "react";
import PropTypes from "prop-types";
import "./AccountDetails.css";

const AccountDetails = ({ className = "" }) => {
  const onLokasi1ContainerClick = useCallback(() => {
    // Please sync "Landing Page_Lokasi" to the project
  }, []);

  return (
    <div className={`account-details ${className}`}>
      <div className="account-number">
        <div className="textlabel-bank-account-number">Pencarian terbaru</div>
      </div>
      <div className="address-details">
        <div className="user-address">
          <div className="lokasi11" onClick={onLokasi1ContainerClick}>
            <img
              className="lokasi1-child"
              loading="lazy"
              alt=""
              src="/group-23.svg"
            />
            <div className="jl-dahlia-blok-j5-no-32-parent">
              <p className="jl-dahlia-blok">Jl. Dahlia Blok J5 No. 32</p>
              <div className="bandung-jawa-barat">Bandung, Jawa Barat</div>
            </div>
          </div>
        </div>
        <div className="address-details-child" />
      </div>
      <div className="delivery-address">
        <div className="delivery-location">
          <img className="delivery-location-child" alt="" src="/group-23.svg" />
          <div className="jl-mawar-blok-k2-no-15-parent">
            <p className="jl-mawar-blok">Jl. Mawar Blok K2 No. 15</p>
            <div className="bandung-jawa-barat1">Bandung, Jawa Barat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default AccountDetails;
