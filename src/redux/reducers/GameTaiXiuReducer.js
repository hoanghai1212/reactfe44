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
  total: 0,
  choice: "TÀI",
};

const gameXucSacReducer = (state = stateDefault, action) => {
  return { ...state };
};

export default gameXucSacReducer;
