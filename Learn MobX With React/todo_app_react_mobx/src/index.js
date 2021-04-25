import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";

import store from "./Store/TodoStore"
import { Provider } from "mobx-react";

ReactDOM.render(
    <Provider store={store}>
      {/* <React.StrictMode> */}
          <App />
      {/* </React.StrictMode> */}
    </Provider>
  , document.getElementById("root")
)