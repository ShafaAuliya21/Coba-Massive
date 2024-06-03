import Header from "../components/Header";
import AccountDetails from "../components/AccountDetails";
import "./Lokasi.css";

const Lokasi = () => {
  return (
    <div className="lokasi">
      <Header />
      <iframe className="lokasi-child"  src="lokasi.svg"/>
      <div className="account-details-wrapper">
        <AccountDetails />
      </div>
    </div>
  );
};

export default Lokasi;
