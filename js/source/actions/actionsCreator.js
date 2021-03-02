import {BG, DECORE, INPUT, DONE, STEP, NEXT, READY} from "./actionTypes";

export function changeBackground(value) {
  return {
    type: BG,
    payload: value
  }
}

export function changeDecore(value) {
  return {
    type: DECORE,
    payload: value
  }
}

export function inputText(value) {
  return {
    type: INPUT,
    payload: value
  }
}

export function stepIsDone(value) {
  return {
    type: DONE,
    payload: value
  }
}

export function changeStep(value) {
  return {
    type: STEP,
    payload: value
  }
}

export function toNext(value) {
  return {
    type: NEXT,
    payload: value
  }
}

export function toSubmit(value) {
  return {
    type: READY,
    payload: value
  }
}