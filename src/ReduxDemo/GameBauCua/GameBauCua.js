import React, { Component } from "react";
import DiemThuong from "./DiemThuong";
import DanhSachCuoc from "./DanhSachCuoc";
import XucSac from "./XucSac";
import style from "./GameBauCua.module.css";

export default class GameBauCua extends Component {
  render() {
    return (
      <div className={`container text-center ${style.gameBauCua}`}>
        <img className="w-50 my-2" src="./img/gameBauCua/Logo.png" alt="logo" />
        <DiemThuong />
        <div className="d-flex">
          <DanhSachCuoc />
          <XucSac />
        </div>
      </div>
    );
  }
}
