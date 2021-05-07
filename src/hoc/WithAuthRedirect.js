import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isLogin) return <Redirect to={'/login'}/>
            return <Component />
        }
    }
    const mapStateToProps = (state) => {
        return {isLogin: state.authData.isLogin}
    }

    return connect(mapStateToProps)(RedirectComponent);
};



export default WithAuthRedirect;