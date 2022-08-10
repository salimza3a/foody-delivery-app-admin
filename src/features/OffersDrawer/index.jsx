import Form from "react-bootstrap/Form";
import OffersDrawerStyle from "./offersDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setOfferData } from "../../store/slice/offerSlice";
import { useState } from "react";
import { createOffersApi } from "../../api/offers";
function OffersDrawer() {
  const state = useSelector((state) => state.offer.offerData);
  const dispatch = useDispatch();
  console.log(state, "state");

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
    },
  });
  return (
    <>
      <div className={OffersDrawerStyle.formContainer}>
        <h2>Add Offer</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={OffersDrawerStyle.uploadSection}>
            <p>Upload image</p>
            <div className={OffersDrawerStyle.uploadFile}>
              <label htmlFor="file-input">
                {image ? (
                  <img
                    style={{
                      width: "200px",
                      height: "80px",
                      objectFit: "cover",
                      aspectRatio: "auto",
                      borderRadius: "15px",
                    }}
                    src={image}
                    alt=""
                  />
                ) : (
                  <img src={UploadIcon} alt="" />
                )}
              </label>
              <input
                id="file-input"
                name="image"
                type={image ? "" : "file"}
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
              />
              {formik.touched.image && formik.errors.image ? (
                <div className={OffersDrawerStyle.errorAlert}>
                  {formik.errors.image}
                </div>
              ) : null}
              <p className={image && "d-none"}>upload</p>
            </div>
          </div>
          <div className={OffersDrawerStyle.formSection}>
            <h2>Add your Offer information</h2>
            <div className={OffersDrawerStyle.formElements}>
              <Form>
                <Form.Group className="mb-3 ">
                  <Form.Label className={OffersDrawerStyle.label}>
                    Title
                  </Form.Label>
                  <Form.Control
                    className={OffersDrawerStyle.inputStyle}
                    type="text"
                  />
                </Form.Group>
                {formik.touched.title && formik.errors.title ? (
                  <div className={OffersDrawerStyle.errorAlert}>
                    {formik.errors.title}
                  </div>
                ) : null}
                <Form.Group className="mb-3">
                  <Form.Label className={OffersDrawerStyle.label}>
                    Description
                  </Form.Label>
                  <Form.Control
                    className={OffersDrawerStyle.inputStyle}
                    as="textarea"
                    rows={4}
                  />
                </Form.Group>
                {formik.touched.descriptions && formik.errors.descriptions ? (
                  <div className={OffersDrawerStyle.errorAlert}>
                    {formik.errors.descriptions}
                  </div>
                ) : null}
              </Form>
            </div>
          </div>
          <div className={OffersDrawerStyle.actionButtons}>
            <button type="button" className={OffersDrawerStyle.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={OffersDrawerStyle.createBtn}>
              Create Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OffersDrawer;
