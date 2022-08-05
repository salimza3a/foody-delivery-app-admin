import "./offer-style.css";
import MainDrawer from "../../features/Drawer";
import OffersDrawer from "../../features/OffersDrawer";
import OffersTable from "./OfferTable";
function OfferPage() {
  return (
    <>
      <div className="offers-container">
        <div className="offers-header">
          <h2>Offers</h2>
          <button className="offer-btn">
            {<MainDrawer name="Add Offer" drawer={<OffersDrawer />} />}
          </button>
        </div>

        <div className="offers-main">
          <OffersTable />
        </div>
      </div>
    </>
  );
}

export default OfferPage;
