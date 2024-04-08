import { toast } from "react-toastify";
import {
  POST_MY_PATENT_LIST_SUCCESS,
  POST_MY_PATENT_LIST_FAIL,
  POST_PATENT_APPLY_SUCCESS,
  POST_PATENT_APPLY_FAIL,
  SET_APPLY_FG,
} from "../actions/patent/type";

const init = {
  data: [],
  loading: false,
  error: null,
  applyFg: false,
};

export const patentReducer = (state = init, action) => {
  switch (action.type) {
    case POST_MY_PATENT_LIST_SUCCESS:
      const res = action.response?.data;
      return {
        ...state,
        data: res,
      };

    case POST_MY_PATENT_LIST_FAIL:
      toast.success("등록된 특허 정보를 가져오는데 실패하였습니다.");
      return {
        ...state,
        data: [],
        error: action.response?.reason,
      };

    case POST_PATENT_APPLY_SUCCESS:
      toast.success("임시출원을 신청하였습니다.");
      return {
        ...state,
        applyFg: true,
      };

    case POST_PATENT_APPLY_FAIL:
      toast.success("임시출원 제출에 실패하였습니다.");
      return {
        ...state,
        applyFg: false,
      };

    case SET_APPLY_FG:
      return {
        ...state,
        applyFg: false,
      };

    default:
      return state;
  }
};

export default patentReducer;
