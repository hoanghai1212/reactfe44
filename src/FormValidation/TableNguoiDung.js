import React, { Component } from "react";
import { connect } from "react-redux";
import { suaNguoiDungAction } from "../redux/actions/QuanLyNguoiDungActions";

class TableNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white text-center font-weight-bold">
            Danh sach nguoi dung
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Full name</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>User Type</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.danhSachNguoiDung.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.username}</td>
                      <td>{user.fullname}</td>
                      <td>{user.password}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.usertype}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.dispatch(suaNguoiDungAction(user));
                          }}
                          className="btn btn-warning"
                        >
                          Chỉnh sửa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(TableNguoiDung);
