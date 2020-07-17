import React, { Component } from 'react'

export default class BaiTap2Child extends Component
{
    render()
    {
        let {name, shortDescription, image, price } = this.props.productArr;

        return (
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={image} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{shortDescription}</p>
                </div>
                <div className="card-footer bg-white border-0">
                    <p className="text-danger font-weight-bold">ONLY {price}$</p>
                    <button className="btn btn-dark">Add to cart</button>
                </div>
            </div>

        )
    }
}
