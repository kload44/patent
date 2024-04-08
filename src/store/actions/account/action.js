import "react-toastify/dist/ReactToastify.min.css";
import { POST_ACCOUNT_LOGIN_SUCCESS, POST_ACCOUNT_LOGIN_FAIL } from "./type";
import { getLogin } from "../../../api/axios/common";

//API actions
export const getLoginSuccess = (user) => async (dispatch) => {
  try {
    const response = await getLogin(user);
    if (response.status == "success") {
      dispatch({
        type: POST_ACCOUNT_LOGIN_SUCCESS,
        response,
      });
    } else {
      dispatch({
        type: POST_ACCOUNT_LOGIN_FAIL,
        response,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_ACCOUNT_LOGIN_FAIL,
      error,
    });
  }
};
