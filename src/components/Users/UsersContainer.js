import {connect} from "react-redux";
import Users from "./Users.jsx";
import {
    changeInputValue,
    follow,
    setCurrentPage,
    setIsFetching,
    setPagesSlide,
    setUsers,
    unfollow,setFollowProgress
} from "../../Redux/UsersReducer";
import {setActivePage, setTitle} from "../../Redux/PageStateReducer";
import React from "react";
import API from "../../services/api";

class UsersAPIContainer extends React.Component {
    componentWillMount() {
        this.props.setTitle('Users');
        this.props.setActivePage(1);
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        API.getUsers(this.props.currentPage, this.props.pageSize).then(users => {
            this.props.setUsers(users.items, users.totalCount);
            this.props.setIsFetching(false);
        });

    }

    changePage = (p) => {
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true)
        API.getUsers(p, this.props.pageSize).then(users => {
            this.props.setUsers(users.items, users.totalCount);
            this.props.setIsFetching(false);
        });
    }

    followUser = (id) => {
        this.props.setFollowProgress(true, id);
        API.followPost(id).then(answer => {
            this.props.follow(id);
            this.props.setFollowProgress(false, id);
        });
    }

    unfollowUser = (id) => {
        this.props.setFollowProgress(true, id)
        API.unfollowDelete(id).then(answer => {
            console.log(answer);
            this.props.unfollow(id);
            this.props.setFollowProgress(false, id);
        });

    };

    render() {
        console.log(this.props)
        return <>
            {
                <Users
                    isFetching={this.props.isFetching}
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    changePage={this.changePage}
                    setPagesSlide={this.props.setPagesSlide}
                    setIsFetching={this.props.setIsFetching}
                    pages={this.props.pages}
                    followUser={this.followUser}
                    unfollowUser={this.unfollowUser}
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
        setTitle,
        setActivePage,
        setUsers,
        setCurrentPage,
        setIsFetching,
        follow,
        unfollow,
        setPagesSlide,
        changeInputValue,
        setFollowProgress
    })(UsersAPIContainer);

