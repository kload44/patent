import React from "react";
import AllRoute from "../router";
// import AllRoute from '../../main-component-copy/router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App" id="scrool">
      <AllRoute />
      <ToastContainer />
    </div>
  );
};

export default App;
