import { axiosMock, mock } from "../mocks";
import ordersDatas from "../mocks/orders/orders.json";

mock.onGet("/orders").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { orders: ordersDatas }]);
    }, 2000);
  });
});

mock.onDelete(/\/orders\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([202, { message: "deleted successfully" }]);
    }, 500);
  });
});

export const getOrdersApi = axiosMock.get("/orders");

export const deleteOrdersApi = (id) => axiosMock.delete(`/orders/${id}`);
