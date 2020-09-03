const express = require("express");
const router = express.Router();
let createquestion = require("../Model/createQuestion");
var checkToken = require("./checkToken");
var auth = checkToken.checkToken;
const { set } = require("mongoose");
// router.post('/', (req, res) => {
//     const newCreatequestion = new createquestion({
//         question :'s',
//         chapter  : 's',
//         level   : 's',
//         answerA : 's',
//         answerB : 's',
//         answerC :'s',
//         answerD : 's',
//         correctAnswer : 's',
//         exerciseFormat : 's'

//     })
//     newCreatequestion
//         .save()
//         .then(product => res.send(product))
//         .catch(err => console.log(err))
// })
router.get("/", auth, (req, res) => {
  createquestion
    .find({})
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send("not product");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/chap", (req, res) => {
  createquestion
    .find({})
    .then((data) => {
      let chuong = data.map((ch) => ch.chapter);
      chuong = Array.from(new Set(chuong));
      let contentChuong = [];
      chuong.forEach((ch, i) => {
        let filterChap = data.filter((dt, i) => dt.chapter == ch);
        let mapChapDes = filterChap.map((h, i) => h.desExerciseFormat);
        mapChapDes = Array.from(new Set(mapChapDes));
        let mapChap = filterChap.map((h, i) => h.exerciseFormat);
        mapChap = Array.from(new Set(mapChap));
        let showData = mapChapDes.map((data, i) => {
          return { noidungValue: data, noidungName: mapChap[i] };
        });
        listNoidung = {
          tenChuong: ch,
          noidung: showData,
        };
        contentChuong.push(listNoidung);
      });
      res.send(contentChuong);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/chapcreate", auth, (req, res) => {
  createquestion
    .find({})
    .then((data) => {
      let chuong = data.map((ch) => ch.chapter);
      chuong = Array.from(new Set(chuong));
      let contentChuong = [];
      chuong.forEach((ch, i) => {
        let filterChap = data.filter((dt, i) => dt.chapter == ch);
        let mapChapDes = filterChap.map((h, i) => h.desExerciseFormat);
        mapChapDes = Array.from(new Set(mapChapDes));
        let mapChap = filterChap.map((h, i) => h.exerciseFormat);
        mapChap = Array.from(new Set(mapChap));
        let showData = mapChapDes.map((data, i) => {
          return { noidungValue: data, noidungName: mapChap[i] };
        });
        listNoidung = {
          tenChuong: ch,
          noidung: showData,
        };
        contentChuong.push(listNoidung);
      });
      res.send(contentChuong);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/contentChap", auth, (req, res) => {
  createquestion
    .find({})
    .then((data) => {
      let exercise = {
        exer_format: [],
        des_exer_format: [],
      };
      if (data) {
        let exerFormat = data.map((ex) => ex.exerciseFormat);
        exerFormat = Array.from(new Set(exerFormat));

        let desExerFormat = data.map((des) => des.desExerciseFormat);
        desExerFormat = Array.from(new Set(desExerFormat));

        exercise.exer_format = exerFormat;
        exercise.des_exer_format = desExerFormat;
        res.status(200).send(exercise);
      } else {
        res.status(404).send("not product");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});
function randomInt(nums, socauLength) {
  (ranNums = []), (i = nums.length), (j = 0);
  while (i--) {
    if (ranNums.length > socauLength - 1) {
      return ranNums;
    }
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  return ranNums;
}
function randomTaode(nums) {
  (ranNums = []), (i = nums.length), (j = 0);
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  return ranNums;
}
function classify(
  dataNoiDungs,
  nhanbiet,
  thonghieu,
  vandung,
  vandungcao,
  dokho,
  taode,
  loainoidung
) {
  for (let i = 0; i < dataNoiDungs.length; i++) {
    switch (dataNoiDungs[i].lever) {
      case "nhanbiet":
        nhanbiet.push(dataNoiDungs[i]);
        break;
      case "thonghieu":
        thonghieu.push(dataNoiDungs[i]);
        break;
      case "vandung":
        vandung.push(dataNoiDungs[i]);
        break;
      case "vandungcao":
        vandungcao.push(dataNoiDungs[i]);
        break;
    }
  }
  //20 câu
  console.log(dokho);

  switch (dokho) {
    case "de":
      let socauThongHieu = Math.round((loainoidung * 30) / 100);
      let socauVanDung = Math.round((loainoidung * 20) / 100);
      let socauVanDungCao = Math.round((loainoidung * 10) / 100);
      let socauNhanBiet =
        loainoidung - socauThongHieu - socauVanDung - socauVanDungCao;
      randomInt(nhanbiet, socauNhanBiet).map((nhanbietData, index) => {
        taode.push(nhanbietData);
        console.log(taode.length, "a");
      });
      randomInt(thonghieu, socauThongHieu).map((thonghieuData, index) => {
        taode.push(thonghieuData);
        console.log(taode.length, "b");
      });
      randomInt(vandung, socauVanDung).map((vandungData, index) => {
        taode.push(vandungData);
        console.log(taode.length, "c");
      });
      randomInt(vandungcao, socauVanDungCao).map((vandungcaoData, index) => {
        taode.push(vandungcaoData);
        console.log(taode.length, "d");
      });
      break;
    case "trungbinh":
      let socauThongHieutb = Math.round((loainoidung * 20) / 100);
      let socauVanDungtb = Math.round((loainoidung * 30) / 100);
      let socauVanDungCaotb = Math.round((loainoidung * 20) / 100);
      let socauNhanBiettb =
        loainoidung - socauThongHieutb - socauVanDungtb - socauVanDungCaotb;
      randomInt(nhanbiet, socauNhanBiettb).map((nhanbietData, index) => {
        taode.push(nhanbietData);
        console.log(taode.length, "a");
      });
      randomInt(thonghieu, socauThongHieutb).map((thonghieuData, index) => {
        taode.push(thonghieuData);
        console.log(taode.length, "b");
      });
      randomInt(vandung, socauVanDungtb).map((vandungData, index) => {
        taode.push(vandungData);
        console.log(taode.length, "c");
      });
      randomInt(vandungcao, socauVanDungCaotb).map((vandungcaoData, index) => {
        taode.push(vandungcaoData);
        console.log(taode.length, "d");
      });
      break;
    case "kho":
      let socauThongHieuk = Math.round((loainoidung * 20) / 100);
      let socauVanDungk = Math.round((loainoidung * 20) / 100);
      let socauVanDungCaok = Math.round((loainoidung * 30) / 100);
      let socauNhanBietk =
        loainoidung - socauThongHieuk - socauVanDungk - socauVanDungCaok;
      randomInt(nhanbiet, socauNhanBietk).map((nhanbietData, index) => {
        taode.push(nhanbietData);
      });
      randomInt(thonghieu, socauThongHieuk).map((thonghieuData, index) => {
        taode.push(thonghieuData);
      });
      randomInt(vandung, socauVanDungk).map((vandungData, index) => {
        taode.push(vandungData);
      });
      randomInt(vandungcao, socauVanDungCaok).map((vandungcaoData, index) => {
        taode.push(vandungcaoData);
      });
      break;
  }
  nhanbiet.length = 0;
  thonghieu.length = 0;
  vandungcao.length = 0;
  vandung.length = 0;
}
//de 20/15/10/5
//1 chuong 10câu

router.post("/taode", auth, (req, res) => {
  let socaus = req.body.numberQuestion;
  let socau = req.body.numberQuestion;
  let taode = [];
  let nhanbiet = [];
  let thonghieu = [];
  let vandung = [];
  let vandungcao = [];
  let dokho = req.body.levelTest;
  let noidung1;
  let noidung2;
  let noidung3;
  let noidung4;
  let noidung5;
  let noidung6;
  let noidung7;
  let noidung = req.body.chapterTest;
  let { chapterTest, levelTest } = req.body;
  console.log(req.body);
  createquestion
    .find({ exerciseFormat: noidung })
    .then((result) => {
      let socaunguyen = Math.floor(socau / noidung.length);
      let sodu = socau % noidung.length;
      for (let i = 0; i < noidung.length; i++) {
        switch (noidung[i]) {
          case noidung[noidung.length - noidung.length]:
            noidung1 = socaunguyen + (sodu > 0 ? 1 : 0);
            socaunguyen = Math.floor(socau / noidung.length);
            sodu--;
            break;
          case noidung[noidung.length - noidung.length + 1]:
            noidung2 = socaunguyen + (sodu > 0 ? 1 : 0);
            socaunguyen = Math.floor(socau / noidung.length);
            sodu--;
            break;
          case noidung[noidung.length - noidung.length + 2]:
            noidung3 = socaunguyen + (sodu > 0 ? 1 : 0);
            socaunguyen = Math.floor(socau / noidung.length);
            sodu--;
            break;
          case noidung[noidung.length - noidung.length + 3]:
            noidung4 = socaunguyen + (sodu > 0 ? 1 : 0);
            socaunguyen = Math.floor(socau / noidung.length);
            sodu--;
            break;
          case noidung[noidung.length - noidung.length + 4]:
            noidung5 = socaunguyen + (sodu > 0 ? 1 : 0);
            socaunguyen = Math.floor(socau / noidung.length);
            sodu--;
            break;
          case noidung[noidung.length - noidung.length + 5]:
            noidung6 = socaunguyen + (sodu > 0 ? 1 : 0);
            socaunguyen = Math.floor(socau / noidung.length);
            sodu--;
            break;
          case noidung[noidung.length - noidung.length + 6]:
            noidung7 = socaunguyen + (sodu > 0 ? 1 : 0);
            socaunguyen = Math.floor(socau / noidung.length);
            sodu--;
            break;
        }
      }
      for (let i = 0; i < noidung.length; i++) {
        let dataNoiDungs = result.filter((datanoidung) => {
          return datanoidung.exerciseFormat == noidung[i];
        });
        switch (noidung[i]) {
          case noidung[noidung.length - noidung.length]:
            classify(
              dataNoiDungs,
              nhanbiet,
              thonghieu,
              vandung,
              vandungcao,
              dokho,
              taode,
              noidung1
            );
            nhanbiet.length = 0;
            thonghieu.length = 0;
            vandungcao.length = 0;
            vandung.length = 0;
            break;
          case noidung[noidung.length - noidung.length + 1]:
            classify(
              dataNoiDungs,
              nhanbiet,
              thonghieu,
              vandung,
              vandungcao,
              dokho,
              taode,
              noidung2
            );
            nhanbiet.length = 0;
            thonghieu.length = 0;
            vandungcao.length = 0;
            vandung.length = 0;
            break;
          case noidung[noidung.length - noidung.length + 2]:
            classify(
              dataNoiDungs,
              nhanbiet,
              thonghieu,
              vandung,
              vandungcao,
              dokho,
              taode,
              noidung3
            );
            nhanbiet.length = 0;
            thonghieu.length = 0;
            vandungcao.length = 0;
            vandung.length = 0;
            break;
          case noidung[noidung.length - noidung.length + 3]:
            classify(
              dataNoiDungs,
              nhanbiet,
              thonghieu,
              vandung,
              vandungcao,
              dokho,
              taode,
              noidung4
            );
            nhanbiet.length = 0;
            thonghieu.length = 0;
            vandungcao.length = 0;
            vandung.length = 0;
            break;
          case noidung[noidung.length - noidung.length + 4]:
            classify(
              dataNoiDungs,
              nhanbiet,
              thonghieu,
              vandung,
              vandungcao,
              dokho,
              taode,
              noidung5
            );
            nhanbiet.length = 0;
            thonghieu.length = 0;
            vandungcao.length = 0;
            vandung.length = 0;
            break;
          case noidung[noidung.length - noidung.length + 5]:
            classify(
              dataNoiDungs,
              nhanbiet,
              thonghieu,
              vandung,
              vandungcao,
              dokho,
              taode,
              noidung6
            );
            nhanbiet.length = 0;
            thonghieu.length = 0;
            vandungcao.length = 0;
            vandung.length = 0;
            break;
          case noidung[noidung.length - noidung.length + 6]:
            classify(
              dataNoiDungs,
              nhanbiet,
              thonghieu,
              vandung,
              vandungcao,
              dokho,
              taode,
              noidung7
            );
            nhanbiet.length = 0;
            thonghieu.length = 0;
            vandungcao.length = 0;
            vandung.length = 0;
            break;
        }
      }
      res.send(randomTaode(taode));
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get((req, res) => {});
module.exports = router;
