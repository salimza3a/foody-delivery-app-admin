import "./restaurant-card.css";
import RestaurantBin from "../../../images/icons/bin.svg";
function RestaurantCard() {
  return (
    <>
      <div className="restaurant-cards">
        <div className="card-container">
          <div className="restaurant-card-item">
            <img
              width={60}
              height={60}
              src="https://www.freepnglogos.com/uploads/burger-king-png-logo/burger-king-png-logo-0.png"
              alt=""
            />
            <div className="item-info">
              <h2>Burger King</h2>
              <p>Fast Food</p>
            </div>
          </div>
          <button className="restaurant-bin">
            <img width={20} alt="restaurant bin logo" src={RestaurantBin} />
          </button>
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;
