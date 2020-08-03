import React, { Component } from "react";

export default class Form_Validation extends Component {
  state = {
    values: {
      username: "",
      password: "",
      email: "",
      fullname: "",
      phone: "",
      usertype: "",
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

    console.log(this.state);

    if (!valid) {
      alert("Dữ liệu không hợp lệ !");
      return;
    }
  };

  render() {
    return (
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
    );
  }
}
