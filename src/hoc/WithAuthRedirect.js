import React from 'react';
import {Redirect} from "react-router-dom";

const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{

        render() {
            if (!this.props.isLogin) return <Redirect to={'/login'}/>
            return <Component />
        }
    }
    return RedirectComponent;
};

export default WithAuthRedirect;