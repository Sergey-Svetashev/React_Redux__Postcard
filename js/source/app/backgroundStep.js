'use strict';

import React from 'react'
import {store} from "../redux/store";
import {changeBackground, toNext} from "../actions/actionsCreator";
import StepCase from "../markup_elements/steps_murkup";
import {useSelector} from "react-redux";

const colors = [
  '#b69cff',
  '#eeeb52',
  '#71ee71'
]

function ColorsList() {

  let dispatch = store.dispatch,
    readyToNext = useSelector(state => state.navigation.toNext);

  function chooseColor(color) {
    return function () {
      dispatch(changeBackground(color))
      !readyToNext ? dispatch(toNext(true)) : false
    }
  }

  return (
    colors.map((item) =>
      <li key={item} style={{backgroundColor: item}} onClick={chooseColor(item)}></li>
    )
  )
}

export default function StepChooseBackground() {
  return (
    <StepCase title={'Choose the background'} items={<ColorsList/>}/>
  )
}