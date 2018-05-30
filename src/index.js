import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import store from "./redux";
import { Provider } from "react-redux";

const App1 = () => {
  return (
    <Provider store={store}>
      <div>
        <Router />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App1 />, document.getElementById("root"));
