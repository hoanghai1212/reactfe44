import { combineReducers } from "redux";
// import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
// import GameBauCuaReducer from "./GameBauCuaReducer";
import GameTaiXiuReducer from "./GameTaiXiuReducer";
import BaiTapQuanLyNguoiDungReducer from "./BaiTapQuanLyNguoiDungReducer"

//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
  // nơi khai báo các state (reducer) theo từng nghiệp vụ
  // GioHangReducer: BaiTapGioHangReducer,
  // GameBauCuaReducer,
  GameTaiXiuReducer,
  BaiTapQuanLyNguoiDungReducer

});

export default rootReducer;
