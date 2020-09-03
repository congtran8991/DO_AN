import React, { Component } from 'react';
import Header from './header';
import TabFunction from './tabFunction';
import { bindActionCreators } from 'redux';
import { Redirect, Link, withRouter } from "react-router-dom";
import * as appActions from '../actions/index';
import { connect } from 'react-redux';
import FormAccount from './formAccount';
import { Axios } from "../Utils/Axios";
class FormContactFeedback extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.ActAccount == true) {
            alert('Bạn đổi mật khẩu thành công');
            return <Redirect to='/createTest' />
        }
        return (
            <div>
                <Header />
                <div className="container-fluid boder-right">
                    <div className="row">
                        <TabFunction />
                        <FormAccount />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToprops = (state) => {
    console.log(state);
    return {
        ActAccount: state.ActAccount,
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
export default withRouter(connect(mapStateToprops, mapDispathToprops)(FormContactFeedback));

