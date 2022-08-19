import Form from "react-bootstrap/Form";
import OffersDrawerStyle from "./offersDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setOfferData } from "../../store/slice/offerSlice";
import { useState } from "react";
import { createOffersApi } from "../../api/offers";
import { useTranslation } from "react-i18next";
function OffersDrawer() {
  const state = useSelector((state) => state.offer.offerData);
  const dispatch = useDispatch();
  console.log(state, "state");
  const { t } = useTranslation();
  const [image, setImage] = useState();

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]) || "");
    formik.values.image = URL.createObjectURL(e.target.files[0]) || "";
    return formik.values.image;
  }

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      descriptions: "",
    },
    validationSchema: Yup.object().shape({
      image: Yup.string().required("Required"),

      title: Yup.string().required("Required"),
      descriptions: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      let id = state.slice(-1)[0].id + 1;
      let item = {
        id,
        image: values.image,
        title: values.title,
        descriptions: values.descriptions,
      };
      createOffersApi(item).then((res) => {
        console.log(res, "response");
        let newArr = [...state, item];
        dispatch(setOfferData(newArr));
      });

      formik.handleReset();
      setImage(null);
    },
  });
  return (
    <>
      <div className={OffersDrawerStyle.formContainer}>
        <h2>{t("offers_page.add_offers_form.add_offers_title")}</h2>
        <Form onSubmit={formik.handleSubmit}>
          <div className={OffersDrawerStyle.uploadSection}>
            <p>{t("offers_page.add_offers_form.upload_category_text")}</p>
            <div className={OffersDrawerStyle.uploadFile}>
              <label htmlFor="file-input">
                {image ? (
                  <img alt="" width={150} height={60} src={image} />
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
              {formik.touched.image && formik.errors.image ? (
                <div className={OffersDrawerStyle.errorAlert}>
                  {formik.errors.image}
                </div>
              ) : null}
              <p className={image ? "d-none" : "d-block"}>
                {t("offers_page.add_offers_form.upload_image_text")}
              </p>
            </div>
          </div>
          <div className={OffersDrawerStyle.formSection}>
            <h2>{t("offers_page.add_offers_form.offer_info")}</h2>
            <div className={OffersDrawerStyle.formElements}>
              <Form.Group className="mb-3 ">
                <Form.Label className={OffersDrawerStyle.label}>
                  {t("offers_page.add_offers_form.offer_title")}
                </Form.Label>
                <Form.Control
                  className={OffersDrawerStyle.inputStyle}
                  type="text"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </Form.Group>
              {formik.touched.title && formik.errors.title ? (
                <div className={OffersDrawerStyle.errorAlert}>
                  {formik.errors.title}
                </div>
              ) : null}
              <Form.Group className="mb-3">
                <Form.Label className={OffersDrawerStyle.label}>
                  {t("offers_page.add_offers_form.offer_desc")}
                </Form.Label>
                <Form.Control
                  className={OffersDrawerStyle.inputStyle}
                  as="textarea"
                  rows={4}
                  name="descriptions"
                  onChange={formik.handleChange}
                  value={formik.values.descriptions}
                />
              </Form.Group>
              {formik.touched.descriptions && formik.errors.descriptions ? (
                <div className={OffersDrawerStyle.errorAlert}>
                  {formik.errors.descriptions}
                </div>
              ) : null}
            </div>
          </div>
          <div className={OffersDrawerStyle.actionButtons}>
            <button type="button" className={OffersDrawerStyle.cancelBtn}>
              {t("offers_page.add_offers_form.offer_cancel_btn")}
            </button>
            <button type="submit" className={OffersDrawerStyle.createBtn}>
              {t("offers_page.add_offers_form.offer_create_btn")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default OffersDrawer;
