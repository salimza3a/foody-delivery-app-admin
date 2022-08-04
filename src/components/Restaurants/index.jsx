import "./restaurant-page.css";
import RestaurantCard from "./RestaurantCard";
import MainDrawer from "../../features/Drawer";
import Pagination from "../../utils/Pagination";
import RestaurantDrawer from "../../features/RestaurantDrawer";
function RestaurantPage() {
  return (
    <>
      <div className="restaurant-container">
        <div className="restaurant-header">
          <h2>Restaurants</h2>
          <div className="right-side-items">
            <select className="restaurantOptions">
              <option>Category type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <span>
              {
                <MainDrawer
                  name="Add Restaurants"
                  drawer={<RestaurantDrawer />}
                />
              }
            </span>
          </div>
        </div>
        <div className="food-company-container">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
        <div className="restaurant-paginations">{<Pagination />}</div>
      </div>
    </>
  );
}

export default RestaurantPage;
