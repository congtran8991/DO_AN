import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as appActions from "../actions/index";
import { Axios } from "../Utils/Axios";
import { connect } from "react-redux";
import "../App.css";
class Introduce extends Component {
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
                <h2 style={{ color: "blue" }}>Giới thiệu</h2>
              </div>
              <div className="selected-test mt-5 d-flex">
                <div>
                  <ul>
                    <li>
                      <a>
                        Hệ thống hỗ trợ đánh giá kiến thức môn vật lý bằng hình
                        thức trắc nghiệm giúp các em học sinh có một cái nhìn
                        tổng quan về năng lực của bản thân đối với môn học này.
                        Từ đó định hướng được hướng đi đúng đắn giúp bản thân
                        ngày càng học tốt hơn trong môn học này.
                      </a>
                    </li>
                    <br />
                    <li>
                      <a>Hệ thống bao gồm 3 chức năng chính :</a>
                    </li>
                    <p>- Tạo bài kiểm tra </p>
                    <p>- Đánh giá năng lực qua 1 bài kiểm tra</p>
                    <p>
                      - Đánh giá, đưa ra nhận xét sau một thời gian làm bài kiểm
                      tra
                    </p>
                    <br />
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
export default connect(mapStateToprops, mapDispathToprops)(Introduce);
