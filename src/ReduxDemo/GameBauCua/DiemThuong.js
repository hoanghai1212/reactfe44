import React, { Component } from "react";
import { connect } from "react-redux";

class DiemThuong extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            fontSize: "30px",
            background: "red",
            border: "none",
            borderRadius: "5px",
            color: "yellow",
            padding: "5px 20px",
            margin: "10px 0",
          }}
        >
          Tiền thưởng:
          <span style={{ fontSize: "50px", color: "white" }}>
            {this.props.diemThuong}
          </span>
          $
        </button>

        <button
          className="d-block mx-auto my-3 px-3 py-1"
          style={{
            fontSize: "16px",
            background: "purple",
            border: "none",
            borderRadius: "4px",
            color: "white",
          }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Chơi lại
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diemThuong: state.GameBauCuaReducer.diemThuong,
  };
};

export default connect(mapStateToProps)(DiemThuong);
