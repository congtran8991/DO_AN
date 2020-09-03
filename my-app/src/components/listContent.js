import React, { Component } from 'react';
import Header from '../components/header';
import TabFunction from '../components/tabFunction';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from "react-router-dom";
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import '../App.css';
let arrayTamChuong = [];
class CreateTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelTest: '',
            chapterTest: [],
            timeTest: '',
            collapseShow: "d-none"
        }
    }
    onChangeCreateTestChuong = (e) => {
        let checkArrayChuong = arrayTamChuong.indexOf(e.target.value) == -1;
        if (checkArrayChuong == true) {
            arrayTamChuong.push(e.target.value);
        } else {
            arrayTamChuong.splice(arrayTamChuong, 1);
        }
        this.setState({
            chapterTest: arrayTamChuong
        })
    }
    onChangeCreateTestTime = (e) => {
        this.setState({
            timeTest: e.target.value
        })
    }
    onChangeCreateTestMucDo = (e) => {
        this.setState({
            levelTest: e.target.value
        })
    }
    onEventCreateTest = () => {
        let dataCreateTest = {
            chapterTest: this.state.chapterTest,
            timeTest: this.state.timeTest,
            levelTest: this.state.levelTest
        }
        this.props.appActions.actCreateTest(dataCreateTest);
        // this.setState({
        //     redirect:true
        // })
    }
    onClickShownoidung = (id) => {
        this.setState({
            collapseShow: id
        })
    }
    render() {
        let { ActRedirect } = this.props;
        if (ActRedirect == "test") return <Redirect to={'/test'} />
        let listNoiDung = [
            {
                tenChuong: "Giao động cơ",
                noidung: ['noidung1', 'noidung2', 'noidung3']
            },
            {
                tenChuong: "Sóng cơ và sóng âm",
                noidung: ['noidung4', 'noidung5', 'noidung6']
            },
            {
                tenChuong: "Dòng điện xoay chiều",
                noidung: ['noidung7', 'noidung8', 'noidung9']
            },
            {
                tenChuong: "Dòng điện và sóng điện từ",
                noidung: ['noidung10', 'noidung11', 'noidung12']
            }, {
                tenChuong: "Sóng ánh sáng",
                noidung: ['noidung13', 'noidung14', 'noidung15']
            },
            {
                tenChuong: "Lượng tử và sóng ánh sáng",
                noidung: ['noidung16', 'noidung17', 'noidung18']
            }, {
                tenChuong: "Hạt nhân nguyên tử",
                noidung: ['noidung19', 'noidung20', 'noidung21']
            }
        ]
        let listChuong = listNoiDung.map((arrChuong, index) => {
            let noidungContentChuong = arrChuong.noidung.map((listContentCh, index1) => {
                return (
                    <div className="custom-control custom-checkbox mb-2" key={index1}>
                        <input type="checkbox"
                            className="custom-control-input"
                            value={listContentCh}
                            id={index+"defaultUncheckedDisabled" + index1}
                            onChange={this.onChangeCreateTestChuong}
                             />
                        <label className="custom-control-label" htmlFor={index+"defaultUncheckedDisabled" + index1}>{listContentCh}</label>
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
                    <div class={this.state.collapseShow == "chuong" + index + "d" ? "collapse show" : "collapse"} id={"chuong" + index + "d"}>
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
                                            <option>Chọn mức độ</option>
                                            <option value="de">dễ</option>
                                            <option value="trungbinh">Trung bình</option>
                                            <option value="kho">Khó</option>
                                        </select>
                                    </div>
                                    <div className="selected-test mt-3">
                                        <label className="mr-5">Thời gian làm bài :</label>
                                        <select className="browser-default custom-select width-selected"
                                            onChange={this.onChangeCreateTestTime}>
                                            <option>Chọn thời gian làm bài</option>
                                            <option value="60">60 phút</option>
                                            <option value="75">75 phút</option>
                                            <option value="90">90 phút</option>
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
export default connect(mapStateToprops, mapDispathToprops)(CreateTest);


