import React from "react";
import ReactDOM from "react-dom";
import Main from "./main/index";
import Header from "./header/index";
import BackGround from "./backGround/index";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <BackGround />
      <Main />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
