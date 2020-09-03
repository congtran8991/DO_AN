import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
//import { Redirect, Link } from "react-router-dom";
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import { Axios } from "../Utils/Axios";
class FormContactFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameContact:'',
            mailContact:'',
            phoneContact:'',
            titleFeedback:'',
            contentFeedback:''
        }
    }
    onContactFeedback=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmitContact=()=>{
        let {nameContact,mailContact,phoneContact,titleFeedback,contentFeedback}=this.state;
        if(nameContact=='' && titleFeedback =='' && contentFeedback==''){
            alert('Bạn chưa nhập đầy đủ thông tin liên hệ hệ góp ý')
        }else{
            this.props.appActions.sendContactFeedback(this.state);
        }
    }
    render() {
        
        return (
            <div className="col-9 border-content">
                <div className="content-category">
                    <div className="pt-3">
                        <div className="text-center">
                            <div style={{color:'#295e98'}}>
                                <h2>Liên hệ - Góp ý</h2>
                            </div>
                            <form className="mt-4" style={{ marginLeft: 130 + 'px' }}>
                                <div>
                                    <div className="form-group" style={{ width: 500 + 'px' }}>
                                        <label htmlFor="exampleInputEmail1" style={{ width: 200 + 'px' }}>Họ tên &nbsp;&nbsp;</label>
                                        <input type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Họ tên"
                                            name="nameContact"
                                            onChange={this.onContactFeedback}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginRight: -3 + "px" }}>
                                    <div className="form-group" style={{ width: 500 + 'px' }}>
                                        <label htmlFor="exampleInputPassword1" style={{ width: 200 + 'px' }}>Email &nbsp;&nbsp;</label>
                                        <input type="email"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Email"
                                            name="mailContact"
                                            onChange={this.onContactFeedback}
                                        />
                                    </div>
                                </div>
                                <div className="mr-5">
                                    <div className="form-group" style={{ width: 500 + 'px' }}>
                                        <label htmlFor="exampleInputPassword1" style={{ width: 200 + 'px' }}>Số điện thoại&nbsp;&nbsp;</label>
                                        <input type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Số điện thoại"
                                            name="phoneContact"
                                            onChange={this.onContactFeedback}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginRight: 5 + "px" }}>
                                    <div className="form-group " style={{ width: 500 + 'px' }}>
                                        <label htmlFor="exampleInputPassword1" style={{ width: 200 + 'px' }}>Tiêu đề&nbsp;&nbsp;</label>
                                        <input type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Tiêu đề"
                                            name="titleFeedback"
                                            onChange={this.onContactFeedback}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group " style={{ width: 500 + 'px' }}>
                                        <div style={{ width: 200 + 'px'}}>
                                            <label htmlFor="exampleInputPassword1" style={{marginTop:20+'px' }} >Nội dung&nbsp;&nbsp;</label>
                                        </div>
                                        <textarea
                                            style={{ height: 150 + 'px',marginLeft:200+'px'}}
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Nội dung"
                                            name="contentFeedback"
                                            onChange={this.onContactFeedback}
                                        ></textarea>
                                        
                                    </div>
                                </div>
                            </form>
                            <center><button type="button" className="btn btn-primary text-center"
                                onClick={this.onSubmitContact}
                            >Gửi</button></center>
                        </div>
                        <div className='mt-2 font-italic text-danger'>
                                <i>Lưu ý : Bạn cần nhập ít nhất các thông tin họ tên, tiêu đề, nội dung.</i>
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
        ActLabelShowChart: state.ActLabelShowChart,
        ActValueShowChart: state.ActValueShowChart
    }
}

const mapDispathToprops = (dispatch) => {
    console.log(dispatch);

    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToprops, mapDispathToprops)(FormContactFeedback);

