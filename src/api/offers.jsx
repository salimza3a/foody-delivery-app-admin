import { axiosMock, mock } from "../mocks";
import offersData from "../mocks/offers/offers.json";
mock.onGet("/offers").reply((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, { offers: offersData }]);
    }, 2000);
  });
});

mock.onPost("/offers").reply((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, { message: "Created" }, JSON.parse(config.data)]);
    }, 2000);
  });
});

mock.onDelete(/\/offers\/\d+/).reply((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([202, { message: "deleted successfully" }]);
    }, 500);
  });
});

export const getOffersApi = axiosMock.get("/offers");
export const createOffersApi = (item) => axiosMock.post(`/offers`, item);
export const deleteOffersApi = (id) => axiosMock.delete(`/offers/${id}`);
