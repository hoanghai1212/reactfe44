import {
  THEM_NGUOI_DUNG,
  SUA_NGUOI_DUNG,
} from "../actions/types/QuanLyNguoiDungType";

const initialState = {
  mangNguoiDung: [
    {
      username: "nguyenvana",
      password: "0123456778",
      fullname: "Nguyen Van A",
      email: "nguyenvana@gmail.com",
      phone: "02321782131",
      usertype: "KhachHang",
    },
    {
      username: "nguyenvanb",
      password: "012213778",
      fullname: "Nguyen Van B",
      email: "nguyenvanb@gmail.com",
      phone: "0221312512",
      usertype: "QuanTri",
    },
  ],
  nguoiDungEdit: {
    username: "",
    password: "",
    fullname: "",
    email: "nguyenvana@gmail.com",
    phone: "02321782131",
    usertype: "KhachHang",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case THEM_NGUOI_DUNG: {
      let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }

    case SUA_NGUOI_DUNG: {
      state.nguoiDungEdit = action.nguoiDung;
      return { ...state };
    }
    default:
      return state;
  }
};
