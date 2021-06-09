import { React, useState } from "react";
import "./index.css";

function BackGround({ status }) {
  return (
    <>
      <div className="backGroundLeft"></div>
      <div className="backGroundChangeRight">
        <div className="menuBox">
          <input className="menuTitleBox" value="" />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default BackGround;
