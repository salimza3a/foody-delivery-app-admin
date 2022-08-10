import { axiosMock, mock } from "../mocks";
import restaurantsDatas from "../mocks/restaurants/restaurants.json";

mock.onGet("/restaurants").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { restaurants: restaurantsDatas }]);
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

export const deleteRestaurantsApi = (id) =>
  axiosMock.delete(`/restaurants/${id}`);
