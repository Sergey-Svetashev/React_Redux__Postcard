'use strict';

import React from 'react';
import {store} from "@/js/redux/store";
import {inputText, toNext} from "@/js/actions/actionsCreator";
import {useSelector} from "react-redux";

export default function StepTextTyping() {

  let dispatch = store.dispatch,
    readyToNext = useSelector(state => state.navigation.toNext),
    type;

  type = function (event) {
    dispatch(inputText(event.target.value))
    !readyToNext ? dispatch(toNext(true)) : false
  }

  return (
    <div className={'step'}>
      <h2>Type something</h2>
      <input type="text"
             className={'step__input'}
             maxLength={70}
             placeholder={'24 characters maximum'}
             onChange={type}
      />
    </div>
  )
}