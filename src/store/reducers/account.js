import { toast } from "react-toastify";
import {
  POST_ACCOUNT_LOGIN_SUCCESS,
  POST_ACCOUNT_LOGIN_FAIL,
  POST_ACCOUNT_JOIN_FAIL,
  POST_ACCOUNT_JOIN_SUCCESS,
} from "../actions/account/type";
import { setAccount } from "../../common/loginInfo";

const init = {
  data: null,
  loading: false,
  error: null,
};

export const accountReducer = (state = init, action) => {
  switch (action.type) {
    case POST_ACCOUNT_LOGIN_SUCCESS:
      toast.success("로그인 되었습니다.");
      const res = action.response?.data;
      const userInfo = {
        isLogin: true,
        accountId: res.accountId,
        accountKey: res.accountKey,
        humanName: res.humanName,
        joinType: res.joinType,
      };

      setAccount(userInfo, res.remember);

      return {
        data: userInfo,
        loading: false,
        error: null,
      };

    case POST_ACCOUNT_LOGIN_FAIL:
      toast.success("로그인에 실패하였습니다.");
      return {
        data: {},
        loading: false,
        error: action.response?.reason,
      };

    case POST_ACCOUNT_JOIN_SUCCESS:
      toast.success("회원가입 되었습니다.");

      return {
        data: {
          isJoin: true,
        },
        loading: false,
        error: null,
      };

    case POST_ACCOUNT_JOIN_FAIL:
      toast.success("회원가입에 실패하였습니다.");
      return {
        data: {
          isJoin: false,
        },
        loading: false,
        error: action.response?.reason,
      };

    default:
      return state;
  }
};

export default accountReducer;
