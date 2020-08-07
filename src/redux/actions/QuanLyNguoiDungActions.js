import { THEM_NGUOI_DUNG, SUA_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";

export const themNguoiDungAction = (nguoiDung) => {
  return {
    type: THEM_NGUOI_DUNG,
    nguoiDung: nguoiDung,
  };
};

export const suaNguoiDungAction = (nguoiDung) => {
  return {
    type: SUA_NGUOI_DUNG,
    nguoiDung: nguoiDung,
  };
};
