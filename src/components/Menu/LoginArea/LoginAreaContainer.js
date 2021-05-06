import {auth, getProfile} from "../../../services/api";
import {connect} from "react-redux";
import React from "react";
import {setAuth, setAvatar,setFetching} from '../../../Redux/AuthReducer';
import LoginArea from "./LoginArea";
import NoLogin from "./NoLogin";

class LoginAreaContainer extends React.Component{
    componentDidMount() {
        this.props.setFetching(true);
        auth().then(({data: {id:userId, login, email}, resultCode}) => {
            if (!resultCode){
                this.props.setAuth(userId, login, email);
                debugger
                getProfile(userId).then(({data: {fullName, photos: {small:avatar}}}) =>{
                    this.avatar = avatar;
                    this.props.setFetching(false);
                });
            }
        });
    }

    render() {
        return this.props.isLogin ? <LoginArea {...this.props}/>: <NoLogin/>;
    }
}

const mapStateToProps = (state) =>{
    return {
        isLogin: state.authData.isLogin,
        userId: state.authData.userId,
        login: state.authData.login,
        avatar: state.authData.avatar,
        isFetching: state.authData.isFetching
    };
};

export default connect(mapStateToProps, {setAuth, setAvatar, setFetching})(LoginAreaContainer);