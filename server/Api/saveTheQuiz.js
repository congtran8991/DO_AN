const express = require("express");
const router = express.Router();
var checkToken = require("./checkToken");
var auth = checkToken.checkToken;
let historyTest = require("../Model/historyTest");
router.post("/", auth, (req, res) => {
  console.log(req.body);
  let {
    createTests,
    indexQuestion,
    ActTimeExamData,
    pointExam,
    codeTest,
    correct,
    usernameAccount,
    timeTest,
    numberQuestion,
    levelTest,
    chaptersTest,
    dateTest,
  } = req.body;
  let newHistoryTest = new historyTest({
    listQuestionTest: createTests,
    timeCheckTest: ActTimeExamData,
    listAnswerTest: indexQuestion,
    testScores: pointExam,
    examCode: codeTest,
    correct: correct,
    userHistory: usernameAccount,
    timeTest,
    numberQuestion,
    levelTest,
    chaptersTest,
    dateTest,
  });
  newHistoryTest
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.post("/listHistoryTest", auth, (req, res) => {
  let { user } = req.body;
  historyTest
    .find({ userHistory: user })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/showEvaluate/:user/:id", auth, (req, res) => {
  let { user, id } = req.params;
  historyTest
    .find({ $and: [{ userHistory: user }, { _id: id }] })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => res.send(err));
});
router.post("/showChart", (req, res) => {
  var { dataChap, user } = req.body;
  console.log(dataChap);
  // { $and: [{ chaptersTest: dataChap }, { _id: id }] }
  historyTest
    .find({ $and: [{ chaptersTest: dataChap }, { userHistory: user }] })
    .then((result) => {
      let chap_time = {
        ex_code: [],
        time_test: [],
      };
      let apiKetqua = [];
      let objResl = [];
      let diemtb = [];
      result.map((re, ind) => {
        chap_time.ex_code.push(re.examCode);
        chap_time.time_test.push(re.dateTest);
        objResl[re.examCode] = {
          madethi: re.examCode,
          caudung: 0,
          tongcau: 0,
          time_test: re.dateTest,
        };
        return re.listQuestionTest.filter((li, j) => {
          if (li.exerciseFormat == dataChap) {
            li["examCode"] = re.examCode;
            if (li.correctAnswer === re.correct[j]) {
              console.log(li.correctAnswer === re.correct[j], j, "dd");
              li["kq"] = "dung";
              switch (li.lever) {
                case "nhanbiet":
                  li["diem"] = 1;
                  objResl[re.examCode].caudung += 1;
                  objResl[re.examCode].tongcau++;
                  break;
                case "thonghieu":
                  li["diem"] = 2;
                  objResl[re.examCode].caudung += 2;
                  objResl[re.examCode].tongcau += 2;
                  break;
                case "vandung":
                  li["diem"] = 3;
                  objResl[re.examCode].caudung += 3;
                  objResl[re.examCode].tongcau += 3;
                  break;
                case "vandungcao":
                  li["diem"] = 4;
                  objResl[re.examCode].caudung += 4;
                  objResl[re.examCode].tongcau += 4;
                  break;
              }
            } else {
              li["kq"] = "sai";
              switch (li.lever) {
                case "nhanbiet":
                  li["diem"] = 1;
                  objResl[re.examCode].tongcau++;
                  break;
                case "thonghieu":
                  li["diem"] = 2;
                  objResl[re.examCode].tongcau += 2;
                  break;
                case "vandung":
                  li["diem"] = 3;
                  objResl[re.examCode].tongcau += 3;
                  break;
                case "vandungcao":
                  li["diem"] = 4;
                  objResl[re.examCode].tongcau += 4;
                  break;
              }
            }
          }
          return li.exerciseFormat == dataChap;
        });
      });
      chap_time.ex_code.forEach((ex, i) => {
        apiKetqua.push(objResl[ex]);
      });
      let kj = apiKetqua.map((ap, i) => {
        let diem = (ap.caudung / ap.tongcau) * 100;
        return { ...ap, phamtramdiem: diem };
      });
      console.log(kj);
      res.send(kj);
      // let data = result.map((rel, index) => {
      //     b = {
      //         diemDung: 0,
      //         diemTong:0,
      //         madethi:index
      //     }

      //     console.log(rel);
      //     return (
      //         rel.listQuestionTest.map((listQues, i) => {
      //             if (listQues.exerciseFormat == "machRLCmacnoitiep") {
      //                 if (listQues.correctAnswer == rel.correct[i]) {
      //                     switch (listQues.lever) {
      //                         case "nhanbiet":

      //                             b.diemDung ++;
      //                             b.diemTong ++;
      //                             break;
      //                         case "thonghieu":

      //                             b.diemDung += 2;
      //                             b.diemTong+=2;
      //                             break;
      //                         case "vandung":

      //                             b.diemDung += 3;
      //                             b.diemTong+=3
      //                             break;
      //                         case "vandungcao":

      //                             b.diemDung += 4;
      //                             b.diemTong+=4
      //                             break;
      //                     }
      //                     return b
      //                     //let abcd =    { ...listQues, kq: "dung", examCode: rel.examCode }
      //                 } else {
      //                     switch (listQues.lever) {
      //                         case "nhanbiet":

      //                             b.diemTong ++;
      //                             break;
      //                         case "thonghieu":

      //                             b.diemTong+=2;
      //                             break;
      //                         case "vandung":

      //                             b.diemTong+=3
      //                             break;
      //                         case "vandungcao":

      //                             b.diemTong+=4
      //                             break;
      //                     }
      //                     return b
      //                 }

      //             }
      //         })

      //     )
      // })

      // for(let j=0;j<data.length;j++){
      //     for(let k=0;k<data[j].length;k++){
      //         if(data[j][k]==null){
      //             data[j].splice(k,1)
      //         }
      //     }
      // }
    })
    .catch((err) => res.send(err));
});
module.exports = router;
