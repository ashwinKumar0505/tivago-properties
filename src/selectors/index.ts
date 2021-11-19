import { RootState } from "../reducers";

export const getIsUserAuthenticated = (state: RootState) =>
  state.auth.isUserAuthenticated;
