import { counterInitialState } from "./initialState";
import { COUNTER_RESET ,COUNTER_UP , COUNTER_DOWN } from "../types";
export const counterReducer = (state = counterInitialState, action) => {
  if (action.type === COUNTER_UP) {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === COUNTER_DOWN) {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === COUNTER_RESET) {
    return { ...state, counter: action.payload };
  }
  return state;
};