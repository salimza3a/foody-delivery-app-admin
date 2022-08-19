import { axiosMock, mock } from "../mocks";
import productDatas from "../mocks/products/products.json";

mock.onGet("/products").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { products: productDatas }]);
    }, 2000);
  });
});

mock.onPost("/products").reply((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, { message: "Created Successfully" }]);
    }, 2000);
  });
});

mock.onDelete(/\/products\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 500);
  });
});

export const getProductsApi = axiosMock.get("/products");
export const createProductsApi = (item) => axiosMock.post(`/products`, item);
export const deleteProductsApi = (id) => axiosMock.delete(`/products/${id}`);
