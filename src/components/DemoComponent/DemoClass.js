import React, { Component } from 'react'

export default class DemoClass extends Component
{

    //render method => chứa nội dung giao diện
    render()
    {
        //Bên trong phương thức có thể khai báo biến, hàm,...

        return (
            <div>
                <div className="card text-left">
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>

            </div>
        )
    }
}
