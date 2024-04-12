import "react-toastify/dist/ReactToastify.min.css";
import {
  POST_ACCOUNT_LOGIN_SUCCESS,
  POST_ACCOUNT_LOGIN_FAIL,
  POST_ACCOUNT_JOIN_FAIL,
  POST_ACCOUNT_JOIN_SUCCESS,
} from "./type";
import { getJoin, getLogin } from "../../../api/axios/common";

//API actions
export const getLoginSuccess = (account) => async (dispatch) => {
  try {
    const response = await getLogin(account);
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

export const getJoinSuccess = (account) => async (dispatch) => {
  try {
    const response = await getJoin(account);
    if (response.status == "success") {
      dispatch({
        type: POST_ACCOUNT_JOIN_SUCCESS,
        response,
      });
    } else {
      dispatch({
        type: POST_ACCOUNT_JOIN_FAIL,
        response,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_ACCOUNT_JOIN_FAIL,
      error,
    });
  }
};
