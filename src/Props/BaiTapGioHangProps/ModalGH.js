import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { handleChangeQuantity, handleDeleteFromCart, gioHang } = this.props;
    return gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>
            <img
              width="50"
              height="50"
              src={sanPham.hinhAnh}
              alt={sanPham.hinhAnh}
            />
          </td>
          <td>{sanPham.tenSP}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                handleChangeQuantity(e, sanPham.maSP);
              }}
              data-type="decrease"
            >
              -
            </button>
            <span className="px-3">{sanPham.soLuong}</span>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                handleChangeQuantity(e, sanPham.maSP);
              }}
              data-type="increase"
            >
              +
            </button>
          </td>
          <td>{sanPham.giaBan}</td>
          <td>{sanPham.soLuong * sanPham.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDeleteFromCart(sanPham.maSP);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  calcTotal = () => {
    return this.props.gioHang.reduce((tongTien, spGH, index) =>
    {
      return (tongTien += spGH.soLuong * spGH.giaBan);
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Cart</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>HÌnh ảnh</th>
              <th>Tên SP</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Total</td>
              <td>{this.calcTotal().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
