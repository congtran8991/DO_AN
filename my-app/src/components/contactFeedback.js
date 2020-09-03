import React, { Component } from 'react';
import Header from '../components/header';
import FormContactFeedback from './formContactFeedback';
import TabFunction from './tabFunction';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import {Redirect, Link } from 'react-router-dom';
class ContactFeedback extends Component {
    constructor(props) {
        super(props);
        this.state={
            checkLoginRegis:true
        }
    }
    onRegistration=(checkLoginRegis)=>{
        this.setState({
            checkLoginRegis
        })
    }
    render() {
        let {ActContactFeedback} = this.props;
        console.log(ActContactFeedback);
        if(ActContactFeedback==true){
            alert('Bạn gửi thông tin thành công');
            
            return (
                <Redirect to='/createTest'/>
            )
        }
        console.log("trab cong");
        return (
            <div>
                <Header/>
                <div className="container-fluid boder-right">
                    <div className="row">
                        <TabFunction />
                        <FormContactFeedback/>
                    </div>
                </div>
            </div>
        )
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
export default connect(mapStateToprops, mapDispathToprops)(ContactFeedback);