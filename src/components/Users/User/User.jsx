import React from "react";
import s from "./user.module.css";
import avatar from '../../../assets/svg/defaultAvatar.svg';
import followImg from '../../../assets/svg/add.svg';
import unfollowImg from '../../../assets/svg/minus.svg';

function User({user, follow, unfollow, followingInProgress}) {
    return (

        <div className={s.userDiv}>
            <div className={s.avatar}>
                <div><img src={user.photos.small || avatar} alt="avatar"/></div>
                <div className={s.id}>#{user.id}</div>
            </div>
            <div className={s.infoBlock}>
                <div>
                    <div className={`${s.fatherHideRestText} ${s.nameBlock}`}>
                        <a href={`profile/${user.id}`}>
                            <h4 className={s.hideRestText}>{user.name}</h4>
                        </a>
                    </div>

                </div>
                <div className={s.fatherHideRestText}><p className={`${s.hideRestText} ${s.status}`}>{user.status || <span className={s.nostatus}>No status:(</span>}</p></div>
                <div>
                    {
                        user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} className={`${s.unfollow} ${s.btn}`} onClick={() => unfollow(user.id)}>
                                <img className={s.svgBtn} src={unfollowImg} alt="unfollow"/>  Unfollow
                        </button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} className={`${s.follow} ${s.btn}`} onClick={() => follow(user.id)}>
                               <img className={s.svgBtn} src={followImg} alt="follow"/> Follow
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default User;