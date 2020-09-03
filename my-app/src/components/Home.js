import React, { Component } from "react";
import Header from "../components/header";
import Login from "../components/login";
import Registration from "./registration";
import Contact from "./formContactFeedback";
import TabFunctionHome from "../components/tabFunctionHome";
import { bindActionCreators } from "redux";
import { getCookie } from "../Utils/dataGetCookie";
import Theory from "./cmnTheory";
import EducationalNews from "./News";
import Introduce from "./introduce";
import * as appActions from "../actions/index";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLoginRegis: true,
    };
  }
  onRegistration = (checkLoginRegis) => {
    this.setState({
      checkLoginRegis,
    });
  };
  render() {
    let { checkLoginRegis } = this.state;
    let { ActOnNav, ActRegis } = this.props;
    let onNav = null;
    let cookie = getCookie("username").length > 0;
    console.log(cookie);
    console.log(ActOnNav);
    //if(ActRegis.message==true) return <Redirect to='/'/>
    switch (ActOnNav) {
      case "login":
        console.log(ActOnNav);
        console.log(getCookie("username").length);
        if (ActRegis.message == true) {
          alert("Đăng kí thành công");
        }
        onNav = <Login />;
        break;
      case "regis":
        console.log("cs");
        onNav = <Registration />;
        break;
      case "theory":
        onNav = <Theory />;
        break;
      case "news":
        onNav = <EducationalNews />;
        break;
      case "introduce":
        onNav = <Introduce />;
        break;
      default:
        break;
    }
    if (this.props.ActLogin == true) return <Redirect to={"/createTest"} />;
    return (
      <div>
        <Header />
        <div className="container-fluid boder-right">
          <div className="row">
            <TabFunctionHome />
            {/* {this.props.ActOnNav == 'login' ? <Login/> : <Registration/> } */}
            {onNav}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  console.log(state);
  return {
    ActLogin: state.ActLogin,
    ActRegis: state.ActRegis,
    ActOnNav: state.ActOnNav,
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
export default connect(mapStateToprops, mapDispathToprops)(Home);
