import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import DashBoardPage from "./components/Dashboard";
import RestaurantPage from "./components/Restaurants";
import CategoryPage from "./components/Category";
import OrderPage from "./components/Orders";
import OfferPage from "./components/Offers";
import ProductPage from "./components/ProductPage";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPanel />}>
            <Route path="dashboard" element={<DashBoardPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="restaurants" element={<RestaurantPage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="orders" element={<OrderPage />} />
            <Route path="offer" element={<OfferPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
