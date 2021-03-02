import {createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import {fillingReducer, navigateReducer} from "./reducers";

function rootReducer(state, action) {
  return {
    filling: fillingReducer(state.filling, action),
    navigation: navigateReducer(state.navigation, action),
  }
}

export const store = createStore(
  rootReducer,
  {},
  devToolsEnhancer()
)