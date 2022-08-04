import Paginations from "../../utils/Pagination";
import ProductCard from "./ProductCard/productCard";
import "./products.css";
function ProductPage() {
  return (
    <>
      <div className="productContainer">
        <div className="productHeader">
          <h2>Products</h2>
          <select className="productOption">
            <option>Category type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="productMain">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="productPagination">
          <Paginations />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
