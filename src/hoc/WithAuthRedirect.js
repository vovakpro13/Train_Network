import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
         render() {
             if (!this.props.isLogin) return <Redirect to={'/login'}/>
             return !this.props.isFetching ? <Component /> : <Preloader/>
        }
    }
    const mapStateToProps = (state) => {
        return {
            isLogin: state.authData.isLogin,
            isFetching: state.authData.isFetching
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
};



export default WithAuthRedirect;