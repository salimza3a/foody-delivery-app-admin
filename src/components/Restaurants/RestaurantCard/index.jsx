import "./restaurant-card.css";
import RestaurantBin from "../../../images/icons/bin.svg";
function RestaurantCard({
  restaurant_image,
  restaurant,
  category,
  id,
  deletePost,
}) {
  return (
    <>
      <div className="restaurant-cards">
        <div className="card-container">
          <div className="restaurant-card-item">
            <img width={45} height={45} src={restaurant_image} alt="" />
            <div className="item-info">
              <h2>{restaurant}</h2>
              <p>{category}</p>
            </div>
          </div>
          <button className="restaurant-bin" onClick={() => deletePost(id)}>
            <img width={20} alt="restaurant bin logo" src={RestaurantBin} />
          </button>
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;
