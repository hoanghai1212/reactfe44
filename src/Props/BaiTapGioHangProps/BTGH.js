import React, { Component } from "react";
import DSSP from "./DSSP";
import ModalGH from "./ModalGH";

export default class BTGH extends Component {
  state = {
    gioHang: [],
  };

  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  handleAddToCart = (product) => {
    let spGioHang = {
      maSP: product.maSP,
      hinhAnh: product.hinhAnh,
      tenSP: product.tenSP,
      soLuong: 1,
      giaBan: product.giaBan,
    };

    let gioHangCapNhat = [...this.state.gioHang];

    let index = gioHangCapNhat.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    return (
      <div className="container">
        <DSSP
          handleAddToCart={this.handleAddToCart}
          arrProduct={this.arrProduct}
        />
        <ModalGH gioHang={this.state.gioHang} />
      </div>
    );
  }
}
