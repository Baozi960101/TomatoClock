import { React, useState } from "react";
import "./index.css";
import Logo from "./img/tomatoLogo.png";

function Header() {
  return (
    <div className="headerBox">
      <div className="headerLeftBox">
        <img className="tomatologo" src={Logo} />
        <div className="LeftBoxTitle">To - Do - List Alarm System</div>
      </div>
      <div className="headerRightBox">菜單</div>
    </div>
  );
}

export default Header;
