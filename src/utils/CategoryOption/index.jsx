import "./category-style.css";
import { useSelector } from "react-redux";
import defaultCatalogData from "../../mocks/category/category.json";
function CategoryOption({ optionName }) {
  const state = useSelector((state) => state.category.categoryData);
  let categoryName;
  if (state.length === 0) {
    categoryName = defaultCatalogData.map((item) => item.slug);
  } else {
    categoryName = state.map((item) => item.slug);
  }

  const newArr = [...new Set(categoryName)];

  return (
    <>
      <select
        className="productOption"
        onChange={(e) => optionName(e.target.value)}
      >
        <option value="all">All Category</option>
        {newArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      ;
    </>
  );
}

export default CategoryOption;
