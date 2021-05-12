import React, {useEffect} from 'react';
import {connect} from "react-redux";
import UsersWrapper from "../Users/UsersWrapper";
import {requestUsers, resetSlider} from "../../Redux/UsersReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {withRouter} from "react-router-dom";

const FriendsAPIContainer = ({pageSetting, resetSlider, requestUsers, currentPage, pageSize}) => {
    resetSlider();
    pageSetting('Friends', 2);
    useEffect( () => requestUsers(currentPage, pageSize, true), []);

    return <UsersWrapper/>
}

const mapStateToProps = (state) => {
    return {
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, { requestUsers, pageSetting, resetSlider})
)(FriendsAPIContainer);




