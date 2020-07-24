import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img
          src={sanPham.hinhAnh}
          className="card-img-top"
          height={350}
          alt={sanPham.hinhAnh}
        />
        <div className="card-body">
          <h5 className="card-title">{sanPham.tenSP}</h5>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      let sanPhamGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };

      let action = {
        type: "ADD_TO_CART",
        sanPhamGioHang,
      };

      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
