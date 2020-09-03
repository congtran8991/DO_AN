import React, { Component } from 'react';
import Header from '../components/header';
import TabFunctionHome from '../components/tabFunctionHome';
import News from '../components/News';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
class Theory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkLoginRegis: true
        }
    }
    render() {
        return (
            <div>
                <Header login_regis={this.onRegistration} />
                <div className="container-fluid boder-right">
                    <div className="row">
                        <TabFunctionHome />
                        <News />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToprops = (state) => {
    console.log(state);
    return {
        ActLogin: state.ActLogin,
        ActRegis: state.ActRegis
    }
}
const mapDispathToprops = (dispatch) => {
    console.log(dispatch);
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToprops, mapDispathToprops)(Theory);