import {connect} from "react-redux";
import Users from "./Users.jsx";
import {getUsers, resetSlider} from "../../Redux/UsersReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import React from "react";
import UsersWrapper from "./UsersWrapper";
import {compose} from "redux";

class UsersAPIContainer extends React.Component{
    componentDidMount() {
        this.props.pageSetting('Users', 1);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    componentWillMount() {
        this.props.resetSlider();
    }

    render() {
        return <UsersWrapper/>
    }
}

const mapStateToProps = (state) => {
    return {
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage
    }
}

export default compose(
    connect(mapStateToProps,{pageSetting,getUsers,resetSlider})
)(UsersAPIContainer);

