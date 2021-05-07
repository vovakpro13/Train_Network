import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {changeInputValue, follow, setPagesSlide, unfollow, changePage} from "../../Redux/UsersReducer";
import {compose} from "redux";

const UsersWrapper = (props) => {
    const changePage = (p) => props.changePage(p, props.pageSize, props.onlyFriends);
    return <>
        <Users
            isFetching={props.isFetching}
            totalUsers={props.totalUsers}
            pageSize={props.pageSize}
            currentPage={props.currentPage}

            setPagesSlide={props.setPagesSlide}
            pages={props.pages}

            follow={props.follow}
            unfollow={props.unfollow}
            changePage={changePage}

            users={props.users}
            changeInputValue={props.changeInputValue}
            followingInProgress={props.followingInProgress}
        />
    </>;
}
const mapStateToProps = (state) => {

    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsers: state.usersData.totalUsers,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        pages: state.usersData.pages,
        followingInProgress: state.usersData.followingInProgress,
        onlyFriends: state.usersData.onlyFriends
    }
}

export default compose(
    connect(mapStateToProps,{follow,unfollow,setPagesSlide,changeInputValue,changePage})
)(UsersWrapper);