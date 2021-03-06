import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//install redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";

const reduxStore = createStore(
  rootReducer,
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
