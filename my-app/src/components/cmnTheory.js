import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';
import { Axios } from '../Utils/Axios';
import { connect } from 'react-redux';
import '../App.css'
class CmnTheory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNoiDung: [],
            arrNoiDungChuong: [],
            collapseShow: "d-none"
        }
    }
    onClickShownoidung = (id) => {
        this.setState({
            collapseShow: id
        })
    }
    componentDidMount() {
        (async () => {
            let createQuestion = await Axios('get', '/Api/question/chap');
            console.log(createQuestion.data);
            this.setState({
                listNoiDung: createQuestion.data
            })
        })();
    }
    render() {
        let { listNoiDung } = this.state;
        let listChuong = listNoiDung.map((arrChuong, index) => {
            let noidungContentChuong = arrChuong.noidung.map((listContentCh, index1) => {
                this.state.arrNoiDungChuong.push(listContentCh.noidungName)
                return (
                    <div className="custom-control custom-checkbox mb-2" key={index1}>
                        <div
                            className=""
                            id={index + "defaultUncheckedDisabled" + index1}
                        >
                            {listContentCh.noidungValue}
                        </div>
                        {/* <label className="custom-control-label" htmlFor={index + "defaultUncheckedDisabled" + index1}>{listContentCh.noidungValue}</label> */}
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
            <div className="col-9 border-content">
                <div className="content-category">
                    <div className="pt-5">
                        <div >
                            <div className="text-center">
                                <h2 style={{color:"blue"}}>LÝ THUYẾT</h2>
                            </div>
                            <div className="selected-test mt-5 d-flex">
                                <div>
                                    {listChuong}
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
export default connect(mapStateToprops, mapDispathToprops)(CmnTheory);


