import React, { Component } from "react";
import { connect } from "react-redux";

class BanCuoc extends Component {
  renderXucSac = () => {
    let { danhSachXucSac } = this.props;
    return danhSachXucSac.map((xucSac, index) => {
      return (
        <img
          key={index}
          className="mx-2"
          style={{ width: "80px" }}
          src={xucSac.hinhAnh}
          alt={xucSac.hinhAnh}
        />
      );
    });
  };
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
        >
          Tài
        </button>
        <div>{this.renderXucSac()}</div>
        <button
          className="btn btn-danger border"
          style={{
            width: "200px",
            height: "200px",
            fontSize: "50px",
          }}
          onClick={(event) => {
            this.props.datcuoc(event);
          }}
        >
          Xỉu
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachXucSac: state.GameTaiXiuReducer.xucSac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datcuoc: (event) => {
      console.log(event.target.innerHTML);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BanCuoc);
