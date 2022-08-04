import Form from "react-bootstrap/Form";
import RestaurantDrawer from "./restaurantDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
function AddProductDrawer() {
  return (
    <>
      <div className={RestaurantDrawer.formContainer}>
        <h2>Add Restaurant</h2>
        <div className={RestaurantDrawer.uploadSection}>
          <p>Upload image</p>
          <div className={RestaurantDrawer.uploadFile}>
            <label htmlFor="file-input">
              <img src={UploadIcon} alt="" />
            </label>
            <input id="file-input" type="file" style={{ display: "none" }} />

            <p>upload</p>
          </div>
        </div>
        <div className={RestaurantDrawer.formSection}>
          <h2>Add your Restaurants information</h2>
          <div className={RestaurantDrawer.formElements}>
            <Form>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>Name</Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className={RestaurantDrawer.label}>
                  Cuisine
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>
                  Delivery Price $
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="number"
                  placeholder="13"
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>
                  Delivery Min
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="number"
                  placeholder="6"
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label className={RestaurantDrawer.label}>
                  Address
                </Form.Label>
                <Form.Control
                  className={RestaurantDrawer.inputStyle}
                  type="text"
                  placeholder="Somewhere in Baku"
                />
              </Form.Group>
              <Form.Label className={RestaurantDrawer.label}>
                Category
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
        <div className={RestaurantDrawer.actionButtons}>
          <button className={RestaurantDrawer.cancelBtn}>Cancel</button>
          <button className={RestaurantDrawer.createBtn}>Create Product</button>
        </div>
      </div>
    </>
  );
}

export default AddProductDrawer;
