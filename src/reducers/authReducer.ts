import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";

export type AuthState = {
  isUserAuthenticated: boolean;
};

type TAction = {
  type: string;
  payload: any;
};

const initialState: AuthState = {
  isUserAuthenticated: false,
};

const AuthReducer = (state: AuthState = initialState, action: TAction) => {
  switch (action.type) {
    case AUTHENTICATION: {
      const { isUserAuthenticated } = action.payload;
      return {
        ...state,
        isUserAuthenticated,
      };
    }
    case LOGOUT: {
      localStorage.clear();
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
