import React from "react";
import ReactDOM from "react-dom";
import Left from "./left/index";
import Center from "./center/index";
import Right from "./right/index";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="box">
      <Left />
      <Center />
      <Right />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
