import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Actions/LoginActions";
const intialState = {
  loginStaus: false,
  loading: false,
  error: null,
};

const LoginReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStaus: true,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginStaus: false,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loginStaus: false,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default LoginReducer;
