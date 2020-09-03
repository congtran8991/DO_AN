import React, { Component } from "react";
import { dataCommentTest } from "../Utils/dataCommentTest";
class showCommentTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let dataSave = JSON.parse(sessionStorage.dataSave);
    let dataChuong = JSON.parse(sessionStorage.dataChuong);
    let contentNxTest = [];
    let dataCmt = dataCommentTest(dataSave, dataChuong);
    for (const x in dataCmt) {
      if (dataCmt.hasOwnProperty(x)) {
        const el = dataCmt[x];
        contentNxTest.push(el);
      }
    }
    let contentNxTests = contentNxTest.map(
      (nx, index) => {
        console.log(nx);
        let nhanxet = "";
        switch (nx.evaluate) {
          case "Yếu":
            nhanxet =
              "Kiến thức của bạn ở nội dung này còn rất hạn chế. Bạn cần học lý thuyết và làm bài tập nhiều hơn.";
            break;
          case "Trung bình":
            nhanxet =
              "Kiến thức ở nội dung này của bạn chỉ tạm chấp nhận. Tuy nhiên bạn cần phải nâng cao thêm để đạt kết quả tốt hơn";
            break;
          case "Khá":
            nhanxet =
              "Kiến thức của bạn ở nội dung này khá tốt. Bạn cần ôn thêm nhiều dạng bài tập mới để phần này càng hoàn hảo hơn";
            break;
          case "Tốt":
            nhanxet =
              "Kiến thức của bạn ở phần này rất tốt. Mặc dù vậy bạn không nên chểnh mảng mà tiếp tục giữ vững phong độ như này nhé";
            break;
        }
        return (
          <tr key={index}>
            <td className="h6 font-weight-normal">{nx.nameContent}</td>
            <td
              className="h6 text-center font-weight-normal"
              style={{ color: "#dc3545" }}
            >
              {nx.evaluate}
            </td>
            <td className="h6 font-weight-normal">
              <div>
                - Bạn đã làm đúng {nx.correctAnswer}/{nx.sumCorrect} (đạt tỉ lệ{" "}
                {parseFloat(nx.correctAnswer / nx.sumCorrect).toFixed(2) * 100}{" "}
                % )
              </div>
              <div>- {nhanxet}</div>
            </td>
          </tr>
        );
      }
      //<li key={index}>Nội dung {nx.nameContent}:&nbsp;&nbsp;<i style={{color:"#dc3545"}}>{nx.evaluate}</i></li>
    );
    return (
      <div style={{ fontWeight: "500" }} className="">
        <div className="font-option mb-3">Nhận xét đánh giá các nội dung</div>
        <div style={{ width: 800 + "px" }}>
          <tr>
            <th className="text-center">Tên nội dung</th>
            <th className="text-center" style={{ width: 200 + "px" }}>
              Đánh giá
            </th>
            <th className="text-center">Nhận xét</th>
          </tr>

          {contentNxTests}
        </div>
      </div>
    );
  }
}
export default showCommentTest;
