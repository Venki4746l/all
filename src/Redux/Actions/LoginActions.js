import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginAut = (detilas) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/auth/login",
      detilas
    );

    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch({ type: LOGIN_SUCCESS, payload: response });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};
