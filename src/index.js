import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ControlPanel from "./components/ControlPanel"
import LeftPlayer from "./components/LeftPlayer"
import RightPlayer from "./components/RightPlayer"

ReactDOM.render(
  <React.StrictMode>
    <LeftPlayer/>
    <ControlPanel/>
    <RightPlayer/>
  </React.StrictMode>,
  document.getElementById('root')
);
