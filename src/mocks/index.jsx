import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const mock = new MockAdapter(axios);

export const axiosMock = axios;
