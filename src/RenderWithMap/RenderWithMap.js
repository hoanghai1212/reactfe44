import React, { Component } from 'react'

export default class RenderWithMap extends Component
{

    danhSachSanPham = [
        { maSP: 1, tenSP: 'IphoneX', gia: 1000, img: 'https://picsum.photos/200/200' },
        { maSP: 2, tenSP: 'IphoneXS', gia: 2000, img: 'https://picsum.photos/200/200' },
        { maSP: 3, tenSP: 'IphoneXSMax', gia: 3000, img: 'https://picsum.photos/200/200' }
    ]

    renderTable = () =>
    {
        return this.danhSachSanPham.map((sanPham, index) =>
        {
            return <tr key={index}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>{sanPham.gia}</td>
                <td><img src={sanPham.img} alt={sanPham.img} width={100} height={100} /></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        });
    }

    render()
    {
        return (
            <div className="container text-center">
                <h3 className="text-primary">Danh mục sản phẩm</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá SP</th>
                            <th>Hình ảnh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
