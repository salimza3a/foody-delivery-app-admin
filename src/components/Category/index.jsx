import "./category.css";
import MainDrawer from "../../features/Drawer";
import CategoryDrawer from "../../features/CategoryDrawer";
import CategoryTable from "./CategoryTable/category-table";
function CategoryPage() {
  return (
    <>
      <div className="category-container">
        <div className="category-header">
          <h2>Category</h2>
          <button className="add-category-btn">
            {<MainDrawer name="Add Category" drawer={<CategoryDrawer />} />}
          </button>
        </div>
        <div className="category-main">
          <CategoryTable />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
