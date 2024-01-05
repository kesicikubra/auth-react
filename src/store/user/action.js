import { LOGIN, LOGOUT } from "../types";

export const userLogin = (user) => ({
	type: LOGIN,
	payload: user,
});

export const userLogout = () => ({
	type: LOGOUT,
});