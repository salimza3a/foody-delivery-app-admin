import AdminStyle from "./adminpanel.module.css";
import FoodyLogo from "../../images/foody-logo.svg";
import Avatar from "../../images/icons/avatar.svg";
import Dashboard from "../../images/icons/dashboard.svg";
import Products from "../../images/icons/products.svg";
import Restaurants from "../../images/icons/restaurants.svg";
import Category from "../../images/icons/category.svg";
import Orders from "../../images/icons/orders.svg";
import Offer from "../../images/icons/offer.svg";
import Logout from "../../images/icons/logout.svg";
import MainDrawer from "../../features/Drawer";
import AddProductDrawer from "../../features/ProductDrawer";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import DashBoardPage from "../Dashboard";
import ProductsPage from "../ProductPage";
import CategoryPage from "../Category";
import RestaurantPage from "../Restaurants";
import OrderPage from "../Orders";
import OfferPage from "../Offers";
import LoginPage from "../LoginPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/slice/loginSlice";
import ProductPage from "../ProductPage";
import ErrorPage from "../../error";
import { useEffect, useState } from "react";

function AdminPanel(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOutUser() {
    localStorage.removeItem("isLogin");
    dispatch(setLogin(false));
    navigate("/login");
  }

  // const [auth, setAuth] = useState([]);

  // useEffect(() => {
  //   setAuth(localStorage.getItem("isLogin"));
  // }, []);
  // const login = useSelector((state) => state.login);
  // if (login.isLogin || auth === true) {
  //   <AdminPanel />;
  // } else {
  //   logOutUser();
  // }
  return (
    <>
      <div className={AdminStyle.container}>
        <div className={AdminStyle.header}>
          <div className={AdminStyle.logo}>
            <img src={FoodyLogo} alt="foody logo" />
          </div>
          <div className={AdminStyle.otherHeaderElements}>
            <span className={AdminStyle.addProduct}>
              <MainDrawer drawer={<AddProductDrawer />} name="Add Product" />
            </span>
            {/* Language section */}
            <button
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "transparent",
              }}
            >
              lang
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Avatar} alt="" className={AdminStyle.avatar} />
              <span className={AdminStyle.adminText}>Admin</span>
            </div>
          </div>
        </div>
        <div className={AdminStyle.main}>
          <div className={AdminStyle.aside}>
            <div>
              <div className={AdminStyle.sideBar}>
                <div className={AdminStyle.navigation}>
                  <ul>
                    <li>
                      <img src={Dashboard} alt="dashboard link" />
                      <NavLink className="nav-link" to="/admin/dashboard">
                        Dashboard{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Products} alt="products link" />
                      <NavLink className="nav-link" to="/admin/products">
                        Products{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Restaurants} alt="restaurants link" />{" "}
                      <NavLink className="nav-link" to="/admin/restaurants">
                        Restaurants{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Category} alt="category link" />{" "}
                      <NavLink className="nav-link" to="/admin/category">
                        Category{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Orders} alt="orders link" />{" "}
                      <NavLink className="nav-link" to="/admin/orders">
                        {" "}
                        Orders{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Offer} alt="offer link" />{" "}
                      <NavLink className="nav-link" to="/admin/offer">
                        Offer{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Logout} alt="logout link" />{" "}
                      <button
                        className={AdminStyle.logOutBtn}
                        onClick={() => logOutUser()}
                      >
                        Logout{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={AdminStyle.credits}>
              <h2>salimza3a</h2>
            </div>
          </div>
          <div className={AdminStyle.content}>
            <Outlet />
            <Routes>
              <Route path="/admin/dashboard" element={<DashBoardPage />} />
              <Route path="/admin/products" element={<ProductPage />} />
              <Route path="/admin/restaurants" element={<RestaurantPage />} />
              <Route path="/admin/category" element={<CategoryPage />} />
              <Route path="/admin/orders" element={<OrderPage />} />
              <Route path="/admin/offer" element={<OfferPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
