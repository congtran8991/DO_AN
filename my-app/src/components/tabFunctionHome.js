import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as appActions from "../actions/index";
import { connect } from "react-redux";
import "../App.css";
class assessKnowledge extends Component {
  onTheory = () => {
    this.props.appActions.actNav("theory");
  };
  onNews = () => {
    this.props.appActions.actNav("news");
  };
  introduce = () => {
    this.props.appActions.actNav("introduce");
  };
  render() {
    return (
      <div className="col-3">
        <div className="card mt-3 cardCategory-Height">
          <div className="card-body card-list">
            <p onClick={this.onTheory}>
              <i className="fas fa-caret-right">&nbsp;&nbsp;lÝ THUYẾT</i>
            </p>
            <p onClick={this.introduce}>
              <i className="fas fa-caret-right">&nbsp;&nbsp;GIỚI THIỆU</i>
            </p>
            <p onClick={this.onNews}>
              <i className="fas fa-caret-right">&nbsp;&nbsp;TIN TỨC GIÁO DỤC</i>
            </p>
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
export default connect(mapStateToprops, mapDispathToprops)(assessKnowledge);
//export default assessKnowledge;
