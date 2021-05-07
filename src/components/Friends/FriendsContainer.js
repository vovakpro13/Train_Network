import React from 'react';
import {connect} from "react-redux";
import UsersWrapper from "../Users/UsersWrapper";
import {getUsers,resetSlider} from "../../Redux/UsersReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import {compose} from "redux";
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

const mapStateToProps = (state) => {
    return {
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, pageSetting,resetSlider}),
    WithAuthRedirect
)(FriendsAPIContainer);




