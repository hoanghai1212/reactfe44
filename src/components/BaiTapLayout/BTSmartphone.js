import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTSmartphone extends Component
{
    render()
    {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <BTProduct />
                        <BTProduct />
                        <BTProduct />
                        <BTProduct />
                    </div>
                </section>

            </div>
        )
    }
}
