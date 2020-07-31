import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./GameBauCua.module.css";

class XucSac extends Component {
  renderKetQua = () => {
    let { ketQua } = this.props;

    return ketQua.map((item, index) => {
      return (
        <div className="item m-3" key={index} style={{ width: "30%" }}>
          <img
            className={`${style.xucSac}`}
            style={{ width: "100%" }}
            src={item.hinhAnh}
            alt={item.hinhAnh}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div style={{ width: "40%", position: "relative" }}>
        <img
          src="./img/gameBauCua/dia.png"
          alt="dia"
          style={{ width: "60%" }}
        />

        <div
          className="xucsac"
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.renderKetQua()}
        </div>

        <img
          className={`mt-4 ${style.xocDia}`}
          src="./img/gameBauCua/soc.png"
          alt="soc"
          style={{ width: "50%", cursor: "pointer" }}
          onClick={() => {
            this.props.playGame();
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.GameBauCuaReducer.xucSac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucSac);
