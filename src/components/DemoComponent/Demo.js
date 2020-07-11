import React from 'react'

export default function Demo()
{
    return (
        <div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
    Display value
  </label>
            </div>

            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading" />
                <p />
                <p className="mb-0" />
            </div>

            <div className="card text-white bg-primary">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>



        </div>
    )
}
