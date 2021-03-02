import React from 'react';

export function Table({left, right, isFull, isMiddle}) {
  return (
    <div className={'table' + (isFull || '')}>
      <div className={'table__cell' + (isMiddle || '')}>
        {left}
      </div>
      <div className={'table__cell' + (isMiddle || '')}>
        {right}
      </div>
    </div>
  )
}