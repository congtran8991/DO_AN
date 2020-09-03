import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {getCookie} from '../Utils/dataGetCookie';
//import { Redirect, Link } from "react-router-dom";
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import { Axios } from "../Utils/Axios";
class FormAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passcu:'',
            passmoi:'',
            passsai:true
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
    onUpdatePass=(event)=>{
        let {name}=event.target;
        this.setState({
            [name]:event.target.value
        })
    }
    onSubmitUpdatePass=()=>{
        (async()=>{
            let data = {
                user:getCookie('username'),
                pass:this.state.passcu
            }
            let {passmoi} = this.state;
            let checkPass=await Axios('post','/Api/loginUser/checkAcount',data);
            if(checkPass.data.message==true){
                this.setState({
                    passsai:true
                })
                if(passmoi.length==0){
                    alert("Bạn chưa nhập mật khẩu mới");
                }else{
                    let data=await Axios('put','/Api/loginUser/updatePass',{user:getCookie('username'),passmoi});
                    this.props.appActions.updatePass(data.data.message);
                    console.log(data);
                }
            }else{
                this.setState({
                    passsai:false
                })
            }
        })();
    }
    render() {
        let {passsai}=this.state;
        console.log(this.state.passcu);
        return (
            <div className="col-9 border-content">
                <div className="content-category">
                    <div className="pt-3">
                        <div className="text-center">
                            <div style={{color:'#295e98'}}>
                                <h2>Tài khoản</h2>
                            </div>
                            <form className="mt-4" style={{ marginLeft: 130 + 'px' }}>
                                <div>
                                    <div className="form-group" style={{ width: 500 + 'px' }}>
                                        <label htmlFor="exampleInputEmail1" style={{ width: 200 + 'px' }}>Tên đăng nhập &nbsp;&nbsp;</label>
                                        <input type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="User"
                                            value={getCookie('username')}
                                            onChange={this.onUpdatePass}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginRight: -3 + "px" }}>
                                    <div className="form-group" style={{ width: 500 + 'px' }}>
                                        <label htmlFor="exampleInputPassword1" style={{ width: 200 + 'px' }}>Mật khẩu cũ &nbsp;&nbsp;</label>
                                        <input type="email"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Mật khẩu cũ"
                                            name="passcu"
                                            onChange={this.onUpdatePass}
                                        />
                                        <div className={passsai == true ? 'd-none' : ''}>
                                        <label className="text-danger">Mật khẩu sai &nbsp;&nbsp;</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-5">
                                    <div className="form-group" style={{ width: 500 + 'px' }}>
                                        <label htmlFor="exampleInputPassword1" style={{ width: 200 + 'px' }}>Mật khẩu mới&nbsp;&nbsp;</label>
                                        <input type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Mật khẩu mới"
                                            name="passmoi"
                                            onChange={this.onUpdatePass}
                                        />
                                    </div>
                                </div>
                            </form>
                            <center><button type="button" className="btn btn-primary text-center"
                                onClick={this.onSubmitUpdatePass}
                            >Thay đổi</button></center>
                        </div>
                        <div className='mt-2 font-italic text-danger'>
                                <i>Lưu ý : Bạn tránh cung cấp tài khoản của mình cho người khác.</i>
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
export default connect(mapStateToprops, mapDispathToprops)(FormAccount);

