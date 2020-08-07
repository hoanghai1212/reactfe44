import React, { Component, Fragment } from "react";
import TableNguoiDung from "./TableNguoiDung";
import { connect } from "react-redux";
import { themNguoiDungAction } from "../redux/actions/QuanLyNguoiDungActions";

import _ from "lodash";

class Form_Validation extends Component {
  state = {
    values: {
      username: "",
      password: "",
      email: "",
      fullname: "",
      phone: "",
      usertype: "KhachHang",
    },
    errors: {
      username: "",
      password: "",
      email: "",
      fullname: "",
      phone: "",
    },
  };

  changeHandler = (e) => {
    let { name, value, type } = e.target;

    var newValues = {
      ...this.state.values,
      [name]: value,
    };

    var newErrors = {
      ...this.state.errors,
      [name]: value.trim() === "" ? `${name} required ` : "",
    };

    if (type === "email") {
      let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        newErrors[name] = name + " invalid!";
      }
    }

    var newState = {
      values: newValues,
      errors: newErrors,
    };

    this.setState(newState);
  };

  submitHandler = (e) => {
    e.preventDefault();

    let valid = true;
    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }

    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      alert("Dữ liệu không hợp lệ !");
      return;
    }

    this.props.dispatch(themNguoiDungAction(this.state.values));
  };

  // componentWillReceiveProps(newProps, newState) {
  //   console.log("newState: ", newState);
  //   console.log("newProps: ", newProps);
  //   let { nguoiDungEdit } = newProps;
  //   this.setState({
  //     values: nguoiDungEdit,
  //   });
  // }

  // static getDerivedStateFromProps(newProps, currentState)
  // {
  //   console.log('getDerivedStateFromProps');
  //   let { nguoiDungEdit } = newProps;

  //   if (!_.isEqual(nguoiDungEdit, currentState.values)) {
  //     let newState = { ...currentState, values: nguoiDungEdit };
  //     return newState;
  //   }

  //   return null;
  // }

  render() {
    console.log("render");
    return (
      <Fragment>
        <form className="container">
          <div className="card text-left">
            <div className="card-header">
              <h3 className="text-center">Register</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Username</p>
                    <input
                      value={this.state.values.username}
                      type="text"
                      name="username"
                      className="form-control"
                      onChange={this.changeHandler}
                    />
                    <p className="text-danger">{this.state.errors.username}</p>
                  </div>
                  <div className="form-group">
                    <p>Password</p>
                    <input
                      value={this.state.values.password}
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={this.changeHandler}
                    />
                    <p className="text-danger">{this.state.errors.password}</p>
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input
                      value={this.state.values.email}
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={this.changeHandler}
                    />
                    <p className="text-danger">{this.state.errors.email}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Full name</p>
                    <input
                      value={this.state.values.fullname}
                      type="text"
                      name="fullname"
                      className="form-control"
                      onChange={this.changeHandler}
                    />
                    <p className="text-danger">{this.state.errors.fullname}</p>
                  </div>
                  <div className="form-group">
                    <p>Phone</p>
                    <input
                      value={this.state.values.phone}
                      type="text"
                      name="phone"
                      className="form-control"
                      onChange={this.changeHandler}
                    />
                    <p className="text-danger">{this.state.errors.phone}</p>
                  </div>
                  <div className="form-group">
                    <p>User Type</p>
                    <select
                      value={this.state.values.usertype}
                      className="form-control"
                      name="usertype"
                      onChange={this.changeHandler}
                    >
                      <option value="KhachHang">Khách hàng</option>
                      <option value="QuanTri">Quản trị</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-left col-12">
                  <button
                    className="btn btn-success"
                    onClick={this.submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <TableNguoiDung />
      </Fragment>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);

    if (!_.isEqual(prevProps.nguoiDungEdit, this.props.nguoiDungEdit)) {
      this.setState({
        values: prevProps.nguoiDungEdit,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungEdit: state.BaiTapQuanLyNguoiDungReducer.nguoiDungEdit,
  };
};

export default connect(mapStateToProps)(Form_Validation);
