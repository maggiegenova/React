import { createStore } from "redux"; //store that contains all of the reducers and all of the applications data or states
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
