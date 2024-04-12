import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/main-component/App/App";
import reportWebVitals from "./reportWebVitals";
import ModalProvider from "./common/provider/ModalProvider";
import MainProvider from "./common/provider/MainProvider";
import "./css/font-awesome.min.css";
import "./css/themify-icons.css";
import "./css/flaticon.css";
import "./css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Modal from "react-modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ModalProvider />
      <MainProvider>
        <GoogleOAuthProvider clientId="632545618997-d4mmlft95h8qonqrs0c6v8kfgqdgi8jd.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </MainProvider>
    </PersistGate>
  </Provider>
);

Modal.setAppElement("#root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
