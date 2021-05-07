import React from 'react';
import {connect} from "react-redux";
import UsersWrapper from "../Users/UsersWrapper";
import {getUsers,resetSlider} from "../../Redux/UsersReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import {Redirect} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        this.props.pageSetting('Friends', 2);
        this.props.getUsers(this.props.currentPage, this.props.pageSize, true);
    }
    componentWillMount() {
        this.props.resetSlider();
    }
    render() {
        return <UsersWrapper/>
    }

}


const mapStateToPropsRedirect = (state) => {
    return {
        isLogin: state.authData.isLogin
    }
}

let FriendsWithLogin = WithAuthRedirect(FriendsAPIContainer);
FriendsWithLogin = connect(mapStateToPropsRedirect)(FriendsWithLogin);

const mapStateToProps = (state) => {
    return {
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
    }
}

export default connect(mapStateToProps, {getUsers, pageSetting,resetSlider})(FriendsWithLogin);




