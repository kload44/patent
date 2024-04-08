import { toast } from "react-toastify";
import {
  POST_ACCOUNT_LOGIN_SUCCESS,
  POST_ACCOUNT_LOGIN_FAIL,
} from "../actions/account/type";
import { setAccount } from "../../common/loginInfo";

const init = {
  data: null,
  loading: false,
  error: null
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

      setAccount(
        userInfo,
        res.remember,
      );

      return {
        data:userInfo,
        loading:false,
        error:null
      };

    case POST_ACCOUNT_LOGIN_FAIL:
      toast.success("로그인에 실패하였습니다.");
      return {
        data:{},
        loading:false,
        error:action.response?.reason
      };

    default:
      return state;
  }
};

export default accountReducer;
