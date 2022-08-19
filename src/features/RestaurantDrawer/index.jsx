import Form from "react-bootstrap/Form";
import RestaurantDrawer from "./restaurantDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
import CategoryOption from "../../utils/CategoryOption";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurantData } from "../../store/slice/restaurantSlice";
import { useState } from "react";
import * as Yup from "yup";
import { createRestaurantsApi } from "../../api/restaurants";
import { useTranslation } from "react-i18next";
function AddProductDrawer() {
  const state = useSelector((state) => state.restaurant.restaurantData);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const { t } = useTranslation();
  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]) || "");
    formik.values.restaurant_image =
      URL.createObjectURL(e.target.files[0]) || "";
    return formik.values.restaurant_image;
  }

  const formik = useFormik({
    initialValues: {
      restaurant: "",
      restaurant_image: "",
      category: "",
      cuisine: "",
      price: "",
      delivery_min: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      restaurant: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
      food_name: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      delivery_min: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const id = state.slice(-1)[0].id + 1;
      const item = {
        id,
        restaurant: values.restaurant,
        restaurant_image: values.restaurant_image,
        category: values.category,
        food_name: values.food_name,
        price: values.price,
        delivery_min: values.delivery_min,
        address: values.address,
      };
      createRestaurantsApi(item).then((res) => {
        console.log(res, "response");
        const newArr = [...state, item];
        dispatch(setRestaurantData(newArr));
      });

      formik.resetForm();
      values.food_name = "";
      setImage(null);
    },
  });

  function getCategoryName(param) {
    formik.values.category = param;
    return formik.values.category;
  }
  return (
    <>
      <div className={RestaurantDrawer.formContainer}>
        <h2>
          {t("restaurants_page.add_restaurant_form.add_restaurant_title")}
        </h2>
        <Form onSubmit={formik.handleSubmit}>
          <div className={RestaurantDrawer.uploadSection}>
            <p>
              {t("restaurants_page.add_restaurant_form.upload_restaurant_text")}
            </p>
            <div className={RestaurantDrawer.uploadFile}>
              <label htmlFor="file-input">
                {image ? (
                  <img alt="" width={150} height={60} src={image} />
                ) : (
                  <img src={UploadIcon} alt="" />
                )}
              </label>
              <input
                id="file-input"
                name="restaurant_image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
                value={formik.values.restaurant_image && ""}
              />
              {/* search about value in above it doesn't work  */}

              <p className={image ? "d-none" : "d-block"}>
                {t("restaurants_page.add_restaurant_form.upload_image_text")}
              </p>
            </div>
          </div>

          <div className={RestaurantDrawer.formSection}>
            <h2>
              {t("restaurants_page.add_restaurant_form.add_restaurant_info")}
            </h2>
            <div className={RestaurantDrawer.formElements}>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>
                  {t("restaurants_page.add_restaurant_form.restaurant_name")}
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="text"
                  name="restaurant"
                  onChange={formik.handleChange}
                  value={formik.values.restaurant}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className={RestaurantDrawer.label}>
                  {t("restaurants_page.add_restaurant_form.restaurant_cuisine")}
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  as="textarea"
                  rows={3}
                  name="food_name"
                  placeholder="Shah Plov"
                  onChange={formik.handleChange}
                  value={formik.values.food_name}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>
                  {t(
                    "restaurants_page.add_restaurant_form.restaurant_delivery_price"
                  )}
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="number"
                  placeholder="13"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>
                  {t(
                    "restaurants_page.add_restaurant_form.restaurant_delivery_time"
                  )}
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="number"
                  placeholder="6"
                  name="delivery_min"
                  onChange={formik.handleChange}
                  value={formik.values.delivery_min}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>
                  {t("restaurants_page.add_restaurant_form.restaurant_address")}
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="text"
                  placeholder="Somewhere in Baku"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </Form.Group>
              <Form.Label className={RestaurantDrawer.label}>
                {t("restaurants_page.add_restaurant_form.restaurant_category")}
              </Form.Label>
              <div className={RestaurantDrawer.categoryDrawer}>
                <CategoryOption optionName={getCategoryName} />
              </div>
            </div>
          </div>
          <div className={RestaurantDrawer.actionButtons}>
            <button type="button" className={RestaurantDrawer.cancelBtn}>
              {t("restaurants_page.add_restaurant_form.restaurant_cancel_btn")}
            </button>
            <button type="submit" className={RestaurantDrawer.createBtn}>
              {t("restaurants_page.add_restaurant_form.restaurant_create_btn")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddProductDrawer;
