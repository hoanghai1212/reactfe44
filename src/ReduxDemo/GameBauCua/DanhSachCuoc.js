import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    let { danhSachCuoc } = this.props;

    return danhSachCuoc.map((item) => {
      return (
        <div
          className="item"
          key={item.ma}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "80%" }} src={item.hinhAnh} alt={item.hinhAnh} />
          <div
            style={{
              background: "rgb(2, 129, 8)",
              padding: "5px 20px",
              margin: "10px 0",
              fontSize: "16px",
              color: "yellow",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <button
              className='btn btn-success'
              onClick={() => {
                this.props.datcuoc(item.ma, false);
              }}
            >
              -
            </button>{" "}
             Cược: {item.diemCuoc} 
            <button
              className='btn btn-success ml-2'
              onClick={() => {
                this.props.datcuoc(item.ma, true);
              }}
            >
              +
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          display: "grid",
          width: "60%",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "40px",
        }}
      >
        {this.renderDanhSachCuoc()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datcuoc: (maQuanCuoc, tangGiam) => {
      dispatch({
        type: "DAT_CUOC",
        payload: {
          maQuanCuoc,
          tangGiam,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
