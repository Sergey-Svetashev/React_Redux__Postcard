import React from 'react';
import {Provider, useSelector} from 'react-redux'
import {store} from '../redux/store'
import {Table} from "../markup_elements/table__wrap";
import {Result} from "./result";
import {SequenceOfSteps} from "./maker";
import Nav from "./nav";
import DoneButton from "./doneButton";


function App() {

  let isReadyToSubmit = useSelector(state => state.navigation.toSubmit)

  return (
    <Table
      left={
        <div className={isReadyToSubmit ? 'maker maker_hide' : 'maker'}>
          <Nav />
          <SequenceOfSteps/>
          <DoneButton />
        </div>
      }
      right={<Result preview={!isReadyToSubmit}/>}
      isFull={!isReadyToSubmit ? ' table_full' : ''}
      isMiddle={' table__cell_middle'}/>
  )

}

let providedApp = (
  <Provider store={store}>
    <App/>
  </Provider>
)

export default providedApp