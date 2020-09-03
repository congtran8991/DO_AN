export const dataCommentTest = (dataSave, dataChuong) => {
  //JSON.parse(sessionStorage.dataSave)
  //JSON.parse(sessionStorage.dataChuong);
  let listdatas = dataSave.listQuestionTest;
  let dapan = dataSave.correct;
  let noidungChuong = dataChuong;
  let listDapandung = listdatas.map((listdata, index) => {
    if (listdata.correctAnswer == dapan[index]) {
      return { ...listdata, kq: "dung" };
    } else {
      return { ...listdata, kq: "sai" };
    }
  });
  console.log(listDapandung);
  let dataCmt = {};
  let desExer = listDapandung.map((desE) => desE.desExerciseFormat);
  desExer = Array.from(new Set(desExer));
  let des = listDapandung.map((desE) => desE.exerciseFormat);
  des = Array.from(new Set(des));
  console.log(des);
  des.forEach((e, index) => {
    let dataFilter = listDapandung.filter((chap) => chap.exerciseFormat == e);
    dataCmt[e] = {
      nameContentCode: e,
      nameContent: desExer[index],
      classificationPoints: 0,
      pointTest: 0,
      evaluate: "",
      correctAnswer: 0,
      sumCorrect: 0,
    };
    let a = dataFilter.forEach((data, index) => {
      switch (data.lever) {
        case "nhanbiet":
          dataCmt[e].classificationPoints++;
          dataCmt[e].sumCorrect++;
          if (data.kq == "dung") {
            dataCmt[e].pointTest++;
            dataCmt[e].correctAnswer++;
          }
          break;
        case "thonghieu":
          dataCmt[e].classificationPoints += 2;
          dataCmt[e].sumCorrect++;
          if (data.kq == "dung") {
            dataCmt[e].pointTest += 2;
            dataCmt[e].correctAnswer++;
          }
          break;
        case "vandung":
          dataCmt[e].classificationPoints += 3;
          dataCmt[e].sumCorrect++;
          if (data.kq == "dung") {
            dataCmt[e].pointTest += 3;
            dataCmt[e].correctAnswer++;
          }
          break;
        case "vandungcao":
          dataCmt[e].classificationPoints += 4;
          dataCmt[e].sumCorrect++;
          if (data.kq == "dung") {
            dataCmt[e].pointTest += 4;
            dataCmt[e].correctAnswer++;
          }
          break;
      }
    });
  });
  for (const x in dataCmt) {
    if (dataCmt.hasOwnProperty(x)) {
      const elm = dataCmt[x];
      console.log(elm.pointTest);
      let ratio = (elm.pointTest / elm.classificationPoints) * 10;
      console.log("s", ratio);
      let danhgia1 = ratio >= 7 && ratio < 8.5 ? "Khá" : "Tốt";
      let danhgia2 = ratio >= 5 && ratio < 7 ? "Trung bình" : danhgia1;
      let phanloai = ratio < 5 ? "Yếu" : danhgia2;
      elm.evaluate = phanloai;
    }
  }
  console.log(dataCmt);
  return dataCmt;
};
// làm đúng 50% thì qua ải
