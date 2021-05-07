import {connect} from "react-redux";
import React from "react";
import {auth} from '../../../Redux/AuthReducer';
import LoginArea from "./LoginArea";
import NoLogin from "./NoLogin";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";

class LoginAreaContainer extends React.Component {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return this.props.isFetching
            ? <Preloader type={'login'}/>
            : this.props.isLogin
                ? <LoginArea {...this.props}/>
                : <NoLogin/>;
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.authData.isLogin,
        login: state.authData.login,
        avatar: state.authData.avatar,
        isFetching: state.authData.isFetching
    };
};

export default compose(
    connect(mapStateToProps, {auth})
)(LoginAreaContainer);
