import { LOGIN, LOGOUT } from "../types";
import { userInitialState } from "./initialState";
export const userReducer = (state = userInitialState, action) => {
    if (action.type === LOGIN) {
        return { ...state, isUserLogin: true, user: action.payload };
    } else if (action.type === LOGOUT) {
        return { ...state, isUserLogin: false, user: {} };
    }
    return state;
};
