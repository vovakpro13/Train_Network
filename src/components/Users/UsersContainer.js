import {connect} from "react-redux";
import Users from "./Users.jsx";
import {
    changeInputValue,
    follow,
    setCurrentPage,
    setIsFetching,
    setPagesSlide,
    setUsers,
    unfollow
} from "../../Redux/UsersReducer";
import {setActivePage, setTitle} from "../../Redux/PageStateReducer";
import React from "react";
import {followPost, getUsers, unfollowDelete} from "../../services/api";

class UsersAPIContainer extends React.Component {
    componentWillMount() {
        this.props.setTitle('Users');
        this.props.setActivePage(1);
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(users => {
            this.props.setUsers(users.items, users.totalCount);
            this.props.setIsFetching(false);
        });

    }

    changePage = (p) => {
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true)
        getUsers(p, this.props.pageSize).then(users => {
            this.props.setUsers(users.items, users.totalCount);
            this.props.setIsFetching(false);
        });
    }

    followUser = (id) => {
        this.props.setIsFetching(true);
        followPost(id).then(answer => {
            this.props.follow(id);
            this.props.setIsFetching(false);
        });
    }

    unfollowUser = (id) => {
        this.props.setIsFetching(true);
        unfollowDelete(id).then(answer => {
            console.log(answer);
            this.props.unfollow(id);
            this.props.setIsFetching(false);
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
        changeInputValue
    })(UsersAPIContainer);

