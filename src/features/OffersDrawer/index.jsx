import Form from "react-bootstrap/Form";
import OffersDrawerStyle from "./offersDrawer.module.css";
import UploadIcon from "../../images/icons/upload.svg";
function OffersDrawer() {
  return (
    <>
      <div className={OffersDrawerStyle.formContainer}>
        <h2>Add Offer</h2>
        <div className={OffersDrawerStyle.uploadSection}>
          <p>Upload image</p>
          <div className={OffersDrawerStyle.uploadFile}>
            <label htmlFor="file-input">
              <img src={UploadIcon} alt="" />
            </label>
            <input id="file-input" type="file" style={{ display: "none" }} />

            <p>upload</p>
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
            </Form>
          </div>
        </div>
        <div className={OffersDrawerStyle.actionButtons}>
          <button className={OffersDrawerStyle.cancelBtn}>Cancel</button>
          <button className={OffersDrawerStyle.createBtn}>
            Create Product
          </button>
        </div>
      </div>
    </>
  );
}

export default OffersDrawer;
