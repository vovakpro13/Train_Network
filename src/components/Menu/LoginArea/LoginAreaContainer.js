import {connect} from "react-redux";
import React from "react";
import {auth} from '../../../Redux/AuthReducer';
import LoginArea from "./LoginArea";
import NoLogin from "./NoLogin";

class LoginAreaContainer extends React.Component{
    componentDidMount() { this.props.auth() }
    render() {
        return this.props.isLogin ? <LoginArea {...this.props}/>: <NoLogin/>;
    }
}

const mapStateToProps = (state) =>{
    return {
        isLogin: state.authData.isLogin,
        login: state.authData.login,
        avatar: state.authData.avatar,
        isFetching: state.authData.isFetching
    };
};

export default connect(mapStateToProps, {auth})(LoginAreaContainer);