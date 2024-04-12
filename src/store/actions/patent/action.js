import "react-toastify/dist/ReactToastify.min.css";
import {
  POST_MY_PATENT_LIST_SUCCESS,
  POST_MY_PATENT_LIST_FAIL,
  POST_PATENT_APPLY_FAIL,
  POST_PATENT_APPLY_SUCCESS,
  SET_APPLY_FG,
} from "./type";
import { getMyPatentList, getPatentApply } from "../../../api/axios/common";

//API actions
export const getPatentList = () => async (dispatch) => {
  try {
    const response = await getMyPatentList();
    if (response.status == "success") {
      dispatch({
        type: POST_MY_PATENT_LIST_SUCCESS,
        response,
      });
    } else {
      dispatch({
        type: POST_MY_PATENT_LIST_FAIL,
        response,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_MY_PATENT_LIST_FAIL,
      error,
    });
  }
};

export const setPatent = (patentInfo) => async (dispatch) => {
  try {
    const response = await getPatentApply(patentInfo);
    if (response.status == "success") {
      dispatch({
        type: POST_PATENT_APPLY_SUCCESS,
        response,
      });
    } else {
      dispatch({
        type: POST_PATENT_APPLY_FAIL,
        response,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_PATENT_APPLY_FAIL,
      error,
    });
  }
};

export const setApplyFg = () => (dispatch) => {
  dispatch({
    type: SET_APPLY_FG,
  });
};
