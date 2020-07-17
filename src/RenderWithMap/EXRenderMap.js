import React, { Component } from 'react'

export default class EXRenderMap extends Component
{
    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderProduct = () =>
    {
        return this.arrProduct.map((product, index) =>
        {
            return <div key={index} className="card mx-2">
                <img src={product.hinhAnh} className="card-img-top" height={300} alt={product.hinhAnh} />
                <div className="card-body">
                    <h5 className="card-title">{product.tenSP}</h5>
                    <a href=" " className="btn btn-primary">Xem chi tiet</a>
                </div>
            </div>
        })
    }

    render()
    {
        return (
            <div className="container mt-3">
                <h1 className="text-center">Danh sách sản phẩm</h1>
                <div className="row justify-content-center">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
