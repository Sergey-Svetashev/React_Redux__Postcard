import React from 'react';

export default function StepCase({mod, title, items}) {
  return (
    <div className={'step'}>
      <h2>{title}</h2>
      <ul className={'step__list' + (mod ? mod : '')}>
        {items}
      </ul>
    </div>
  )
}