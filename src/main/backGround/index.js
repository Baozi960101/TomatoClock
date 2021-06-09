import { React, useState } from "react";
import "./index.css";
import Circle from "./img/circle.svg";

function BackGround({ status }) {
  return (
    <>
      <div className="backGroundLeft"></div>
      <div className="backGroundChangeRight">
        <div className="menuBox">
          <input className="menuTitleBox" value="" />
          <div className="menuMainBox">
            <div className="menuMainTop"></div>
            <div className="menuMainProject">
              <div className="menuMainimg">
                <img src={Circle} />
              </div>
              <div className="menuMainText">5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackGround;
