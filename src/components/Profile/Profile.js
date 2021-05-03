import s from "./profile.css";
import React from "react";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) =>{
    if (!props.profile){
        return <Preloader/>
    }
    console.log(props)
    return (<div className={s.profile}>
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small} alt="avatar"/>
            </div>
        </div>
    </div>)
}

export default Profile