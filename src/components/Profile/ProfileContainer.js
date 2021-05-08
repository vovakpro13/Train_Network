import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getProfile, getProfileStatus, setIsFetching, setProfilaData,updateProfileStatus} from "../../Redux/ProfileReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        this.props.pageSetting(<>Profile <small><sup>#{userId}</sup></small></>, -1);
        if (!userId) {
            userId = 16944;
            this.props.pageSetting('My profile', -1);
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }



    render() {
        return <Profile
            profile={this.props.profile}
            profileStatus={this.props.profileStatus}
            updateProfileStatus={this.props.updateProfileStatus}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile,
        profileStatus: state.profileData.profileStatus,
        isLogin: state.authData.isLogin,
        authUserId: state.authData.userId
    }
}

export default compose(
    connect(mapStateToProps, {pageSetting, setProfilaData, setIsFetching, getProfile, getProfileStatus,updateProfileStatus}),
    withRouter
)(ProfileContainer);


