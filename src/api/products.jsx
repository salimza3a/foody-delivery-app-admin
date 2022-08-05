import { axiosMock, mock } from "../mocks";
import productDatas from "../mocks/products/products.json";

mock.onGet("/products").reply(200, {
  products: productDatas,
});

export const getProductsApi = axiosMock.get("/products");
