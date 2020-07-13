import React, { Component } from 'react'

export default class HandleState extends Component
{
    //state: thuoc tinh co san cua class Component cho phep thay doi gia tri va re-render giao dien

    state = {
        isLogin: false,
    }

    // isLogin = false;
    userName = `Hai`;

    renderContent = () =>
    {
        if (this.state.isLogin)
        {
            return <h1>Hello {this.userName}</h1>
        }
        return <button onClick={() =>
        {
            this.login();
        }}>Login</button>
    }

    login = () =>
    {
        // this.setState là phương thức có sẵn của Component nhần vào state mới thay cho giá trị state cũ và tự động gọi lại hàm render
        // setState là phương thức bất đồng bộ
        this.setState({
            isLogin: true,
        }, () =>
        {
            console.log(this.state.isLogin);
        })
    }

    render()
    {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
