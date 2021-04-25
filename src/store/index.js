import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  counter: "default mission",
  turn: 1,
  leftName: "default name",
  leftFaction: "default faction",
  leftCP: 0,
  leftPrimary2: 0,
  leftPrimary3: 0,
  leftPrimary4: 0,
  leftPrimary5: 0,
  leftSecondary1: "secondary 1",
  leftSecondary2: "secondary 2",
  leftSecondary3: "secondary 3",
  leftSecondaryVal1: 0,
  leftSecondaryVal2: 0,
  leftSecondaryVal3: 0,
  rightName: "default name",
  rightFaction: "default faction",
  rightCP: 0,
  rightPrimary2: 0,
  rightPrimary3: 0,
  rightPrimary4: 0,
  rightPrimary5: 0,
  rightSecondary1: "secondary 1",
  rightSecondary2: "secondary 2",
  rightSecondary3: "secondary 3",
  rightSecondaryVal1: 0,
  rightSecondaryVal2: 0,
  rightSecondaryVal3: 0,

};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
