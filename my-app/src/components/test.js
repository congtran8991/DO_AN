import React, { Component } from 'react';
import Header from '../components/header';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import {getCookie} from '../Utils/dataGetCookie';
import {getDateNow} from '../Utils/getDate';
import { Axios } from '../Utils/Axios';
import '../App.css'
import { Redirect, useHistory } from 'react-router-dom';
let dataAnswer = [];
let correct = [];
//console.log(this.props.createTests==undefined);

// (async () => {
// let taode = await Axios('get', '/Api/question/taode');
// for (let i = 1; i < 20; i++) {
//     dataAnswer[i] = null;
// }
//})();
let countdown = 0;
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            createTests: [],
            checkradio: '',
            choose: '',
            indexQuestion: [],
            correctQuestion:[],
            falseDapan: [],
            examSecons: "00",
            examMinutes: "00"
        }
    }
    startTimer = (duration, display) => {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    onChangeData = (event) => {
        let arrayDapAn = [];
        let correctDapan = [];
        let arrayKeyDapAn = [];
        dataAnswer[event.target.name] = event.target.value;
        correct[event.target.name] = event.target.value;
        for (let x in dataAnswer) {
            arrayDapAn.push(dataAnswer[x]);
            correctDapan.push(correct[x]);
            arrayKeyDapAn.push(x);
        }
        console.log(correctDapan);
        this.setState({
            indexQuestion: arrayDapAn,
            correctQuestion: correctDapan,
            choose: "#007bff"
        })
    }
    onResultTest = () => {
        let answerTrue = 0;
        let answerSum = 0;
        let { indexQuestion, correctQuestion } = this.state;
        let {dataCreateTest} = this.props;
        console.log(dataCreateTest);
        console.log(indexQuestion);

        let { createTests, ActTimeExamData } = this.props;
        this.props.createTests.filter((createTest, index) => {
            if (createTest.correctAnswer != indexQuestion[index]) {
                answerSum++;
                return indexQuestion[index] = createTest.correctAnswer;
            } else {
                answerTrue++;
                answerSum++
                return indexQuestion[index] = null;
            }
        })
        let pointExam = (answerTrue / answerSum) * 10;
        this.setState({
            falseDapan: indexQuestion
        })
        /////////////////////////////////
        let dataHistory = {
            createTests,
            indexQuestion,
            ActTimeExamData,
            pointExam,
            codeTest: this.state.codeTest,
            correct: correctQuestion,
            usernameAccount:getCookie('username'),
            timeTest:dataCreateTest.timeTest,
            numberQuestion:dataCreateTest.numberQuestion,
            levelTest:dataCreateTest.levelTest,
            chaptersTest:dataCreateTest.chapterTest,
            dateTest:getDateNow()
        }
        clearInterval(countdown);
        if (correctQuestion.length>0) {
            this.props.appActions.actSaveTheQuiz(dataHistory);
         } else {
            alert("bạn chưa làm bài thi");
        }
    }
    componentWillUnmount() {
        clearInterval(countdown);
    }
    componentDidMount() {
        let s = "00", m = this.props.ActTimeExamData, h = 0;
        countdown = setInterval(() => {
            if (s === -1) {
                m -= 1;
                s = 59;
            }
            if (m === -1) {
                h -= 1;
                m = 59;
            }
            if (h === -1) {
                clearInterval(countdown);
                this.setState({
                    examSecons: '00',
                    examMinutes: '00'
                });
                return;
            }
            this.setState({
                examSecons: s,
                examMinutes: m
            });
            s--;
        }, 1000)
        for (let i = 1; i < this.props.createTests.length; i++) {
            dataAnswer[i] = null;
            correct[i] = null;

        }
        let codeTest = 'D00' + Math.floor(Math.random() * 10000000000);
        this.setState({
            codeTest: codeTest
        })
    }
    render() {
        console.log(getDateNow());
        let { indexQuestion, falseDapan, examMinutes, examSecons, codeTest } = this.state;
        let { createTests, ActRedirect,dataCreateTest} = this.props;
        console.log(dataCreateTest);
        if (ActRedirect == "finishExam") return <Redirect to='/finishExam' />
        let createTestData = createTests.map((createTest, index) => {
            // let falseQuestion = indexQuestion[index] == createTest.correctAnswer ? "red" : "";
            return (
                <div key={index+1} id={createTest._id + index + 1}>
                    <div style={{fontWeight: "500"}}>
                        <span>Câu {index + 1}:&nbsp;</span>
                        {createTest.question}
                    </div>
                    <div>
                        <div className="custom-control custom-radio">
                            <input type="radio"
                                className="custom-control-input"
                                id={createTest._id + "A"}
                                name={index + 1}
                                value="A"
                                onChange={this.onChangeData} />
                            <label className="custom-control-label" htmlFor={createTest._id + "A"}>{createTest.answerA}</label>
                        </div>
                        <div className="custom-control custom-radio" >
                            <input type="radio"
                                className="custom-control-input"
                                id={createTest._id + "B"}
                                name={index + 1}
                                value="B"

                                onChange={this.onChangeData} />
                            <label className="custom-control-label" htmlFor={createTest._id + "B"}>{createTest.answerB}</label>
                        </div>
                        <div className="custom-control custom-radio" >
                            <input type="radio"
                                className="custom-control-input"
                                id={createTest._id + "C"}
                                name={index + 1}
                                value="C"
                                onChange={this.onChangeData} />
                            <label className="custom-control-label" htmlFor={createTest._id + "C"}>{createTest.answerC}</label>
                        </div>
                        <div className="custom-control custom-radio" >
                            <input type="radio"
                                className="custom-control-input"
                                id={createTest._id + "D"}
                                name={index + 1}
                                value="D"
                                onChange={this.onChangeData} />
                            <label className="custom-control-label" htmlFor={createTest._id + "D"}>{createTest.answerD}</label>
                        </div>
                    </div>
                </div>
            );
        })
        let btnAnswer = createTests.map((createTest, index) => {
            return (
                <a href={"#" + createTest._id + index + 1} key={index}>
                    <input className="btn_answer" type="button" value={0 + index + 1} style={{ background: indexQuestion[index] != null ? "#007bff" : "" }} id={createTest._id} />
                </a>
            );
        })
        return (
            <div className="allContentTest">
                <Header />
                <div className="pt-5 text-center codeTest">
                    <span className="text-success">
                        Mã đề thi : {codeTest}
                    </span>
                </div>
                <div className="content-answer text-center">
                    <div className="card rt-card">
                        <div className="card-header br-header">
                            <span className="text-danger">{examMinutes}:{examSecons}</span>
                        </div>
                        <div className="card-body padding-size">
                            {btnAnswer}
                            <div className="mt-3">
                                <button type="button"
                                    className="btn btn-primary btn-size"
                                    onClick={this.onResultTest}
                                >Nộp bài</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mockTest pt-5">
                    <div className="row">
                        <div className="col-9">
                            {/* <div className="content-test">
                            </div> */}
                            <div className="scroll-contentTest">
                                {createTestData}
                            </div>
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
        dataCreateTest:state.ActCreateTest,
        createTests: state.ActTestQuestion,
        ActTimeExamData: state.ActTimeExamData,
        ActRedirect: state.ActRedirect
    }
}
const mapDispathToprops = (dispatch) => {
    console.log(dispatch);
    return {
        //    findAllCatagory : (categorys) =>{
        //        dispatch(findCategory(categorys));
        //    }
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToprops, mapDispathToprops)(Test);

