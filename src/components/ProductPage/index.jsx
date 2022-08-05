import { useEffect, useState } from "react";
import Paginations from "../../utils/Pagination";
import ProductCard from "./ProductCard/productCard";
import { getProductsApi } from "../../api/products";
import "./products.css";
function ProductPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    getProductsApi
      .then((res) => {
        // console.log("res", res.data.products);
        setData([...res.data.products]);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  }
  // console.log(data, "data");

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
          {data?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="productPagination">
          <Paginations />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
