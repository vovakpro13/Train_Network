import s from "./profile.css";
import React from "react";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) =>{
    return !props.profile ?  <Preloader/> :

     <div className={s.profile}>
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small} alt="avatar"/>
            </div>
        </div>
    </div>
}

export default Profile