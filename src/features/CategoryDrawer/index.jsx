import Form from "react-bootstrap/Form";
import CategoryDrawer from "./categoryDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
import { useFormik } from "formik";
import { setCategoryData } from "../../store/slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryApi } from "../../api/category";
import { useState } from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
function AddProductDrawer() {
  const state = useSelector((state) => state.category.categoryData);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const { t } = useTranslation();
  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]) || "");
    formik.values.image = URL.createObjectURL(e.target.files[0]) || "";

    return formik.values.image;
  }

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      slug: "",
    },
    validationSchema: Yup.object().shape({
      image: Yup.string().required("Required"),

      name: Yup.string().required("Required"),
      slug: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      let id = state.slice(-1)[0].id + 1;
      let item = {
        id,
        image: values.image,
        name: values.name,
        slug: values.slug,
      };
      createCategoryApi(item).then((res) => {
        let newArr = [...state, item];
        dispatch(setCategoryData(newArr));
      });
      formik.handleReset();
      setImage(null);
    },
  });

  return (
    <>
      <div className={CategoryDrawer.formContainer}>
        <h2>{t("category_page.add_category_form.add_category_title")}</h2>
        <Form onSubmit={formik.handleSubmit}>
          <div className={CategoryDrawer.uploadSection}>
            <p>{t("category_page.add_category_form.upload_category_text")}</p>
            <div className={CategoryDrawer.uploadFile}>
              <label htmlFor="file-input">
                {image ? (
                  <img width={150} height={60} src={image} />
                ) : (
                  <img src={UploadIcon} alt="" />
                )}
              </label>
              <input
                id="file-input"
                name="image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
                value={formik.values.image && ""}
              />
              {/* search about value in above it doesn't work  */}

              <p className={image ? "d-none" : "d-block"}>
                {t("category_page.add_category_form.upload_image_text")}
              </p>
            </div>
          </div>
          <div className={CategoryDrawer.formSection}>
            <h2>{t("category_page.add_category_form.add_category_info")}</h2>
            <div className={CategoryDrawer.formElements}>
              <Form.Group className="mb-3 ">
                <Form.Label className={CategoryDrawer.label}>
                  {t("category_page.add_category_form.category_name")}
                </Form.Label>
                <Form.Control
                  className={CategoryDrawer.inputStyle}
                  type="text"
                  placeholder="Soup"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Label className={CategoryDrawer.label}>
                  {t("category_page.add_category_form.category_slug")}
                </Form.Label>
                <Form.Control
                  className={CategoryDrawer.inputStyle}
                  type="text"
                  placeholder="yummy-soup"
                  id="slug"
                  name="slug"
                  onChange={formik.handleChange}
                  value={formik.values.slug}
                />
              </Form.Group>
            </div>
          </div>
          <div className={CategoryDrawer.actionButtons}>
            <button type="button" className={CategoryDrawer.cancelBtn}>
              {t("category_page.add_category_form.category_cancel_btn")}
            </button>
            <button type="submit" className={CategoryDrawer.createBtn}>
              {t("category_page.add_category_form.category_create_btn")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddProductDrawer;
