import {connect} from "react-redux";
import Users from "./Users.jsx";
import {requestUsers, resetSlider} from "../../Redux/UsersReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import React, {useEffect} from "react";
import UsersWrapper from "./UsersWrapper";
import {compose} from "redux";
import {pageSelector, pageSizeSelector} from "../../selectors/usersDataSelectors";

const UsersAPIContainer = ({pageSetting, getUsers, page, pageSize, resetSlider}) => {
    pageSetting('Users', 1);
    useEffect(() => getUsers(page, pageSize), [])
    resetSlider();
    return <UsersWrapper/>
}

const mapStateToProps = (state) => {
    return {
        pageSize: pageSizeSelector(state),
        page: pageSelector(state)
    }
}

export default compose(
    connect(mapStateToProps,{pageSetting,getUsers: requestUsers,resetSlider})
)(UsersAPIContainer);

