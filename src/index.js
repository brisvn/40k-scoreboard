import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ControlPanel from "./components/ControlPanel"
import LeftPlayer from "./components/LeftPlayer"
import RightPlayer from "./components/RightPlayer"
import TurnCounter from "./components/TurnCounter"

ReactDOM.render(
  <React.StrictMode>
    <LeftPlayer/>
    <ControlPanel/>
    <RightPlayer/>
    <TurnCounter/>
  </React.StrictMode>,
  document.getElementById('root')
);
