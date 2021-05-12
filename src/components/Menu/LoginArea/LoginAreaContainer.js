import {connect} from "react-redux";
import React from "react";
import {logOut} from '../../../Redux/AuthReducer';
import LoginArea from "./LoginArea";
import NoLogin from "./NoLogin";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const LoginAreaContainer = props => {
    return props.isLogin
        ? <LoginArea {...props}/>
        : <NoLogin/>;
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.authData.isLogin,
        login: state.authData.login,
        avatar: state.authData.avatar,
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, {logOut})
)(LoginAreaContainer);
