import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";
import { store } from "./store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </I18nextProvider>
  </Provider>
);
