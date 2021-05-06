import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from 'react-router-dom';
import {setIsFetching, setProfilaData} from "../../Redux/ProfileReducer";
import {setTitle,setActivePage, updatePageState} from "../../Redux/PageStateReducer";
import {getProfile} from "../../services/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        let userId = this.props.match.params.userId;

        this.props.setTitle(`Profile ${this.props.profile && this.props.profile.userId}`)

        if (!userId ){ //this.props.isLogin){
                userId = 2; //this.props.authUserId;
                this.props.setTitle('My profile');
        }
debugger
        getProfile(userId).then(profile => {
                this.props.setProfilaData(profile.data);
                this.props.setIsFetching(false);
            })
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
    {setProfilaData, setIsFetching, setTitle,setActivePage, updatePageState})(ContainerProfileComponentWithRouter);