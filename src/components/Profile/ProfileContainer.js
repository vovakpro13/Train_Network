import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setIsFetching, setProfilaData} from "../../Redux/ProfileReducer";
import {setTitle,setActivePage} from "../../Redux/PageStateReducer";

class ProfileContainer extends React.Component {
    componentWillMount() {
        this.props.setTitle('Profile');
        this.props.setActivePage(2);
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    {setProfilaData, setIsFetching, setTitle,setActivePage})(ProfileContainer);