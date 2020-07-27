import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    let { danhSachCuoc } = this.props;

    return danhSachCuoc.map((item) => {
      return (
        <div className="item" key={item.ma}>
          <img style={{ width: "80%" }} src={item.hinhAnh} alt={item.hinhAnh} />
          <button
            style={{
              background: "rgb(2, 129, 8)",
              padding: "5px 20px",
              margin: "10px 0",
              fontSize: "16px",
              color: "yellow",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cược: 0
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          display: "grid",
          width: "60%",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "40px",
        }}
        >
            {this.renderDanhSachCuoc()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc,
  };
};

export default connect(mapStateToProps)(DanhSachCuoc);
