import { combineReducers } from "redux";
// import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import GameBauCuaReducer from "./GameBauCuaReducer";

//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
  // nơi khai báo các state (reducer) theo từng nghiệp vụ
  // GioHangReducer: BaiTapGioHangReducer,
  GameBauCuaReducer,
});

export default rootReducer;
