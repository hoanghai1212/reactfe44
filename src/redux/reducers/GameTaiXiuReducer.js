const listXucSac = [
  {
    id: 1,
    hinhAnh: "./img/gameXucSac/1.png",
  },
  {
    id: 2,
    hinhAnh: "./img/gameXucSac/2.png",
  },
  {
    id: 3,
    hinhAnh: "./img/gameXucSac/3.png",
  },
  {
    id: 4,
    hinhAnh: "./img/gameXucSac/4.png",
  },
  {
    id: 5,
    hinhAnh: "./img/gameXucSac/5.png",
  },
  {
    id: 6,
    hinhAnh: "./img/gameXucSac/6.png",
  },
];
const stateDefault = {
  xucSac: [
    {
      id: 1,
      hinhAnh: "./img/gameXucSac/1.png",
    },
    {
      id: 2,
      hinhAnh: "./img/gameXucSac/2.png",
    },
    {
      id: 3,
      hinhAnh: "./img/gameXucSac/3.png",
    },
  ],
  win: 0,
  totalGame: 0,
  choice: "TÀI", //TAI: true || XIU: false
};

const gameXucSacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.choice = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      let xucSacUpdate = [...state.xucSac];
      for (let i = 0; i < 3; i++) {
        const RANDOM = Math.floor(Math.random() * 6);
        xucSacUpdate[i] = listXucSac[RANDOM];
      }
      state.xucSac = xucSacUpdate;
      return { ...state };
    }

    case "TINH_DIEM": {
      const sumXucSac = state.xucSac.reduce((sum, point) => sum + point.id, 0);
      const checkIfAllSame = () => new Set(state.xucSac).size === 1;

      if (
        !checkIfAllSame() &&
        ((state.choice === "TÀI" && sumXucSac > 10) ||
          (state.choice === "XỈU" && sumXucSac < 11))
      ) {
        state.win++;
      }
      state.totalGame++;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default gameXucSacReducer;
