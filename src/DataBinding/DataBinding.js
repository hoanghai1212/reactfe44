import React, { Component } from 'react'
import cssDataBinding from './DataBinding.module.css'

export default class DataBinding extends Component
{
    name = "name";
    img = "https://picsum.photos/300/300"
    renderImg = () =>
    {

        let style = {
            header: {
                backgroundColor: "#000000",
                color: "navajowhite",
                padding: "15px",
            },
            body: {
                backgroundColor: "#ffffff",
                color: "navajowhite",
                padding: "10px",
            }
        }

        return <div className="card w-25 m-auto">
            <img className="card-img-top" src={this.img} alt="x" />
            <div className="card-body">
                <h4 style={style.header}>Title</h4>
                <p style={style.body} className="card-text">Text</p>
            </div>
        </div >

    }
    render()
    {
        let title = "CYBERSOFT - FE44";
        let srcImg = "https://picsum.photos/200/200";

        //binding function
        let renderText = () =>
        {
            return <div>
                <h1>Hello 123</h1>
            </div>
        }

        return (
            <div className="container text-center">
                <h1 id="title">{title}</h1>
                <img src={srcImg} alt="x" />
                {renderText()}
                <h5>{this.name}</h5>
                {this.renderImg()}
            </div>
        )
    }
}
