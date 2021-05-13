import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from 'react-router-dom';
import {
    getProfile,
    getProfileStatus,
    setIsFetching,
    setProfilaData,
    updateProfileStatus
} from "../../Redux/ProfileReducer";
import {pageSetting} from "../../Redux/PageStateReducer";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";

const ProfileContainer = props => {
    const {
        match: {params: {userId}},
        pageSetting, authUserId, getProfile,
        profile, isLogin, profileStatus,
        updateProfileStatus, isFetching
    } = props;

    let id = userId;
    if (!id) {
        id = authUserId;
        pageSetting('My profile', -1);
    } else {
        pageSetting(`Profile ${userId}`, -1);
    }

    useEffect(() => getProfile(id), []);

    return isLogin || userId
        ? isFetching
            ? <Preloader/>
            : <Profile
                profile={profile}
                profileStatus={profileStatus}
                updateProfileStatus={updateProfileStatus}/>
        : <Redirect to={'/login'}/>

}

const mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile,
        profileStatus: state.profileData.profileStatus,
        isLogin: state.authData.isLogin,
        authUserId: state.authData.userId,
        isFetching: state.profileData.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {
        pageSetting,
        setIsFetching,
        getProfile,
        getProfileStatus,
        updateProfileStatus
    }),
    withRouter
)(ProfileContainer);


