import { React, useState } from "react";
import "./index.css";
import Settings from "./img/settings.svg";
import List from "./img/list.svg";
import data from "./img/data.svg";

function Right({ Change, status }) {
  return (
    <>
      <div className="rightBox">
        <div className="rightImgBox">
          <div className="rightImgClass" onClick={Change}>
            <img className="rightImg" src={List} />
          </div>
        </div>
        <div className="rightImgBox">
          <div className="rightImgClass" onClick={Change}>
            <img className="rightImg" src={data} />
          </div>
        </div>
        <div className="rightImgBox">
          <div className="rightImgClass" onClick={Change}>
            <img className="rightImg" src={Settings} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Right;
