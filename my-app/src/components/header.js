import React, { Component } from "react";
import { getCookie } from "../Utils/dataGetCookie";
import { Redirect, Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as appActions from "../actions/index";
import { connect } from "react-redux";
import "../App.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoginRegis: true,
    };
  }
  onClickLogin = () => {
    this.props.appActions.actNav("login");
  };
  onClickRegis = () => {
    //console.log(this.props.appActions);
    this.props.appActions.actNav("regis");
  };
  onClickLogout = () => {
    var d = new Date();
    d.setTime(d.getTime());
    var expires = "expires=" + d.toUTCString();
    for (let i = 0; i <= document.cookie.split(";").length; i++) {
      let cname = document.cookie.split(";")[0].split("=")[0];
      let cvalue = document.cookie.split(";")[0].split("=")[1];
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    this.setState({
      abcd: true,
    });
  };
  onAccount = () => {
    this.props.appActions.updatePass(false);
  };
  render() {
    let { abcd = false } = this.state;
    let userAccount = getCookie("username");
    if (abcd == true) {
      return <Redirect to="/home" />;
    }
    // console.log(this.props.ActLogout);

    return (
      <div className="nav-title">
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
          <span className="titleNameProject">
            WEBSITE ĐÁNH GIÁ KIẾN THỨC VẬT LÝ TRUNG HỌC PHỔ THÔNG
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="log-in titleNameProject mr-3">
            {userAccount == "" ? (
              <div style={{ cursor: "pointer" }}>
                <span className="mr-3" onClick={this.onClickLogin}>
                  Đăng nhập
                </span>
                <span onClick={this.onClickRegis}>Đăng kí</span>
              </div>
            ) : (
              <div className="dropdown dropleft mr-5">
                <span
                  className="dropdown-toggle h5"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {userAccount}
                </span>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <span className="dropdown-item" onClick={this.onAccount}>
                    <Link to="/account">Đổi mật khẩu</Link>
                  </span>
                  <a
                    className="dropdown-item"
                    href="https://app-trac-nghiem.herokuapp.com"
                    onClick={this.onClickLogout}
                  >
                    Đăng xuất
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  console.log(state);
  return {
    ActLabelShowChart: state.ActLabelShowChart,
    ActValueShowChart: state.ActValueShowChart,
    ActLogout: state.ActLogout,
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
export default connect(mapStateToprops, mapDispathToprops)(Header);
