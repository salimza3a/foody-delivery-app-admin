import Form from "react-bootstrap/Form";
import ProductDrawerStyle from "./productDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import restaurantData from "../../mocks/restaurants/restaurants.json";
import productData from "../../mocks/products/products.json";
import { createProductsApi } from "../../api/products";
import { setProductDatas } from "../../store/slice/productSlice";
import { useTranslation } from "react-i18next";
function AddProductDrawer() {
  const state = useSelector((state) => state.restaurant.restaurantData);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let restaurantsName;

  if (state) {
    restaurantsName = restaurantData.map((item) => item.restaurant);
  } else {
    restaurantsName = state.map((item) => item.restaurant);
  }

  const [image, setImage] = useState();
  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]) || "");
    formik.values.image_url = URL.createObjectURL(e.target.files[0]) || "";
    return formik.values.image_url;
  }

  const formik = useFormik({
    initialValues: {
      image_url: "",
      name: "",
      description: "",
      price: "",
      restaurant: "",
    },
    validationSchema: Yup.object().shape({
      image_url: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      restaurant: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const item = {
        image_url: values.image_url,
        name: values.name,
        description: values.description,
        price: values.price,
        restaurant: values.restaurant,
      };

      createProductsApi(item).then((res) => {
        const newArr = [...(state.length === 0 ? productData : state), item];
        dispatch(setProductDatas(newArr));
      });
    },
  });

  function getOptionValue(value) {
    formik.values.restaurant = value;

    return formik.values.restaurant;
  }

  return (
    <>
      <div className={ProductDrawerStyle.formContainer}>
        <h2>{t("products_page.add_product_form.add_product_title")}</h2>
        <Form onSubmit={formik.handleSubmit}>
          <div className={ProductDrawerStyle.uploadSection}>
            <p>{t("products_page.add_product_form.upload_product_text")}</p>
            <div className={ProductDrawerStyle.uploadFile}>
              <label htmlFor="file-input">
                {image ? (
                  <img alt="" width={150} height={60} src={image} />
                ) : (
                  <img src={UploadIcon} alt="" />
                )}
              </label>
              <input
                id="file-input"
                name="image_url"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
                value={formik.values.image_url && ""}
              />
              {/* search about value in above it doesn't work  */}

              <p className={image ? "d-none" : "d-block"}>
                {t("products_page.add_product_form.upload_image_text")}
              </p>
            </div>
          </div>
          <div className={ProductDrawerStyle.formSection}>
            <h2>{t("products_page.add_product_form.product_desc_text")}</h2>
            <div className={ProductDrawerStyle.formElements}>
              <Form.Group className="mb-3 ">
                <Form.Label className={ProductDrawerStyle.label}>
                  {t("products_page.add_product_form.product_name")}
                </Form.Label>
                <Form.Control
                  className={ProductDrawerStyle.inputStyle}
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className={ProductDrawerStyle.label}>
                  {t("products_page.add_product_form.product_desc")}
                </Form.Label>
                <Form.Control
                  className={ProductDrawerStyle.inputStyle}
                  as="textarea"
                  rows={5}
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={ProductDrawerStyle.label}>
                  {t("products_page.add_product_form.product_price")}
                </Form.Label>
                <Form.Control
                  className={ProductDrawerStyle.inputStyle}
                  type="number"
                  placeholder="16.90"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                />
              </Form.Group>
              <Form.Label className={ProductDrawerStyle.label}>
                {t("products_page.add_product_form.product_restaurants")}
              </Form.Label>

              <Form.Select
                onChange={(e) => getOptionValue(e.target.value)}
                style={{
                  color: "#c7c7c7",
                  fontSize: 16,
                  fontFamily: "roboto",
                  fontWeight: 500,
                  borderRadius: 14,
                  backgroundColor: "#5A5B70",
                  border: "transparent",
                }}
              >
                {restaurantsName.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
          <div className={ProductDrawerStyle.actionButtons}>
            <button type="button" className={ProductDrawerStyle.cancelBtn}>
              {t("products_page.add_product_form.product_cancel_btn")}
            </button>
            <button type="submit" className={ProductDrawerStyle.createBtn}>
              {t("products_page.add_product_form.product_create_btn")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddProductDrawer;
