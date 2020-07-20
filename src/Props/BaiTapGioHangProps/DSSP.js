import React, { Component } from "react";
import SP from "./SP";

export default class DSSP extends Component {
  renderProduct = () => {
    let { handleAddToCart, arrProduct } = this.props;
    return arrProduct.map((product, index) => {
      return (
        <div key={index} className="col-4">
              <SP handleAddToCart={handleAddToCart} product={product} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
