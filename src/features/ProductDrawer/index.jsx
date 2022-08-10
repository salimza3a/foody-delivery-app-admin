import Form from "react-bootstrap/Form";
import ProductDrawerStyle from "./productDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
function AddProductDrawer() {
  return (
    <>
      <div className={ProductDrawerStyle.formContainer}>
        <h2>Add product</h2>
        <div className={ProductDrawerStyle.uploadSection}>
          <p>Upload your product image</p>
          <div className={ProductDrawerStyle.uploadFile}>
            <label htmlFor="file-input">
              <img src={UploadIcon} alt="" />
            </label>
            <input id="file-input" type="file" style={{ display: "none" }} />

            <p>upload</p>
          </div>
        </div>
        <div className={ProductDrawerStyle.formSection}>
          <h2>Add your Product description and necessary information</h2>
          <div className={ProductDrawerStyle.formElements}>
            <Form>
              <Form.Group className="mb-3 ">
                <Form.Label className={ProductDrawerStyle.label}>
                  Name
                </Form.Label>
                <Form.Control
                  className={ProductDrawerStyle.inputStyle}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className={ProductDrawerStyle.label}>
                  Description
                </Form.Label>
                <Form.Control
                  className={ProductDrawerStyle.inputStyle}
                  as="textarea"
                  rows={5}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={ProductDrawerStyle.label}>
                  Price
                </Form.Label>
                <Form.Control
                  className={ProductDrawerStyle.inputStyle}
                  type="number"
                  placeholder="16.90"
                />
              </Form.Group>
              <Form.Label className={ProductDrawerStyle.label}>
                Restaurants
              </Form.Label>

              <Form.Select
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
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form>
          </div>
        </div>
        <div className={ProductDrawerStyle.actionButtons}>
          <button className={ProductDrawerStyle.cancelBtn}>Cancel</button>
          <button className={ProductDrawerStyle.createBtn}>
            Create Product
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProductDrawer;
