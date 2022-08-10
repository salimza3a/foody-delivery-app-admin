import { axiosMock, mock } from "../mocks";

import categoryDatas from "../mocks/category/category.json";

mock.onGet("/category").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { category: categoryDatas }]);
    }, 2000);
  });
});

mock.onDelete(/\/category\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "deleted successfully" }]);
    });
  });
});

export const getCategoryApi = axiosMock.get("/category");

export const deleteCategoryApi = (id) => axiosMock.delete(`/category/${id}`);
