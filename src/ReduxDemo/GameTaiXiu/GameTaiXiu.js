import React, { Component } from "react";
import style from "./GameTaiXiu.module.css";
import BanCuoc from "./BanCuoc";
import KetQua from "./KetQua";

export default class GameTaiXiu extends Component {
  render() {
    return (
      <div
        className={`${style.gameTaiXiu}`}
        style={{
          background: "url(./img/gameXucSac/bgGame.png) no-repeat",
          backgroundSize: "100% 100%",
          height: "100vh",
        }}
      >
        <h1 className="pt-2 text-center">GAME TÀI XỈU</h1>

        <BanCuoc />
        <KetQua />
      </div>
    );
  }
}
