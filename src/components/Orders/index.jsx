import OrderTable from "./OrderTable";
import "./order-page.css";
import { useEffect, useState } from "react";
import { deleteOrdersApi, getOrdersApi } from "../../api/orders";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function OrderPage() {
  const [ordersValues, setOrdersValues] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  function getOrders() {
    getOrdersApi.then((res) => setOrdersValues(res.data.orders));
  }

  function deleteOrderItem(id) {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "Attention! If you delete this product, it won't come back...",
      showCancelButton: true,
      confirmButtonColor: "#d63626",
      cancelButtonColor: "#BDBDBD",
      confirmButtonText: "delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrdersApi(id).then((res) => {
          const newArr = ordersValues.filter((item) => item.id !== id);
          setOrdersValues(newArr);
        });
        toast.success("deleted successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
        });
      }
    });
  }

  return (
    <>
      <div className="order-container">
        <div className="order-header">
          <h2>Orders</h2>
        </div>
        <div className="order-main">
          <OrderTable datas={ordersValues} deleteValue={deleteOrderItem} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default OrderPage;
