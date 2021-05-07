import User from "./User/User.jsx";
import s from "./users.module.css"
import Preloader from "../common/Preloader/Preloader";
import left from '../../assets/svg/left-arrow.svg';
import right from '../../assets/svg/right-arrow.svg';
import React from "react";
import Navigation from "./Navigation";

const Users = (props) => {
    const {
        totalUsers, pageSize, currentPage,
        setPagesSlide, pages, isFetching, changeInputValue,
        followingInProgress, unfollow, follow, users
    } = props;

    return (
        <div className={s.wrapper}>
            <div className={s.usersList}>
                {
                    !isFetching
                        ? users.map(user =>
                            <User key={user.id}
                                  user={user}
                                  unfollow={unfollow}
                                  follow={follow}
                                  followingInProgress={followingInProgress}/>)
                        : <Preloader/>
                }
            </div>

           <Navigation {...props}/>

        </div>
    );

}

export default Users;