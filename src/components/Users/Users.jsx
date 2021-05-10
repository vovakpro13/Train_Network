import s from "./users.module.css"
import Preloader from "../common/Preloader/Preloader";

import React from "react";
import User from "./User/User";
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
                        ? <>
                            {users.map(user =>
                                <User key={user.id} user={user} unfollow={unfollow} follow={follow}
                                      followingInProgress={followingInProgress}/>)
                            }
                            < Navigation {...props}/>
                        </>
                        : <Preloader/>
                }

            </div>


        </div>
    );

}

export default Users;