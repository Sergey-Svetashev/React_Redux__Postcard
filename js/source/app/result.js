import React from 'react';
import {useSelector} from "react-redux";
import DoneButton from "./doneButton";

export function Result({preview}) {

  let filling = useSelector(state => state.filling),
  buttonCase;

  buttonCase = function () {
    return (
      <div className={'button__case'}>
        <DoneButton back={true}/>
        <a href="" className={'button'}>Share</a>
      </div>
    )
  }

  return (
    <div className={'result' + (!preview ? ' done' : '')}>
      <div className={'result__case'}
           style={{backgroundColor: filling.background}}>
        {preview ? <div className={'mark'}>Preview</div> : null}
        <h3 className={'result__text'}>{filling.text}</h3>
        <span className={'result__decore' + (filling.decore ? ' result__decore_' + filling.decore : '')}></span>
      </div>
      {!preview ? buttonCase() : false}
    </div>
  )
}