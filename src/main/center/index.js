import { React, useState, useEffect } from "react";
import "./index.css";
import Stop from "./img/stop.svg";
import Pause from "./img/pause.svg";
import Start from "./img/start.svg";

function Center({ status, minutetTime, secondTime }) {
  const [minutetData, setMinuteDatat] = useState("");
  const [secondData, setSecondData] = useState("");
  const [timeOn, setTimeOn] = useState(false);

  let allSecond = Number(minutetTime) * 60 + Number(secondTime);
  let minutet = Math.floor(allSecond / 60);
  let second = Math.floor(allSecond % 60);

  useEffect(() => {
    setMinuteDatat(minutet);
    setSecondData(second);
  }, [minutetTime, secondTime]);

  var out;

  function start() {
    setTimeOn(true);
    if (timeOn === true) {
      return;
    }
    out = setTimeout(start, 1000);
    second -= 1;
    setSecondData(second);
    console.log(second);
  }

  function stop() {
    clearTimeout(out);
    console.log(secondData);
  }

  return (
    <>
      <div className="mainBox">
        <div className={status === true ? "circle" : "circleOn"}>
          <div className="clockClass clockTopTitle">小拇指伏地挺身</div>
          <div className="clockClass clockMidTitle">
            {minutetData < 10 ? "0" + minutetData : minutetData} :
            {secondData < 10 ? "0" + secondData : secondData}
          </div>
          <div className="clockClass clockbotTitle">
            <div className="clockBot">
              <img className="clockBotLogo" src={Stop} />
            </div>
            <div className="clockBot">
              <img className="clockBotLogo" src={Start} onClick={start} />
            </div>
            <div className="clockBot">
              <img className="clockBotLogo" src={Pause} onClick={stop} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Center;
