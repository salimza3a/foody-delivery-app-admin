import Form from "react-bootstrap/Form";
import CategoryDrawer from "./categoryDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
import { useFormik } from "formik";
import { setCategoryData } from "../../store/slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryApi } from "../../api/category";
import { useState } from "react";
function AddProductDrawer() {
  const state = useSelector((state) => state.category.categoryData);
  const dispatch = useDispatch();
  console.log(state, "state param");
  const [image, setImage] = useState();
  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]) || "");
    formik.values.image = URL.createObjectURL(e.target.files[0]) || "";
    console.log(formik.values.image, "image");

    return formik.values.image;
  }

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      slug: "",
    },

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
    },
  });

  return (
    <>
      <div className={CategoryDrawer.formContainer}>
        <h2>Add Category</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={CategoryDrawer.uploadSection}>
            <p>Upload image</p>
            <div className={CategoryDrawer.uploadFile}>
              <label htmlFor="file-input">
                <img src={UploadIcon} alt="" />
              </label>
              <input
                id="file-input"
                name="image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImage}
                value={formik.values.image}
              />

              <p>upload</p>
            </div>
          </div>
          <div className={CategoryDrawer.formSection}>
            <h2>Add your Category Information</h2>
            <div className={CategoryDrawer.formElements}>
              <Form>
                <Form.Group className="mb-3 ">
                  <Form.Label className={CategoryDrawer.label}>Name</Form.Label>
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
                  <Form.Label className={CategoryDrawer.label}>Slug</Form.Label>
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
              </Form>
            </div>
          </div>
          <div className={CategoryDrawer.actionButtons}>
            <button type="button" className={CategoryDrawer.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={CategoryDrawer.createBtn}>
              Create Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProductDrawer;
