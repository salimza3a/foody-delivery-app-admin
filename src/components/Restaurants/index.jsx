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
import { useSelector, useDispatch } from "react-redux";
import {
  filterRestaurantData,
  setRestaurantData,
} from "../../store/slice/restaurantSlice";

import { useTranslation } from "react-i18next";
function RestaurantPage() {
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const { t } = useTranslation();
  const restaurantState = useSelector(
    (state) => state.restaurant.restaurantData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getRestaurantsData();
  }, []);

  function getRestaurantsData() {
    getRestaurantsApi.then((res) => {
      dispatch(setRestaurantData([...res.data.restaurants]));
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
          const newArr = restaurantState.filter((item) => item.id !== id);
          dispatch(setRestaurantData(newArr));
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
  function getCategoryName(arg) {
    const newArr = restaurantState.filter((item) => item.category === arg);
    dispatch(filterRestaurantData(newArr));
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = restaurantState.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="restaurant-container">
        <div className="restaurant-header">
          <h2>{t("restaurants_page.header.restaurants_title")}</h2>
          <div className="right-side-items">
            <CategoryOption optionName={getCategoryName} />
            <span>
              {
                <MainDrawer
                  name={t("restaurants_page.header.restaurants_button")}
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
              totalPosts={restaurantState.length}
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
