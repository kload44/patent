import { toast } from "react-toastify";
import {
  POST_MY_PATENT_LIST_SUCCESS,
  POST_MY_PATENT_LIST_FAIL,
} from "../actions/patent/type";

const init = {
  data: null,
  loading: false,
  error: null,
};

export const patentReducer = (state = init, action) => {
  switch (action.type) {
    case POST_MY_PATENT_LIST_SUCCESS:
      toast.success("로그인 되었습니다.");
      const res = action.response?.data;

      return {
        data: res,
        loading: false,
        error: null,
      };

    case POST_MY_PATENT_LIST_FAIL:
      toast.success("로그인에 실패하였습니다.");
      return {
        data: {},
        loading: false,
        error: action.response?.reason,
      };

    default:
      return state;
  }
};

export default patentReducer;
