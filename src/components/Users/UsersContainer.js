import {connect} from "react-redux";
import Users from "./Users.jsx";
import {
    changeInputValue,
    follow,
    setCurrentPage,
    setIsFetching,
    setPagesSlide,
    setUsers,
    unfollow, setFollowProgress, getUsers, changePage,
} from "../../Redux/UsersReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import React from "react";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.pageSetting('Users', 1);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changePage = (p) => this.props.changePage(p, this.props.pageSize);

    render() {
        return <>
            {
                <Users
                    isFetching={this.props.isFetching}
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}

                    setPagesSlide={this.props.setPagesSlide}
                    setIsFetching={this.props.setIsFetching}
                    pages={this.props.pages}

                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    changePage={this.changePage}

                    users={this.props.users}
                    changeInputValue={this.props.changeInputValue}
                    followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
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
    }
}


export default connect(mapStateToProps,
    {
        pageSetting,
        setUsers,
        setCurrentPage,
        setIsFetching,
        follow,
        unfollow,
        setPagesSlide,
        changeInputValue,
        setFollowProgress,
        getUsers,
        changePage
    })(UsersAPIContainer);

