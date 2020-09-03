import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Redirect, useHistory } from "react-router-dom";
import Header from "../components/header";
import * as appActions from "../actions/index";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
class ShowExamAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexQuestion: [],
    };
  }
  componentDidMount() {
    console.log(this.props.match);
  }
  onResultTest = () => {
    console.log("hdhdh");
    const { history } = this.props;
    history.push("/finishExam");
  };
  render() {
    let { indexQuestion } = this.state;
    //   let {ActDataSaveTheQuiz} = this.props;
    let ActDataSaveTheQuiz = JSON.parse(sessionStorage.dataSave);
    let DataSaveTheQuizs = ActDataSaveTheQuiz.listQuestionTest.map(
      (DataSaveTheQuiz, index) => {
        let correctAns = ActDataSaveTheQuiz[index];
        return (
          <div key={index} id={DataSaveTheQuiz._id + index + 1}>
            <div style={{ fontWeight: "500" }}>
              <span>Câu {index + 1}:&nbsp;</span>
              {DataSaveTheQuiz.question}
            </div>
            <div>
              <div
                className="custom-control custom-radio"
                style={{
                  color:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "A"
                      ? "#da1833"
                      : "",
                  fontWeight:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "A"
                      ? "500"
                      : "",
                }}
              >
                <input
                  type="radio"
                  checked={
                    ActDataSaveTheQuiz.correct[index] == "A" ? true : false
                  }
                  className="custom-control-input"
                  id={DataSaveTheQuiz._id + "A"}
                  name={index + 1}
                  value="A"
                />
                <label
                  className="custom-control-label"
                  htmlFor={DataSaveTheQuiz._id + "A"}
                >
                  {DataSaveTheQuiz.answerA}
                </label>
              </div>
              <div
                className="custom-control custom-radio"
                style={{
                  color:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "B"
                      ? "#da1833"
                      : "",
                  fontWeight:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "B"
                      ? "500"
                      : "",
                }}
              >
                <input
                  type="radio"
                  checked={
                    ActDataSaveTheQuiz.correct[index] == "B" ? true : false
                  }
                  className="custom-control-input"
                  id={DataSaveTheQuiz._id + "B"}
                  name={index + 1}
                  value="B"
                />
                <label
                  className="custom-control-label"
                  htmlFor={DataSaveTheQuiz._id + "B"}
                >
                  {DataSaveTheQuiz.answerB}
                </label>
              </div>
              <div
                className="custom-control custom-radio"
                style={{
                  color:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "C"
                      ? "#da1833"
                      : "",
                  fontWeight:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "C"
                      ? "500"
                      : "",
                }}
              >
                <input
                  type="radio"
                  checked={
                    ActDataSaveTheQuiz.correct[index] == "C" ? true : false
                  }
                  className="custom-control-input"
                  id={DataSaveTheQuiz._id + "C"}
                  name={index + 1}
                  value="C"
                />
                <label
                  className="custom-control-label"
                  htmlFor={DataSaveTheQuiz._id + "C"}
                >
                  {DataSaveTheQuiz.answerC}
                </label>
              </div>
              <div
                className="custom-control custom-radio"
                style={{
                  color:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "D"
                      ? "#da1833"
                      : "",
                  fontWeight:
                    ActDataSaveTheQuiz.listAnswerTest[index] == "D"
                      ? "500"
                      : "",
                }}
              >
                <input
                  type="radio"
                  checked={
                    ActDataSaveTheQuiz.correct[index] == "D" ? true : false
                  }
                  className="custom-control-input"
                  id={DataSaveTheQuiz._id + "D"}
                  name={index + 1}
                  value="D"
                />
                <label
                  className="custom-control-label"
                  htmlFor={DataSaveTheQuiz._id + "D"}
                >
                  {DataSaveTheQuiz.answerD}
                </label>
              </div>
            </div>
          </div>
        );
      }
    );
    let btnAnswer = ActDataSaveTheQuiz.listQuestionTest.map(
      (DataSaveTheQuiz, index) => {
        return (
          <a href={"#" + DataSaveTheQuiz._id + index + 1} key={index}>
            <input
              className="btn_answer"
              type="button"
              value={0 + index + 1}
              style={{
                background:
                  ActDataSaveTheQuiz.listAnswerTest[index] != null
                    ? "gray"
                    : "#007bff",
              }}
              id={DataSaveTheQuiz._id}
            />
          </a>
        );
      }
    );
    return (
      <div className="allContentTest">
        <Header />
        <div className="pt-5 text-center codeTest">
          <span className="text-success">
            Mã đề thi : {ActDataSaveTheQuiz.examCode}
          </span>
        </div>
        <div className="content-answer text-center">
          <div className="card rt-card">
            <div className="card-header br-header">
              <span className="text-danger">
                Điểm:{parseFloat(ActDataSaveTheQuiz.testScores).toFixed(2)}
              </span>
            </div>
            <div className="card-body padding-size">
              {btnAnswer}
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-primary btn-size"
                  onClick={this.onResultTest}
                >
                  Homee
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mockTest pt-5">
          <div className="row">
            <div className="col-9">
              <div className="scroll-contentTest">{DataSaveTheQuizs}</div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  console.log(state);
  return {
    ActTimeExamData: state.ActTimeExamData,
    ActRedirect: state.ActRedirect,
    ActDataSaveTheQuiz: state.ActDataSaveTheQuiz,
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
export default withRouter(
  connect(mapStateToprops, mapDispathToprops)(ShowExamAnswers)
);
