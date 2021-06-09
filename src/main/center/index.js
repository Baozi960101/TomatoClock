import { React, useState, useEffect } from "react";
import "./index.css";
import Bell from "./img/bell.svg";
import Pause from "./img/pause.svg";
import Start from "./img/start.svg";

function Center({ status }) {
  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <>
      <div className="mainBox">
        <div className={status === true ? "circle" : "circleOn"}>
          <div className="clockClass clockTopTitle">小拇指伏地挺身</div>
          <div className="clockClass clockMidTitle">25:00</div>
          <div className="clockClass clockbotTitle">
            <div className="clockBot">
              <img className="clockBotLogo" src={Bell} />
            </div>
            <div className="clockBot">
              <img className="clockBotLogo" src={Start} />
            </div>
            <div className="clockBot">
              <img className="clockBotLogo" src={Pause} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Center;
