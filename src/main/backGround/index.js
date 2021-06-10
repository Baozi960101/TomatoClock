import { React, useEffect, useState } from "react";
import "./index.css";
import Circle from "./img/circle.svg";
import Data from "./img/data.svg";

function BackGround({ Change, status, nowTableStatus }) {
  useEffect(() => {
    console.log(nowTableStatus);
    console.log(status);
  }, [status]);
  useEffect(() => {
    console.log(nowTableStatus);
    console.log(status);
  }, [nowTableStatus]);

  return (
    <>
      <div className="backGroundLeft"></div>
      <div
        className={
          status === true ? "backGroundRight" : "backGroundChangeRight"
        }
      >
        <div
          className={
            status === false && nowTableStatus === "1"
              ? "menuBox menuBoxChangeOn"
              : "menuBox menuBoxChangeOff"
          }
        >
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
        <div
          className={
            status === false && nowTableStatus === "2"
              ? "dataImg menuBoxChangeOn"
              : "dataImg menuBoxChangeOff"
          }
        >
          <img className="dataImg" src={Data} />
        </div>
        <div
          className={
            status === false && nowTableStatus === "3"
              ? "timeBox menuBoxChangeOn"
              : "timeBox menuBoxChangeOff"
          }
        >
          <div className="timeBoxTitle">Time Setting</div>
          <div className="timeBoxMain">
            <div>Working time</div>4
          </div>
          <div className="timeBoxMain">
            <div>Resting time</div>4
          </div>
        </div>
      </div>
    </>
  );
}

export default BackGround;
