import { React, useEffect, useState } from "react";
import "./index.css";
import Circle from "./img/circle.svg";
import Data from "./img/data.svg";
import Center from "../center/index";

function BackGround({ Change, status, nowTableStatus }) {
  const [opTime, setOptime] = useState([]);
  const [minutetTime, setMinutetTime] = useState("1");
  const [secondTime, setSecondTime] = useState("1");

  useEffect(() => {
    let arr = [];
    for (let x = 0; x < 60; x++) {
      arr.push(x);
    }
    setOptime(arr);
  }, []);

  function addMinutet(e) {
    setMinutetTime(e.target.value);
  }

  function addSecond(e) {
    setSecondTime(e.target.value);
  }

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
            <div>Minute time</div>
            <select
              className="optionUi"
              value={minutetTime}
              onChange={addMinutet}
            >
              {opTime.map((item) => {
                return (
                  <option className="optionUicolor" key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="timeBoxMain">
            <div>Second time</div>
            <select
              className="optionUi"
              value={secondTime}
              onChange={addSecond}
            >
              {opTime.map((item) => {
                return (
                  <option className="optionUicolor" key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <Center
        status={status}
        minutetTime={minutetTime}
        secondTime={secondTime}
      />
    </>
  );
}

export default BackGround;
