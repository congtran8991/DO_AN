import React, { Component } from "react";
import { dataContentChapter } from "../Utils/dataContentChapter";
class showContentLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let dataSave = JSON.parse(sessionStorage.dataSave);
    let dataChuong = JSON.parse(sessionStorage.dataChuong);
    let listdatas = dataSave.listQuestionTest;
    let showContentChapter = [];
    let exer = listdatas.map((ex) => ex.exerciseFormat);
    exer = Array.from(new Set(exer));
    // console.log(this.props.match.params.exam);
    let dataShow = dataContentChapter(dataSave, dataChuong);
    let desExer = listdatas.map((desE) => desE.desExerciseFormat);
    desExer = Array.from(new Set(desExer));
    for (const x in dataShow) {
      if (dataShow.hasOwnProperty(x)) {
        const element = dataShow[x];
        exer.forEach((ch, index) => {
          if (element.contentChuong[ch] == 0) {
            delete element.contentChuong[ch];
            delete element.contentChuongdung[ch];
          } else {
            element.nameCtChap.push(ch);
            element.nameCtChapVn.push(desExer[index]);
          }
        });
        showContentChapter.push(element);
      }
    }
    let showChapter = showContentChapter.map((showCh, index) => {
      let {
        contentChuong,
        contentChuongdung,
        nameChapter,
        total,
        nameCtChap,
        dung,
        nameCtChapVn,
      } = showCh;
      return (
        // <tr key={index}>
        //     <td>{nx.nameContent}</td>
        //     <td className="text-center" style={{ color: "#dc3545" }}>{nx.evaluate}</td>
        //     <td>
        //         <div>- Bạn đã làm đúng {nx.correctAnswer}/{nx.sumCorrect} (đạt tỉ lệ {(nx.correctAnswer / nx.sumCorrect) * 100} % )</div>
        //         <div>- {nhanxet}</div>
        //     </td>
        // </tr>
        <div style={{ fontWeight: "500" }} className="ml-3" key={index}>
          {/* <div>
                        Đúng {dung} / {total} câu {nameChapter}
                    </div> */}
          {/* <tr>
                        <th className="text-center">Dạng bài tập</th>
                        <th className="text-center">Số câu đúng</th>
                    </tr> */}
          {nameCtChap.map((nameCt, index) => {
            return (
              <>
                <li key={index}>
                  {contentChuongdung[nameCt]} / {contentChuong[nameCt]} dạng{" "}
                  {nameCtChapVn[index]}
                </li>
              </>
            );
          })}
        </div>
      );
    });
    return (
      <div>
        {/* <tr>
          <td>Dang bài tập</td>
          <td>Số câu đúng</td>
        </tr> */}
        {showChapter}
      </div>
      //   <div style={{ fontWeight: "500" }} className="">
      //     <div className="font-option mb-3">Thông kê dạng bài tập</div>
      //     <div style={{ width: 800 + "px" }}>
      //       <tr>
      //         <th className="text-center">Dạng bài tập</th>
      //         <th className="text-center">Số câu đúng</th>
      //       </tr>
      //       {showChapter}
      //     </div>
      //   </div>
    );
  }
}
// const mapStateToprops = (state) => {
//     return {
//         createTests: state.ActTestQuestion,
//         ActTimeExamData: state.ActTimeExamData,
//         ActRedirect: state.ActRedirect,
//         ActDataSaveTheQuiz: state.ActDataSaveTheQuiz
//     }
// }
// const mapDispathToprops = (dispatch) => {
//     return {
//         //    findAllCatagory : (categorys) =>{
//         //        dispatch(findCategory(categorys));
//         //    }
//         appActions: bindActionCreators(appActions, dispatch)
//     }
// }
//export default withRouter(connect(mapStateToprops, mapDispathToprops)(showContentLevel))
export default showContentLevel;
