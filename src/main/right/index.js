import { React, useState } from "react";
import "./index.css";
import Settings from "./img/settings.svg";
import List from "./img/list.svg";
import data from "./img/data.svg";
import BackGround from "../backGround/index";
import Bottom from "../../Bottom/index";

function Right({ Change, status }) {
  const [nowStatus, setNowStatus] = useState("1");

  function ofAdd() {
    if (nowStatus === "2" && status === true) {
      Change();
    }
    if (nowStatus === "3" && status === true) {
      Change();
    }
    setNowStatus("1");
    if (nowStatus === "1") {
      Change();
    }
    setNowStatus("1");
  }
  function ofDate() {
    if (nowStatus === "1" && status === true) {
      Change();
    }
    if (nowStatus === "3" && status === true) {
      Change();
    }
    if (nowStatus === "2") {
      Change();
    }
    setNowStatus("2");
  }
  function ofTime() {
    if (nowStatus === "1" && status === true) {
      Change();
    }
    if (nowStatus === "2" && status === true) {
      Change();
    }
    if (nowStatus === "3") {
      Change();
    }
    setNowStatus("3");
  }

  return (
    <>
      <div className={status === true ? "rightBox" : "onRight"}>
        <div className="rightImgBox">
          <div className="rightImgClass" onClick={ofAdd}>
            <img className="rightImg" src={List} />
          </div>
        </div>
        <div className="rightImgBox">
          <div className="rightImgClass" onClick={ofDate}>
            <img className="rightImg" src={data} />
          </div>
        </div>
        <div className="rightImgBox">
          <div className="rightImgClass" onClick={ofTime}>
            <img className="rightImg" src={Settings} />
          </div>
        </div>
      </div>
      <BackGround Change={Change} status={status} nowTableStatus={nowStatus} />
      <Bottom status={status} />
    </>
  );
}

export default Right;
