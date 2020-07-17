import React, { Component } from 'react'

export default class Child extends Component
{
    render()
    {
        let {name, price, img} = this.props.productProps;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={img} alt={img} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
