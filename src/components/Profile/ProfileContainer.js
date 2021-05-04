import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from 'react-router-dom';
import {setIsFetching, setProfilaData} from "../../Redux/ProfileReducer";
import {setTitle,setActivePage, updatePageState} from "../../Redux/PageStateReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        let userId = this.props.match.params.userId;
        if (!userId){
            //meeeee
            userId = 2;
            this.props.setTitle('My profile');
            this.props.setActivePage(2);
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(profile => {
                this.props.setProfilaData(profile.data);
                this.props.setIsFetching(false);
                userId !== 2 && this.props.setTitle(`Profile ${this.props.profile && this.props.profile.userId}`);
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile
    }
}

const ContainerProfileComponentWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    {setProfilaData, setIsFetching, setTitle,setActivePage, updatePageState})(ContainerProfileComponentWithRouter);