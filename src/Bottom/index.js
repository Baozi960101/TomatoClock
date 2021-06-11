import { React, useState } from "react";
import "./index.css";

function Bottom({ status }) {
  return (
    <>
      <div
        className={
          status === true ? "bottomBox bottomBoxOn" : "bottomBox bottomBoxOff"
        }
      >
        NEXT : 睜眼5分鐘
      </div>
    </>
  );
}

export default Bottom;
