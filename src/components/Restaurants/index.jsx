import "./restaurant-page.css";
import RestaurantCard from "./RestaurantCard";
import MainDrawer from "../../features/Drawer";
import RestaurantDrawer from "../../features/RestaurantDrawer";
import { deleteRestaurantsApi, getRestaurantsApi } from "../../api/restaurants";
import { useEffect, useState } from "react";
import Paginations from "../../utils/Pagination";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryOption from "../../utils/CategoryOption";
function RestaurantPage() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  function getRestaurantsData() {
    getRestaurantsApi.then((res) => {
      setRestaurantData(res.data.restaurants);
    });
  }

  function deleteRestaurantPost(id) {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "Attention! If you delete this product, it won't come back...",
      showCancelButton: true,
      confirmButtonColor: "#d63626",
      cancelButtonColor: "#BDBDBD",
      confirmButtonText: "delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRestaurantsApi(id).then((res) => {
          const newArr = restaurantData.filter((item) => item.id !== id);
          setRestaurantData(newArr);
        });
        toast.success("deleted successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
        });
      }
    });
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = restaurantData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="restaurant-container">
        <div className="restaurant-header">
          <h2>Restaurants</h2>
          <div className="right-side-items">
            <CategoryOption />
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
          {currentPosts?.map((data) => (
            <RestaurantCard
              key={data.id}
              {...data}
              deletePost={deleteRestaurantPost}
            />
          ))}
        </div>
        <div className="restaurant-paginations">
          {
            <Paginations
              postsPerPage={postsPerPage}
              totalPosts={restaurantData.length}
              paginate={paginate}
            />
          }
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default RestaurantPage;
