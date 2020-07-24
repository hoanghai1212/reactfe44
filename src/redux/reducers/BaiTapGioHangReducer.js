const stateDefault = {
  stateGioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "VinSmart Live",
    //   hinhAnh: "./img/vsphone.jpg",
    //   giaBan: 1000,
    //   soLuong: 1,
    // },
  ],
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let gioHang = [...state.stateGioHang];

      const index = gioHang.findIndex(
        (spGH) => spGH.maSP === action.sanPhamGioHang.maSP
      );

      if (index === -1) {
        gioHang.push(action.sanPhamGioHang);
      } else {
        gioHang[index].soLuong += 1;
      }

      return { ...state, stateGioHang: gioHang };
    }

    case "REMOVE_ITEM": {
      let gioHang = [...state.stateGioHang];

      gioHang = gioHang.filter((product) => product.maSP !== action.sanPhamID);

      state.stateGioHang = gioHang;
      return { ...state, stateGioHang: gioHang };
    }
    

    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducer;
