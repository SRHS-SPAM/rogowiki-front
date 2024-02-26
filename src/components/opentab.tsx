import React from "react";
import logo from "  ./logo.svg";
import "./App.css";

function App() {
  return (
    <div style="width: 100%; height: 100%; position: relative">
      <div style="width: 1120px; height: 0px; left: 0px; top: 72px; position: absolute; border: 3px #CCCCCC solid"></div>
      <div style="left: 7px; top: 0px; position: absolute; justify-content: center; align-items: center; gap: 16px; display: inline-flex">
        <div style="width: 12.50px; height: 25px; transform: rotate(90deg); transform-origin: 0 0; border: 4px #757575 solid"></div>
        <div style="color: black; font-size: 40px; font-family: Pretendard; font-weight: 500; word-wrap: break-word">
          논란
        </div>
      </div>
      <div style="width: 1016px; left: 48px; top: 123px; position: absolute; color: #666666; font-size: 24px; font-family: Pretendard; font-weight: 400; word-wrap: break-word">
        항상 배가 고프다.
      </div>
    </div>
  );
}

export default App;
