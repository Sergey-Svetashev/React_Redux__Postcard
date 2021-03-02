import {BG, DECORE, INPUT, STEP, DONE, NEXT, READY} from "../actions/actionTypes";

let initialNavigate = {
    isDone: 1,
    isVisible: 1,
    toSubmit: false,
    toNext: false
  },
  initialFilling = {
    background: '#fff',
    decore: '',
    text: 'I wish you...'
  };

export function fillingReducer(state = initialFilling, action) {
  switch (action.type) {
    case BG:
      return {...state, background: action.payload};
    case DECORE:
      return {...state, decore: action.payload};
    case INPUT:
      return {...state, text: action.payload};
    default:
      return state;
  }
}

export function navigateReducer(state = initialNavigate, action) {
  switch (action.type) {
    case STEP:
      return {...state, isVisible: action.payload};
    case DONE:
      return {...state, isDone: state.isDone + 1, isVisible: state.isDone + 1};
    case NEXT:
      return {...state, toNext: action.payload};
    case READY:
      return {...state, toSubmit: !state.toSubmit};
    default:
      return state;
  }
}