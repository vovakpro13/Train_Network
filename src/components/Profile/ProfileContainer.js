import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getProfile, setIsFetching, setProfilaData} from "../../Redux/ProfileReducer";
import {pageSetting} from "../../Redux/PageStateReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        this.props.pageSetting(<>Profile <small><sup>#{userId}</sup></small></>, -1);
        if (!userId) {
            userId = 2;
            this.props.pageSetting('My profile', -1);
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
        pageSetting,
        setProfilaData,
        setIsFetching,
        getProfile
    })(ContainerProfileComponentWithRouter);