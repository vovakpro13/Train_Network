import {connect} from "react-redux";
import Users from "./Users.jsx";
import {
    setCurrentPage,
    setIsFetching,
    setUsers, follow, unfollow
} from "../../Redux/UsersReducer";
import {setTitle,setActivePage} from "../../Redux/PageStateReducer";
import React from "react";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader.jsx";

class UsersAPIContainer extends React.Component {
    componentWillMount() {
        this.props.setTitle('Users');
        this.props.setActivePage(1);
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(users => {
                this.props.setUsers(users.data.items, users.data.totalCount);
                this.props.setIsFetching(false);
            })
            .catch(err => alert(err))
    }

    changePage = (p) => {
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(users => {
                this.props.setUsers(users.data.items, users.data.totalCount);
                this.props.setIsFetching(false)
            })
            .catch(err => alert(err))
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePage={this.changePage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
        isFetching: state.usersData.isFetching

    }
}


export default connect(mapStateToProps,
    {setTitle,setActivePage,setUsers, setCurrentPage,setIsFetching, follow, unfollow})(UsersAPIContainer);

