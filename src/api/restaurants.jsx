import { axiosMock, mock } from "../mocks";
import restaurantsDatas from "../mocks/restaurants/restaurants.json";

mock.onGet("/restaurants").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { restaurants: restaurantsDatas }]);
    }, 2000);
  });
});
mock.onPost("/restaurants").reply((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, { message: "Created" }, JSON.parse(config.data)]);
    }, 2000);
  });
});
mock.onDelete(/\/restaurants\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 500);
  });
});
export const getRestaurantsApi = axiosMock.get("/restaurants");
export const createRestaurantsApi = (item) =>
  axiosMock.post(`/restaurants`, item);
export const deleteRestaurantsApi = (id) =>
  axiosMock.delete(`/restaurants/${id}`);
