import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setIsFetching, setProfilaData} from "../../Redux/ProfileReducer";
import axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`)
            .then(profile => {
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
        profile: state.profileData.profile
    }
}
export default connect(mapStateToProps,
    {setProfilaData, setIsFetching})(ProfileContainer);