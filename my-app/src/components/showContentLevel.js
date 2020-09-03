import React, { Component } from 'react';
import { dataStatistical } from '../Utils/dataStatistical';
class showContentLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let dataSave = JSON.parse(sessionStorage.dataSave)
        let dataChuong = JSON.parse(sessionStorage.dataChuong);
        console.log(dataChuong);
        let showStatisticals = [];
        // console.log(this.props.match.params.exam);
        let dataStatisticals = dataStatistical();
        console.log(dataStatisticals);
        for (const x in dataStatisticals) {
            if (dataStatisticals.hasOwnProperty(x)) {
                const element = dataStatisticals[x];
                showStatisticals.push(element);
            }
        }
        let showContentStatisticals = showStatisticals.map((showStatistical, index) => {
            console.log(showStatistical);
            let { dung, levels, levelsDung, nameContent, total } = showStatistical;
            console.log(nameContent);
            console.log(levelsDung);
            return (
                <tr>
                    <td className="h6 text-center font-weight-normal">{nameContent}</td>
                    <td className="h6 text-center font-weight-normal">{levelsDung.nhanbiet}/{levels.nhanbiet}</td>
                    <td className="h6 text-center font-weight-normal">{levelsDung.thonghieu}/{levels.thonghieu}</td>
                    <td className="h6 text-center font-weight-normal">{levelsDung.vandung}/{levels.vandung}</td>
                    <td className="h6 text-center font-weight-normal">{levelsDung.vandungcao}/{levels.vandungcao}</td>
                    <td className="h6 text-center font-weight-normal">{dung}/{total}</td>
                </tr>
                // <div style={{ fontWeight: "500" }} className="ml-3" key={index}>
                //     <div>
                //         Đúng {dung}/{total} câu {nameContent}
                //     </div>
                //     <ul>
                //         <li>{levelsDung.nhanbiet}/{levels.nhanbiet} câu mức độ nhận biết </li>
                //         <li>{levelsDung.thonghieu}/{levels.thonghieu} câu mức độ thông hiểu </li>
                //         <li>{levelsDung.vandung}/{levels.vandung} câu mức độ vận dụng </li>
                //         <li>{levelsDung.vandungcao}/{levels.vandungcao} câu mức độ vận dung cao </li>

                //     </ul>
                // </div>
            )
        })

        return (
            <div>
                <div className="font-option mb-3">
                    Thông kê theo mức độ
                </div>
                <tr>
                    <th rowSpan='2' className="text-center">Dạng bài tập</th>
                    <th colSpan='4' className="text-center">Số câu đúng</th>
                    <th rowSpan='2' className="text-center">Tổng số câu</th>
                </tr>
                <tr>
                    <th className="text-center">Nhận biết</th>
                    <th className="text-center">Thông hiểu</th>
                    <th className="text-center">Vận dụng</th>
                    <th className="text-center">Vận dụng cao</th>
                </tr>
                {showContentStatisticals}
            </div>
        )

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
export default (showContentLevel);

