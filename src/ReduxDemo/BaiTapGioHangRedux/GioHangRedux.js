import React, { Component } from "react";
import { connect } from "react-redux"; //Thư viện kết nối react Component và redux store

class GioHangRedux extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
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
              onClick={(e) => {}}
              data-type="decrease"
            >
              -
            </button>
            <span className="px-3">{sanPham.soLuong}</span>
            <button
              className="btn btn-primary"
              onClick={(e) => {}}
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
                this.props.xoaSanPham(sanPham.maSP);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Cart</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
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

//Hàm có nhiệm vụ biến đổi state của redux trở thành props của component
const mapStateToProps = (state) => {
  //state ứng với rootReducer
  return {
    gioHang: state.GioHangReducer.stateGioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaSanPham: (sanPhamID) => {
      dispatch({
        type: "REMOVE_ITEM",
        sanPhamID,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
