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
import CategoryPage from "../Category";
import RestaurantPage from "../Restaurants";
import OrderPage from "../Orders";
import OfferPage from "../Offers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/slice/loginSlice";
import ProductPage from "../ProductPage";
import Dropdowns from "../../utils/Dropdowns";
import { useTranslation } from "react-i18next";

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
function AdminPanel(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  function logOutUser() {
    localStorage.removeItem("isLogin");
    dispatch(setLogin(false));
    navigate("/login");
  }
  return (
    <>
      <div className={AdminStyle.container}>
        <div className={AdminStyle.header}>
          <div className={AdminStyle.logo}>
            <img src={FoodyLogo} alt="foody logo" />
          </div>
          <div className={AdminStyle.otherHeaderElements}>
            <span className={AdminStyle.addProduct}>
              <MainDrawer
                drawer={<AddProductDrawer />}
                name={t("header.add_product_button")}
              />
            </span>
            {/* Language section */}
            <span className="mt-2">{<Dropdowns />}</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Avatar} alt="" className={AdminStyle.avatar} />
              <span className={AdminStyle.adminText}>
                {t("header.admin_text")}
              </span>
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
                        {t("sidebar.sidebar_dashboard")}{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Products} alt="products link" />
                      <NavLink className="nav-link" to="/admin/products">
                        {t("sidebar.sidebar_products")}{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Restaurants} alt="restaurants link" />{" "}
                      <NavLink className="nav-link" to="/admin/restaurants">
                        {t("sidebar.sidebar_restaurants")}{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Category} alt="category link" />{" "}
                      <NavLink className="nav-link" to="/admin/category">
                        {t("sidebar.sidebar_category")}{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Orders} alt="orders link" />{" "}
                      <NavLink className="nav-link" to="/admin/orders">
                        {" "}
                        {t("sidebar.sidebar_orders")}{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Offer} alt="offer link" />{" "}
                      <NavLink className="nav-link" to="/admin/offer">
                        {t("sidebar.sidebar_offers")}{" "}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <img src={Logout} alt="logout link" />{" "}
                      <button
                        className={AdminStyle.logOutBtn}
                        onClick={() => logOutUser()}
                      >
                        {t("sidebar.sidebar_logout")}{" "}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
