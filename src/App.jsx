import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import DashBoardPage from "./components/Dashboard";
import RestaurantPage from "./components/Restaurants";
import CategoryPage from "./components/Category";
import OrderPage from "./components/Orders";
import OfferPage from "./components/Offers";
import ProductPage from "./components/ProductPage";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./error";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate replace="true" to="login" />} />
          <Route path="/admin/*" element={<AdminPanel />}>
            <Route index element={<DashBoardPage />} />
            <Route path="dashboard" element={<DashBoardPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="restaurants" element={<RestaurantPage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="orders" element={<OrderPage />} />
            <Route path="offer" element={<OfferPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
