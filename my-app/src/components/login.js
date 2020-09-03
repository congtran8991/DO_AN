import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as appActions from "../actions/index";
import { connect } from "react-redux";
import "../App.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      pass: null,
    };
  }
  onChangeLogin = (event) => {
    let { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
  };
  onSubmitLogin = () => {
    console.log(this.state.user);
    console.log(this.state.pass);
    if (this.state.user == null || this.state.pass == null) {
      alert("Bạn chưa nhập tài khoản mật khẩu");
    } else {
      let account = {
        user: this.state.user,
        pass: this.state.pass,
      };
      this.props.appActions.actLogin(account);
    }
  };
  componentWillReceiveProps(newwProps) {
    if (newwProps.ActLogin == false) {
      alert("Tài khoản và mật khẩu chưa chính xác !");
    }
  }
  render() {
    return (
      <div className="col-9 border-content">
        <div className="content-category">
          <div className="pt-5">
            <div className="text-center">
              <div>
                <h2>Đăng Nhập</h2>
              </div>
              <form className="mt-4">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Tài khoản &nbsp;&nbsp;
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Tài khoản"
                    name="user"
                    onChange={this.onChangeLogin}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Mật khẩu &nbsp;&nbsp;
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="pass"
                    onChange={this.onChangeLogin}
                  />
                </div>
              </form>
              <center>
                <button
                  type="button"
                  className="btn btn-primary text-center"
                  onClick={this.onSubmitLogin}
                >
                  Đăng nhập
                </button>
              </center>
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
    ActLogin: state.ActLogin,
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
export default connect(mapStateToprops, mapDispathToprops)(Login);
