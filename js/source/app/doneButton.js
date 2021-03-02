'use strict';

import React from 'react';
import {store} from "../redux/store";
import {useSelector} from "react-redux";
import {stepIsDone, toNext, toSubmit} from "../actions/actionsCreator";

export default function DoneButton({back}) {

  let dispatch = store.dispatch,
    readyToNext = useSelector(state => state.navigation.toNext),
    isDone = useSelector(state => state.navigation.isDone),
    nextStep,
    readyToSubmit;

  nextStep = function () {
    dispatch(stepIsDone())
    dispatch(toNext(false))
  }

  readyToSubmit = function () {
    dispatch(toSubmit())
  }

  return (
    <button
      type={'button'}
      onClick={isDone === 3 ? readyToSubmit : nextStep}
      disabled={!readyToNext}>
      {isDone === 3 ? (back ? "I'd like to change something" : 'Submit') : 'Next step'}
    </button>
  )
}