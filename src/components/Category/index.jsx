import "./category.css";
import MainDrawer from "../../features/Drawer";
import CategoryDrawer from "../../features/CategoryDrawer";
import CategoryTable from "./CategoryTable/category-table";
import { useEffect, useState } from "react";
import { deleteCategoryApi, getCategoryApi } from "../../api/category";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryData } from "../../store/slice/categorySlice";
import { useTranslation } from "react-i18next";
function CategoryPage() {
  const categoryState = useSelector((state) => state.category.categoryData);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  useEffect(() => {
    getCategoryDatas();
  }, []);

  function getCategoryDatas() {
    getCategoryApi.then((res) =>
      dispatch(setCategoryData([...res.data.category]))
    );
  }

  function deleteCategoryPost(id) {
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
        deleteCategoryApi(id).then((res) => {
          console.log(res, "res");
          const newArr = categoryState.filter((item) => item.id !== id);
          dispatch(setCategoryData(newArr));
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

  return (
    <>
      <div className="category-container">
        <div className="category-header">
          <h2>{t("category_page.header.category_title")}</h2>
          <span className="add-category-btn">
            {
              <MainDrawer
                name={t("category_page.header.category_button")}
                drawer={<CategoryDrawer />}
              />
            }
          </span>
        </div>
        <div className="category-main">
          <CategoryTable
            data={categoryState}
            deleteValue={deleteCategoryPost}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default CategoryPage;
