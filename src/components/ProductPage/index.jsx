import { useEffect, useState } from "react";
import Paginations from "../../utils/Pagination";
import ProductCard from "./ProductCard/productCard";
import { deleteProductsApi, getProductsApi } from "../../api/products";
import "./products.css";
import Swal from "sweetalert2";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryOption from "../../utils/CategoryOption";
import { useDispatch, useSelector } from "react-redux";
import { setProductDatas } from "../../store/slice/productSlice";
function ProductPage() {
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const productState = useSelector((state) => state.product.productDatas);
  const dispatch = useDispatch();
  console.log(productState, "state");

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    getProductsApi.then((res) => {
      dispatch(setProductDatas([...res.data.products]));
    });
  }

  /* Swal Alert */

  function deleteProducts(id) {
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
        deleteProductsApi(id).then((res) => {
          console.log(res, "res");
          const newArr = [...productState].filter((item) => item.id !== id);
          dispatch(setProductDatas(newArr));
          toast.success("deleted successfully", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
          });
        });
      }
    });
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productState.slice(indexOfFirstPost, indexOfLastPost);
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="productContainer">
        <div className="productHeader">
          <h2>Products</h2>
          <CategoryOption />
        </div>
        <div className="productMain">
          {currentPosts?.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              deleteItem={deleteProducts}
            />
          ))}
        </div>
        <div className="productPagination">
          <Paginations
            postsPerPage={postsPerPage}
            totalPosts={productState.length}
            paginate={paginate}
          />
        </div>
      </div>
      <ToastContainer />;
    </>
  );
}

export default ProductPage;
