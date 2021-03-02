'use strict';

import React from 'react'
import {useSelector} from "react-redux";
import {store} from "../redux/store";
import {changeStep} from "../actions/actionsCreator";

export default function Nav() {

  let dispatch = store.dispatch,
    step,
    stepsIsDone = useSelector(state => state.navigation.isDone),
    stepIsVisible = useSelector(state => state.navigation.isVisible),
    stepsList;

  step = function (id) {
    return function () {
      dispatch(changeStep(id))
    }
  }

  stepsList = function () {
    let list = [];

    for (let s = 0, iMax = stepsIsDone; s < iMax; s++) {
      let id = s + 1;

      list.push(
        <div className={'nav__item' + (id === iMax ? ' current' : '') + (id === stepIsVisible ? ' active' : '')}
             onClick={step(id)}
             key={id}>
          Step {id}
        </div>
      );
    }

    return list
  }

  return (
    <nav>
      {stepsList()}
    </nav>
  )
}