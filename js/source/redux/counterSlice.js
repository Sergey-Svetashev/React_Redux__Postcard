import {DECREMENT, INCREMENT} from "../actions/actionTypes";

let initialState = 72

export function counterReducer(state = initialState, action) {

  switch (action.type) {
    case INCREMENT:
      return state += action.payload;
    case DECREMENT:
      return state -= action.payload;
    default:
      return state;
  }

}