import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>1</td>
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
            <button className="btn btn-primary">-</button>
            <span className="px-3">{sanPham.soLuong}</span>
            <button className="btn btn-primary">+</button>
          </td>
          <td>{sanPham.giaBan}</td>
          <td>{sanPham.soLuong * sanPham.giaBan}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
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
        </table>
      </div>
    );
  }
}
