'use strict';

import React from 'react';
import {store} from "@/js/redux/store";
import {changeDecore, toNext} from "@/js/actions/actionsCreator";
import {useSelector} from "react-redux";

const decoreClasses = [
  'triangle',
  'square',
  'circle'
]
function DecoreList() {

  let dispatch = store.dispatch,
    readyToNext = useSelector(state => state.navigation.toNext);

  function chooseDecore(name) {
    return function () {
      dispatch(changeDecore(name))
      !readyToNext ? dispatch(toNext(true)) : false
    }
  }

  return (
    decoreClasses.map((item) =>
      <li key={item} className={item} onClick={chooseDecore(item)}></li>
    )
  )
}
export default function StepChooseDecore() {
  return (
    <div className={'step'}>
      <h2>Choose the element of decore</h2>
      <ul className={'decore__list'}>
        <DecoreList/>
      </ul>
    </div>
  )
}