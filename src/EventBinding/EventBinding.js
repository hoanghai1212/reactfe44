import React, { Component } from 'react'

export default class EventBinding extends Component
{
    handleClick = () =>
    {
        alert("Hello react fe44")
    }

    showMessage = (mess) =>
    {
        alert("hello " + mess);
    }
    render()
    {
        return (
            <div>
                <h3>Cach 1 handle event</h3>
                {/* Cach 1: truyen truc tiep */}
                <button onClick={this.handleClick}>Click me c1!!</button>
                <button onClick={this.showMessage.bind(this, 'Chao xin')}>Click me c2!!</button>
                {/* Cach 2: truyen function gian tiep */}

                <h3>Cach 2 handle event</h3>
                <button onClick={() =>
                {
                    this.handleClick();
                }
                }>Click me!!</button>

                <button onClick={() =>
                {
                    this.showMessage(`Hao`);
                }
                }>Click me!!</button>
            </div>
        )
    }
}
