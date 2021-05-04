import React from "react";
import s from './profile.module.css';
import Preloader from "../common/Preloader/Preloader";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";
import Job from "./Job/Job";
import Avatar from "./Avatar/Avatar";
const Profile = ({profile}) => {


    return !profile ? <Preloader/> :

        (<div className={s.profileDiv}>
            <div className={s.profile}>
                <Avatar photos={profile.photos} lookingForAJob={profile.lookingForAJob} lookingForAJobDescription={profile.lookingForAJobDescription}/>
                <div className={s.info}>
                    <div className={s.fullName}>{profile.fullName}</div>
                    <Contacts contacts={profile.contacts}/>
                    <About about={profile.aboutMe}/>
                    <Job description={profile.lookingForAJob ? profile.lookingForAJobDescription : false}/>
                </div>
            </div>
        </div>)
};

export default Profile;