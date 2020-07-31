const stateDefault = {
  danhSachCuoc: [
    {
      ma: "cua",
      hinhAnh: "./img/gameBauCua/cua.png",
      diemCuoc: 0,
    },
    {
      ma: "nai",
      hinhAnh: "./img/gameBauCua/nai.png",
      diemCuoc: 0,
    },
    {
      ma: "ga",
      hinhAnh: "./img/gameBauCua/ga.png",
      diemCuoc: 0,
    },
    {
      ma: "tom",
      hinhAnh: "./img/gameBauCua/tom.png",
      diemCuoc: 0,
    },
    {
      ma: "ca",
      hinhAnh: "./img/gameBauCua/ca.png",
      diemCuoc: 0,
    },
    {
      ma: "bau",
      hinhAnh: "./img/gameBauCua/bau.png",
      diemCuoc: 0,
    },
  ],

  diemThuong: 100,
  xucSac: [
    {
      ma: "tom",
      hinhAnh: "./img/gameBauCua/tom.png",
    },
    {
      ma: "ca",
      hinhAnh: "./img/gameBauCua/ca.png",
    },
    {
      ma: "bau",
      hinhAnh: "./img/gameBauCua/bau.png",
    },
  ],
};

const GameBauCuaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let danhSachCuocMoi = [...state.danhSachCuoc];

      const quanCuoc = danhSachCuocMoi.find(
        (item) => item.ma === action.payload.maQuanCuoc
      );

      if (quanCuoc) {
        if (action.payload.tangGiam) {
          if (state.diemThuong > 0) {
            quanCuoc.diemCuoc += 10;
            state.diemThuong -= 10;
          }
        } else {
          if (quanCuoc.diemCuoc > 0) {
            state.diemThuong += 10;
            quanCuoc.diemCuoc -= 10;
          }
        }
      }
      return { ...state, danhSachCuoc: danhSachCuocMoi };
    }
    case "PLAY_GAME": {
      let xucSacUpdate = [];
      let danhSachCuocMoi = [...state.danhSachCuoc];

      for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * state.danhSachCuoc.length);

        let xucSacRandom = {
          ma: state.danhSachCuoc[random].ma,
          hinhAnh: state.danhSachCuoc[random].hinhAnh,
        };
        xucSacUpdate.push(xucSacRandom);
      }
      state.xucSac = xucSacUpdate;

      for (const xucSacNN of xucSacUpdate) {
        let quanCuoc = state.danhSachCuoc.find(
          (item) => item.ma === xucSacNN.ma
        );
        if (quanCuoc) {
          state.diemThuong += quanCuoc.diemCuoc;
        }
      }

      for (const quanCuoc of danhSachCuocMoi) {
        let quanCuocExist = xucSacUpdate.find(
          (item) => item.ma === quanCuoc.ma
        );

        if (quanCuocExist) {
          state.diemThuong += quanCuoc.diemCuoc;
        }
      }

      danhSachCuocMoi = danhSachCuocMoi.map((quanCuoc, index) => {
        return { ...quanCuoc, diemCuoc: 0 };
      });

      return { ...state, danhSachCuoc: danhSachCuocMoi };
    }

    default:
      return { ...state };
  }
};

export default GameBauCuaReducer;
