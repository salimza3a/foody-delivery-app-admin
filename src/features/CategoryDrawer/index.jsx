import Form from "react-bootstrap/Form";
import CategoryDrawer from "./categoryDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
function AddProductDrawer() {
  return (
    <>
      <div className={CategoryDrawer.formContainer}>
        <h2>Add Category</h2>
        <div className={CategoryDrawer.uploadSection}>
          <p>Upload image</p>
          <div className={CategoryDrawer.uploadFile}>
            <label htmlFor="file-input">
              <img src={UploadIcon} alt="" />
            </label>
            <input id="file-input" type="file" style={{ display: "none" }} />

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
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Label className={CategoryDrawer.label}>Slug</Form.Label>
                <Form.Control
                  className={CategoryDrawer.inputStyle}
                  type="text"
                  placeholder="yummy-soup"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className={CategoryDrawer.actionButtons}>
          <button className={CategoryDrawer.cancelBtn}>Cancel</button>
          <button className={CategoryDrawer.createBtn}>Create Product</button>
        </div>
      </div>
    </>
  );
}

export default AddProductDrawer;
