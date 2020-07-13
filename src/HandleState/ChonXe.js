import React, { Component } from 'react'

export default class ChonXe extends Component
{

    state = {
        src: "./img/black-car.jpg",
    }


    changeColor = (newImgSrc) =>
    {
        this.setState({
            src: newImgSrc,
        })
    };

    render()
    {
        return (
            <div className="container">
                <h3 className="text-center text-uppercase">Bài tập chọn xe</h3>
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.src} alt="black_car" />
                    </div>
                    <div className="col-6" >
                        <div className="row justify-content-between">
                            <button className="col-2 btn btn-danger"
                                onClick={() =>
                                {
                                    this.changeColor("./img/red-car.jpg");
                                }}>Red car</button>
                            <button className="col-2 btn btn-dark" onClick={() =>
                            {
                                this.changeColor("./img/black-car.jpg");
                            }}>Black car</button>
                            <button className="col-2 btn btn-light" onClick={() =>
                            {
                                this.changeColor("./img/silver-car.jpg");
                            }}>Silver car</button>
                            <button className="col-2 btn btn-secondary" onClick={() =>
                            {
                                this.changeColor("./img/steel-car.jpg");
                            }}>Steel car</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
