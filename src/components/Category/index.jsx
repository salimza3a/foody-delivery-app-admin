import "./category.css";
import MainDrawer from "../../features/Drawer";
import CategoryDrawer from "../../features/CategoryDrawer";
import TablePaginationActions from "./category-table";
function Category() {
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
          <TablePaginationActions />
        </div>
      </div>
    </>
  );
}

export default Category;
