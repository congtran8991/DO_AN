import React, { Component } from 'react';
import Header from './header';
import TabFunction from './tabFunction';
import ShowExamAnswers from './showExamAnswers';
import ShowContentLevel from './showContentLevel';
import ShowContentChapter from './showContentChapter';
import ShowCommentTest from './showCommentTest';
import '../App.css';
import { bindActionCreators } from 'redux';
import { Redirect, useHistory } from 'react-router-dom';
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import history from './history';
class FinishExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEx: false,
            showContentLevel: false
        }
    }
    onCLickThongke = () => {
        // this.setState({
        //     a: 7
        // })
        // history.push('/finishExam/d');
    }
    onCLickNhanxet = () => {
    }
    onClickXemdapan = () => {
        this.setState({
            showEx: true
        })
    }
    onShowLevel = () => {
        // this.setState({
        //     showContentLevel:!this.state.showContentLevel
        // })
    }
    render() {
        console.log(JSON.parse(sessionStorage.dataSave));
        //if(this.state.a==7) return <Redirect to='/finishExam/dapan' />
        if (this.state.showEx == true) return <ShowExamAnswers />
        console.log(this.props.match.params.exam);
        let showContentLevel = this.state.showContentLevel == false ? 'ml-3 d-none' : 'ml-3';
        // let {ActDataSaveTheQuiz} = this.props;
        let ActDataSaveTheQuiz = JSON.parse(sessionStorage.dataSave);
        return (
            <div>
                <Header />
                <div className="container-fluid boder-right">
                    <div className="row">
                        <TabFunction />
                        <div className="col-9 border-content">
                            <div className="text-center mt-2">
                                <h2 className="text-success">KẾT QUẢ THI - MÃ ĐỀ {ActDataSaveTheQuiz.examCode}</h2>
                            </div>
                            <div className="text-uppercase font-weight-bold ml-2 mt-4">
                                <p className="text-danger">Bạn đã hoàn thành bài thi với điểm số {ActDataSaveTheQuiz.testScores}/10</p>
                            </div>
                            <div className="" >
                                <div id="accordionn">
                                    <button className="btn btn-primary mr-3"
                                        id="collapseExampleOne"
                                        onClick={this.onCLickThongke} type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseExample"
                                        aria-expanded="true"
                                        aria-controls="collapseExample">
                                        Thống kê
                                    </button>
                                    <button className="btn btn-primary mr-3"
                                        id="collapseExampleTwo"
                                        onClick={this.onCLickThongke} type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseExampleNx"
                                        aria-expanded="true"
                                        aria-controls="collapseExampleNx">
                                        Nhận xét
                                    </button>
                                    <button className="btn btn-primary"
                                        onClick={this.onClickXemdapan}>Xem đáp án</button>
                                    <div className="collapse" id="collapseExample" aria-labelledby="collapseExampleOne" data-parent="#accordionn">
                                        <div className="mt-3">
                                            <div id="accordion">
                                                <div className="">
                                                    <div className="font-option" id="headingOne">
                                                        <div className="font-option"
                                                            data-toggle="collapse"
                                                            data-target="#collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne">1. Theo mức độ
                                                            </div>
                                                    </div>
                                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <ShowContentLevel />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="" id="headingTwo">
                                                        <div className="font-option"
                                                            data-toggle="collapse"
                                                            data-target="#collapseTwo"
                                                            aria-expanded="true"
                                                            aria-controls="collapseTwo">2. Theo nội dung
                                                            </div>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <ShowContentChapter />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseExampleNx" className="collapse" aria-labelledby="collapseExampleTwo" data-parent="#accordionn">
                                        <div className="card-body">
                                           <ShowCommentTest/>
                                        </div>
                                    </div>
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
        ActDataSaveTheQuiz: state.ActDataSaveTheQuiz
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
export default withRouter(connect(mapStateToprops, mapDispathToprops)(FinishExam))
//const ShowTheLocationWithRouter = withRouter(FinishExam);
//export default connect(mapStateToprops, mapDispathToprops,withRouter)(withRouter(ShowTheLocationWithRouter));

//export default withRouter(FinishExam);

