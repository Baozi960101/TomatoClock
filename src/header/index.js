import { React, useState } from "react";
import "./index.css";
import Logo from "./img/tomatoLogo.png";
import Menu from "./img/menu.svg";
import Cross from "./img/cross.svg";
import Main from "../main/center/index";
import BackGround from "../main/backGround/index";
import RightBox from "../main/right/index";
import Bottom from "../Bottom/index";

function Header() {
  const [imgChange, setimgChange] = useState(true);

  function Change() {
    if (imgChange === true) {
      setimgChange(false);
    } else {
      setimgChange(true);
    }
  }

  return (
    <>
      <div className="headerBox">
        <div className="headerLeftBox">
          <img className="tomatologo" src={Logo} />
          <div className="LeftBoxTitle">To - Do - List Alarm System</div>
        </div>
        <div className="headerRightBox">
          <img
            className="menuLogo"
            onClick={Change}
            src={imgChange === true ? Menu : Cross}
          />
        </div>
      </div>
      <Main status={imgChange} />
      <BackGround status={imgChange} />
      <RightBox Change={Change} status={imgChange} />
      <Bottom Change={Change} status={imgChange} />
    </>
  );
}

export default Header;
