import { combineReducers } from "redux";
import productReducer from "./products";
import { cartReducer } from "./cart";
import { wishListReducer } from "./wishList";
import compareListReducer from "./compare";
import accountReducer from "./account";
import modalReducer from "./modal";
import patentReducer from "./patent";

const rootReducer = combineReducers({
  data: productReducer,
  cartList: cartReducer,
  wishList: wishListReducer,
  compareList: compareListReducer,
  account: accountReducer,
  modal: modalReducer,
  patent: patentReducer,
});

export default rootReducer;
