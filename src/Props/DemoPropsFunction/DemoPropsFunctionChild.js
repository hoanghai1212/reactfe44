import React, { Component } from "react";

export default class DemoPropsFunctionChild extends Component {
  render() {
    let { xemChiTiet, product } = this.props;
    return (
      <div className="card">
        <img
          src={product.hinhAnh}
          className="card-img-top"
          height={300}
          alt={product.hinhAnh}
        />
        <div className="card-body">
          <h5 className="card-title">{product.tenSP}</h5>
          <button
            className="btn btn-primary"
            onClick={() => {
              xemChiTiet(product);
            }}
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}
