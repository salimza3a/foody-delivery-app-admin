import "./productCardStyle.css";
import RubbishBin from "../../../images/icons/bin.svg";
function ProductCard({ name, restaurant, image_url, price, id, deleteItem }) {
  return (
    <>
      <div className="cardItem">
        <div className="image-container">
          <img src={image_url} alt="" />
        </div>
        <h3 className="foodName">{name}</h3>
        <p className="foodCompany">{restaurant}</p>
        <span className="foodPrice">{price}</span>
        <button className="rubbishBin" onClick={() => deleteItem(id)}>
          <img src={RubbishBin} alt="bin" />
        </button>
        {}
      </div>
    </>
  );
}

export default ProductCard;
