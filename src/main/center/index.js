import { React, useState, useEffect, useRef } from "react";
import "./index.css";
import Stop from "./img/stop.svg";
import Pause from "./img/pause.svg";
import Start from "./img/start.svg";

function Center({ status, minutetTime, secondTime }) {
  const [minutetData, setMinuteData] = useState("");
  const [secondData, setSecondData] = useState("");
  const [timeGo, setTimeGo] = useState(false);
  const [timeOut, setTimeOut] = useState(true);
  const goRef = useRef("");
  const minutetRef = useRef("")
  const secondRef = useRef(7)

  useEffect(() => {
    setMinuteData(minutetTime);
    setSecondData(secondTime);
  }, [minutetTime, secondTime]);

  function start() {
    setTimeGo(true);
    if (timeGo === true) {
      return;
    }
    setTimeOut(true);
    function so() {
      if (secondTime == 0) {
        if (minutetTime == 0) {
          console.log("時間到");
          return;
        }
        minutetTime = parseInt(minutetTime) - 1;
        setMinuteData(minutetTime);
        secondTime = 60;
      }
      secondTime -= 1;
      secondRef.current = secondTime
      setSecondData(secondRef.current);
      console.log("再跑了",secondRef.current);
    }
    goRef.current = setInterval(so, 1000);
  }

  function stop() {
    setTimeOut(false);
    if (timeOut === false) {
      return;
    }
    setTimeGo(false);
    clearInterval(goRef.current);
    setSecondData(secondRef.current);
    console.log("停止了",secondRef.current);
  }

  function rest() {
    setTimeGo(false);
    setTimeOut(true);
    clearInterval(goRef.current);
    setSecondData(secondTime);
    setMinuteData(minutetTime);
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
            <div className="clockBot" onClick={rest}>
              <img className="clockBotLogo" src={Stop} />
            </div>
            <div className="clockBot" onClick={start}>
              <img className="clockBotLogo" src={Start} />
            </div>
            <div className="clockBot" onClick={stop}>
              <img className="clockBotLogo" src={Pause} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Center;
