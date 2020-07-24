import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let { handleAddToCart, product } = this.props;

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
          <p>{product.giaBan}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
