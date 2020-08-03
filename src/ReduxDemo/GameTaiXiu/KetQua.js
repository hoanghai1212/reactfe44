import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    let { win, totalGame, choice } = this.props;
    return (
      <div className="mt-5 text-center display-4">
        <div>
          <p>
            Bạn đã chọn: <span className="text-danger">{choice}</span>
          </p>
          <p>
            Số bàn thắng: <span className="text-success">{win}</span>
          </p>
          <p>
            Tổng số bàn chơi: <span className="text-primary">{totalGame}</span>
          </p>
        </div>

        <button
          className="btn btn-success"
          style={{ fontSize: "30px" }}
          onClick={() => {
            var num = 0;
            let randomXiNgau = setInterval(() =>
            {
              
              num++;
              this.props.dispatch({
                type: "PLAY_GAME",
              });

              if (num > 10) {
                clearInterval(randomXiNgau);
                this.props.dispatch({
                  type: "TINH_DIEM",
                });
              }
            }, 50);
          }}
        >
          XỔ
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { win, totalGame, choice } = state.GameTaiXiuReducer;
  return {
    win,
    totalGame,
    choice,
  };
};

export default connect(mapStateToProps)(KetQua);
