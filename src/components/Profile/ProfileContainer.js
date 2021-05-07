import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getProfile, setIsFetching, setProfilaData} from "../../Redux/ProfileReducer";
import {setActivePage, setTitle, updatePageState} from "../../Redux/PageStateReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setTitle(<>Profile <small><sup>#{userId}</sup></small></>);
        if (!userId) {
            userId = 2;
            this.props.setTitle('My profile');
        }
        this.props.getProfile(userId);
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile,
        isLogin: state.authData.isLogin,
        authUserId: state.authData.userId
    }
}

const ContainerProfileComponentWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    {
        setProfilaData,
        setIsFetching,
        setTitle,
        setActivePage,
        updatePageState,
        getProfile
    })(ContainerProfileComponentWithRouter);