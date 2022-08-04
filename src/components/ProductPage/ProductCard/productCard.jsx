import "./productCardStyle.css";
import RubbishBin from "../../../images/icons/bin.svg";
function ProductCard() {
  return (
    <>
      <div className="cardItem">
        <img
          src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg"
          alt="pizza"
        />
        <h3 className="foodName">Marqarita</h3>
        <p className="foodCompany">Papa John's</p>
        <span className="foodPrice">16$</span>
        <button className="rubbishBin">
          <img src={RubbishBin} alt="bin" />
        </button>
        {}
      </div>
    </>
  );
}

export default ProductCard;
