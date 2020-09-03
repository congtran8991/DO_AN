import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
//import { Redirect, Link } from "react-router-dom";
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import { Axios } from "../Utils/Axios";
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: '',
            retypePass: ''
        }
    }
    onChangeRegis = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    onSubmitRegis = () => {
        let { username, pass, retypePass } = this.state;
        console.log(username);
        if (username.length == 0 || pass.length == 0 || retypePass.length == 0) {
            alert('Bạn chưa điền đầy đủ thông tin đăng kí.');
        } else if (pass != retypePass) {
            alert('Nhập lại mật khẩu chưa chính xác');
        } else {
            (async () => {
                let checkUser = await Axios('post', '/Api/loginUser/checkAcountUser', { username });
                console.log(checkUser.data.message);
                if (checkUser.data.message == true) {
                    alert('Tên tài khoản đăng kí đã tồn tại bạn vui lòng đăng kí tên tài khoản khác');
                } else {
                    let data = {
                        user: username,
                        pass
                    }
                    this.props.appActions.onRegisUser(data);
                    this.props.appActions.actNav('login');
                }
            })()
            // let data = {
            //     user: username,
            //     pass
            // }
            // this.props.appActions.onRegisUser(data);
            // this.props.appActions.actNav('login');
        }

    }
    render() {
        console.log(this.state.pass);
        return (
            <div className="col-9 border-content">
                <div className="content-category">
                    <div className="pt-5">
                        <div className="text-center">
                            <div>
                                <h2>Đăng Ký</h2>
                            </div>
                            <form className="mt-4">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Tài khoản &nbsp;&nbsp;</label>
                                        <input type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Tài khoản"
                                            name="username"
                                            onChange={this.onChangeRegis}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Mật khẩu &nbsp;&nbsp;</label>
                                        <input type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            name="pass"
                                            onChange={this.onChangeRegis}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginRight: 60 + "px" }}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Nhập lại mật khẩu&nbsp;&nbsp;</label>
                                        <input type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Nhập lại password"
                                            name="retypePass"
                                            onChange={this.onChangeRegis}
                                        />
                                    </div>
                                </div>
                            </form>
                            <center><button type="button" className="btn btn-primary text-center"
                                onClick={this.onSubmitRegis}
                            >Đăng kí</button></center>
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
        //    findAllCatagory : (categorys) =>{
        //        dispatch(findCategory(categorys));
        //    }
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToprops, mapDispathToprops)(Registration);

