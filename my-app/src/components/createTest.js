import React, { Component } from 'react';
import Header from '../components/header';
import TabFunction from '../components/tabFunction';
import { Axios } from '../Utils/Axios';
import { getCookie } from '../Utils/dataGetCookie';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from "react-router-dom";
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import '../App.css';
// let arrayTamNoiDungChuong = [];
// let arrNoiDungChuong = [];
class CreateTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelTest: 'No',
            chapterTest: [],
            timeTest: '0',
            collapseShow: "d-none",
            numberQuestion: 0,
            arrayTamNoiDungChuong: [],
            arrNoiDungChuong: [],
            listNoiDung: []
        }
    }
    onChangeCreateTestChuong = (e) => {
        let { arrayTamNoiDungChuong, arrNoiDungChuong } = this.state;
        console.log(e.target.name);
        console.log(arrNoiDungChuong);


        let checkArrayNoidungChuong = arrayTamNoiDungChuong.indexOf(e.target.name) == -1;
        console.log(arrayTamNoiDungChuong.indexOf(e.target.name));
        let index = arrayTamNoiDungChuong.indexOf(e.target.name);

        if (checkArrayNoidungChuong == true) {
            arrayTamNoiDungChuong.push(e.target.name);
        } else {
            arrayTamNoiDungChuong.splice(index, 1);
        }
        console.log(arrayTamNoiDungChuong);

        this.setState({
            chapterTest: arrayTamNoiDungChuong
        })
    }
    onChangeCreateTestTime = (e) => {
        this.setState({
            timeTest: e.target.value
        })
    }
    onChangeCreateTestNumberQuestion = (e) => {
        console.log(e.target.value);
        this.setState({
            numberQuestion: e.target.value
        })

    }
    onChangeCreateTestMucDo = (e) => {
        this.setState({
            levelTest: e.target.value
        })
    }
    onEventCreateTest = () => {
        let { chapterTest, timeTest, levelTest, numberQuestion } = this.state;
        if (chapterTest.length > 7) {
            alert("Bạn chỉ được chọn tối đa 7 nội dung");
        } else if ((numberQuestion / chapterTest.length) < 5) {
            alert("Số câu hỏi của bạn quá ít. Bạn cần chọn thêm câu hỏi.")
        } else if (levelTest == "No") {
            alert("Bạn chưa chọn mức độ.")
        } else if (timeTest == "0") {
            alert("Bạn chưa chọn thời gian làm bài")
        } else if (chapterTest.length == 0) {
            alert("Bạn chưa chọn nội dung bài kiểm tra")
        }
        else {
            let dataCreateTest = {
                chapterTest: chapterTest,
                timeTest: timeTest,
                levelTest: levelTest,
                numberQuestion: numberQuestion
            }
            this.props.appActions.actCreateTest(dataCreateTest);
        }
        // this.setState({
        //     redirect:true
        // })
    }
    onClickShownoidung = (id) => {
        this.setState({
            collapseShow: id
        })
    }
    componentDidMount() {
        (async () => {
            let createQuestion = await Axios('get', '/Api/question/chapcreate');
            console.log(createQuestion.data);
            this.setState({
                listNoiDung: createQuestion.data
            })
        })();
    }
    render() {
        let { ActRedirect } = this.props;
        let { listNoiDung } = this.state
        if (ActRedirect == "test") return <Redirect to={'/test'} />
        this.state.arrNoiDungChuong = [];
        console.log(listNoiDung);
        let listChuong = listNoiDung.map((arrChuong, index) => {
            let noidungContentChuong = arrChuong.noidung.map((listContentCh, index1) => {
                this.state.arrNoiDungChuong.push(listContentCh.noidungName)
                return (
                    <div className="custom-control custom-checkbox mb-2" key={index1}>
                        <input type="checkbox"
                            className="custom-control-input"
                            name={listContentCh.noidungName}
                            value={listContentCh.noidungValue}
                            id={index + "defaultUncheckedDisabled" + index1}
                            onChange={this.onChangeCreateTestChuong}
                        />
                        <label className="custom-control-label" htmlFor={index + "defaultUncheckedDisabled" + index1}>{listContentCh.noidungValue}</label>
                    </div>
                )
            })
            return (
                <div className="mb-2"
                    key={index}
                    style={{ cursor: "pointer" }}
                >
                    <i className=" fas fa-angle-down"
                        href={"#chuong" + index + "d"}
                        id={"chuong" + index}
                        data-toggle="collapse"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.onClickShownoidung("chuong" + index + "d")}
                    >
                        &nbsp;<label className="custom-control-label">{arrChuong.tenChuong}</label>
                    </i>
                    <div className={this.state.collapseShow == "chuong" + index + "d" ? "collapse show" : "collapse"} id={"chuong" + index + "d"}>
                        <div className="card card-body">
                            {noidungContentChuong}
                        </div>
                    </div>
                </div>
            )
        })
        return (

            <div>
                <Header />
                <div className="container-fluid boder-right">
                    <div className="row">
                        <TabFunction />
                        <div className="col-9 border-content">
                            <div className="content-category">
                                <div className="pt-5">
                                    <div className="selected-test">
                                        <label className="mr-5">
                                            Mức độ :
                                        </label>
                                        <select
                                            className="browser-default custom-select width-selected left-selected"
                                            onChange={this.onChangeCreateTestMucDo}>
                                            <option value="No">Chọn mức độ</option>
                                            <option value="de">dễ</option>
                                            <option value="trungbinh">Trung bình</option>
                                            <option value="kho">Khó</option>
                                        </select>
                                    </div>
                                    <div className="selected-test mt-3">
                                        <label className="" style={{ marginRight: 27 + "px" }}>
                                            Số câu hỏi :
                                        </label>
                                        <input type="text"
                                            className="form-control left-selected"
                                            onChange={this.onChangeCreateTestNumberQuestion}
                                        />
                                        {/* <select
                                            className="browser-default custom-select width-selected left-selected"
                                            onChange={this.onChangeCreateTestMucDo}>
                                            <option>Số câu hỏi</option>
                                            <option value="de">dễ</option>
                                            <option value="trungbinh">Trung bình</option>
                                            <option value="kho">Khó</option>
                                        </select> */}
                                    </div>
                                    <div className="selected-test mt-3">
                                        <label className="mr-5">Thời gian làm bài :</label>
                                        <select className="browser-default custom-select width-selected"
                                            onChange={this.onChangeCreateTestTime}>
                                            <option value="0">Chọn thời gian làm bài</option>
                                            <option value="10">10 phút</option>
                                            <option value="20">20 phút</option>
                                            <option value="30">30 phút</option>
                                            <option value="40">40 phút</option>
                                            <option value="50">50 phút</option>
                                            <option value="60">60 phút</option>
                                            <option value="70">70 phút</option>
                                        </select>
                                    </div>
                                    <div className="selected-test mt-5 d-flex">
                                        <label className="mr-5">Chương kiến thức :</label>
                                        <div>
                                            {listChuong}
                                        </div>
                                    </div>
                                    <center>
                                        <div className="createButon mt-4">
                                            <button
                                                type="button"
                                                className="btn btn-primary" onClick={this.onEventCreateTest}>Tạo đề thi </button>
                                        </div>
                                    </center>
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
        ActRedirect: state.ActRedirect,

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
export default withRouter(connect(mapStateToprops, mapDispathToprops)(CreateTest))

//export default connect(mapStateToprops, mapDispathToprops)(CreateTest);


