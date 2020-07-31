import React, { Component } from 'react'

export default class KetQua extends Component {
    render() {
        return (
            <div className="mt-5 text-center display-4">
                <p>Bạn đã chọn: Tài</p>
                <p>Số bàn thắng: <span className="text-danger">0</span></p>
                <p>Tổng số bàn chơi: <span className="text-success">0</span></p>
                <button className="btn btn-success" style={{fontSize: '30px'}}>PLAY</button>
            </div>
        )
    }
}
