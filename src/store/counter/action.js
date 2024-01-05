import { COUNTER_DOWN, COUNTER_RESET, COUNTER_UP } from "../types";
export const counterUp = () => ({
    type: COUNTER_UP,
});
export const counterDown = () => ({
    type: COUNTER_DOWN,
});
export const counterReset = (value) => ({
    type: COUNTER_RESET,
    payload: value
});