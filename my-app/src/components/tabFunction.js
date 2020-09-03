import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import '../App.css'
class assessKnowledge extends Component {
    constructor(props){
        super(props);
        this.state={
            contact:false
        }
    }
    onClickContact=()=>{
        this.props.appActions.contactFeedback();
    }
    render() {
       // if(this.props.ActContactFeedback==false) return <Redirect to='/contactFeedback'/>
        return (
            <div className="col-3">
                <div className="card mt-3 cardCategory-Height">
                    <div className="card-body card-list">
                        <p>
                            <i className="fas fa-caret-right">&nbsp;&nbsp;<Link to="/createTest">TẠO ĐỀ THI</Link></i>
                        </p>
                        <p>
                            <i className="fas fa-caret-right">&nbsp;&nbsp;<Link to="/academicManagement">THÔNG TIN HỌC TẬP</Link></i>
                        </p>
                        <p>
                            <i className="fas fa-caret-right">&nbsp;&nbsp;<Link to="/assesKnowledge">ĐÁNH GIÁ KẾT QUẢ</Link></i>
                        </p>
                        <p>
                            <i className="fas fa-caret-right" onClick={this.onClickContact}>&nbsp;&nbsp;<Link to="/contactFeedback">LIÊN HỆ GÓP Ý</Link></i>
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
        ActContactFeedback:state.ActContactFeedback
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
export default connect(mapStateToprops, mapDispathToprops)(assessKnowledge);

