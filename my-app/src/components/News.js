import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as appActions from "../actions/index";
import { Axios } from "../Utils/Axios";
import { connect } from "react-redux";
import "../App.css";
class CmnNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNoiDung: [],
      arrNoiDungChuong: [],
      collapseShow: "d-none",
    };
  }
  onClickShownoidung = (id) => {
    this.setState({
      collapseShow: id,
    });
  };
  componentDidMount() {}
  render() {
    return (
      <div className="col-9 border-content">
        <div className="content-category">
          <div className="pt-5">
            <div>
              <div className="text-center">
                <h2 style={{ color: "blue" }}>Tin tức giáo dục</h2>
              </div>
              <div className="selected-test mt-5 d-flex">
                <div>
                  <ul>
                    <li>
                      <a href="https://tuoitre.vn/viet-nam-co-dai-hoc-duy-nhat-vao-top-701-800-dai-hoc-xuat-sac-nhat-the-gioi-20200815185338699.htm">
                        Việt Nam có đại học duy nhất vào top 701-800 đại học
                        xuất sắc nhất thế giới
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="https://tuoitre.vn/gs-tran-thanh-van-neu-cu-keo-dai-nhung-nhang-thi-khong-the-an-tam-lam-khoa-hoc-tai-que-huong-20200816095226797.htm">
                        Các chuyên gia đầu ngành tại Đại học HIU nghiên cứu khoa
                        học cho tỉnh Long An
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="https://tuoitre.vn/thu-hoi-quy-dinh-tuyen-giao-vien-khong-qua-30-tuoi-20200814095416117.htm">
                        Thu hồi quy định tuyển giáo viên ‘không quá 30 tuổi’
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="https://tuoitre.vn/hom-nay-8-8-hon-850-000-thi-sinh-lam-thu-tuc-thi-tot-nghiep-thpt-20200807214847517.htm">
                        Hôm nay 8-8: hơn 850.000 thí sinh làm thủ tục thi tốt
                        nghiệp THPT
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="https://tuoitre.vn/khi-giay-khen-duoc-phan-loai-20200814084906844.htm">
                        Khi giấy khen được 'phân loại'
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="https://tuoitre.vn/hoc-sinh-rot-truong-chuyen-van-duoc-xet-nguyen-vong-1-vao-truong-cong-lap-20200813115234328.htm">
                        Học sinh rớt trường chuyên vẫn được xét nguyện vọng 1
                        vào trường công lập
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  console.log(state);
  return {
    createTests: state.ActTestQuestion,
    ActTimeExamData: state.ActTimeExamData,
    ActRedirect: state.ActRedirect,
  };
};
const mapDispathToprops = (dispatch) => {
  console.log(dispatch);
  return {
    //    findAllCatagory : (categorys) =>{
    //        dispatch(findCategory(categorys));
    //    }
    appActions: bindActionCreators(appActions, dispatch),
  };
};
export default connect(mapStateToprops, mapDispathToprops)(CmnNews);
