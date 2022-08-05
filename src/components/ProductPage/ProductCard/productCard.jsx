import "./productCardStyle.css";
import RubbishBin from "../../../images/icons/bin.svg";
function ProductCard({ name, restaurant, image_url, price }) {
  return (
    <>
      <div className="cardItem">
        <img src={image_url} alt={name} />
        <h3 className="foodName">{name}</h3>
        <p className="foodCompany">{restaurant}</p>
        <span className="foodPrice">{price}</span>
        <button className="rubbishBin">
          <img src={RubbishBin} alt="bin" />
        </button>
        {}
      </div>
    </>
  );
}

export default ProductCard;
