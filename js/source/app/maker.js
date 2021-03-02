'use strict';

import React from 'react';
import StepChooseBackground from "./backgroundStep";
import StepChooseDecore from "./decoreStep";
import StepTextTyping from "./textStep";
import {useSelector} from "react-redux";


export function SequenceOfSteps() {

  let step = useSelector(state => state.navigation.isVisible);

  switch (step) {
    case 1:
      return <StepChooseBackground/>;
    case 2:
      return <StepChooseDecore/>;
    case 3:
      return <StepTextTyping/>;
    default:
      return <StepChooseBackground/>;
  }
}