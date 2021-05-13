import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {changeInputValue, follow, setPagesSlide, unfollow, changePage} from "../../Redux/UsersReducer";
import {compose} from "redux";
import {
    followingInProgressSelector,
    isFetchingSelector, onlyFriendsSelector,
    pageSelector,
    pageSizeSelector, pagesSelector,
    totalUsersSelector,
    usersSelector
} from "../../selectors/usersDataSelectors";

const UsersWrapper = (props) => {
    const changePage = (p) => props.changePage(p, props.pageSize, props.onlyFriends);
    return <>
        <Users
            isFetching={props.isFetching}
            totalUsers={props.totalUsers}
            pageSize={props.pageSize}
            page={props.page}

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
        users: usersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsers: totalUsersSelector(state),
        page: pageSelector(state),
        isFetching: isFetchingSelector(state),
        pages: pagesSelector(state),
        followingInProgress: followingInProgressSelector(state),
        onlyFriends: onlyFriendsSelector(state)
    }
}

export default compose(
    connect(mapStateToProps,{follow,unfollow,setPagesSlide,changeInputValue,changePage})
)(UsersWrapper);