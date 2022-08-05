import OrderTable from "./OrderTable";
import "./order-page.css";
function OrderPage() {
  return (
    <>
      <div className="order-container">
        <div className="order-header">
          <h2>Orders</h2>
        </div>
        <div className="order-main">
          <OrderTable />
        </div>
      </div>
    </>
  );
}

export default OrderPage;
