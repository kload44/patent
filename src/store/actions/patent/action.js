import "react-toastify/dist/ReactToastify.min.css";
import { POST_MY_PATENT_LIST_SUCCESS, POST_MY_PATENT_LIST_FAIL } from "./type";
import { getMyPatentList } from "../../../api/axios/common";

//API actions
export const getMyPatentList = (user) => async (dispatch) => {
  try {
    const response = await getMyPatentList(user);
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
