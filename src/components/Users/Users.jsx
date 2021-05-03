import User from "./User/User.jsx";
import s from "./users.module.css"

const Users = (props) =>{
    const {totalUsers, pageSize, currentPage} = props;
    const pagesCount = Math.ceil(totalUsers / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    return (
            <div className={s.wrapper}>
                <div className={s.usersList}>
                    {props.users.map(user => <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow}/>)}
                </div>
                <div className={s.pages}>
                    <h4>Pages</h4>
                    {
                        pages.map(p => <button onClick={() => props.changePage(p)} className={currentPage === p && s.selected}>{p}</button>)
                    }
                </div>
            </div>
        );

}

export default Users;