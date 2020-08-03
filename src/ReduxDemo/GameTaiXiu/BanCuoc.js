import React, { Component } from "react";
import { connect } from "react-redux";

class BanCuoc extends Component {
  render() {
    return (
      <div className="d-flex justify-content-around mt-5">
        <button
          className="btn btn-dark border"
          style={{
            width: "200px",
            height: "200px",
            fontSize: "50px",
          }}
          onClick={() => {
            this.props.dispatch({
              type: "DAT_CUOC",
              taiXiu: "TÀI",
            });
          }}
        >
          Tài
        </button>
        <div className="bg-white h-100">
          {this.props.danhSachXucSac.map((xucSac, index) => (
            <img
              key={index}
              className="mx-2"
              style={{ width: "80px" }}
              src={xucSac.hinhAnh}
              alt={xucSac.hinhAnh}
            />
          ))}
        </div>
        <button
          className="btn btn-danger border"
          style={{
            width: "200px",
            height: "200px",
            fontSize: "50px",
          }}
          onClick={() => {
            this.props.dispatch({
              type: "DAT_CUOC",
              taiXiu: "XỈU",
            });
          }}
        >
          Xỉu
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachXucSac: state.GameTaiXiuReducer.xucSac,
});

export default connect(mapStateToProps)(BanCuoc);
