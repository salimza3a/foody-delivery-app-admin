import "./category-style.css";

function CategoryOption() {
  return (
    <select className="productOption">
      <option>Category type</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
}

export default CategoryOption;
