import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";

export const authentication = () => ({
  type: AUTHENTICATION,
  payload: { isUserAuthenticated: true },
});

export const logout = () => ({
  type: LOGOUT,
});
