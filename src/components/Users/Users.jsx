import User from "./User/User.jsx";
import s from "./users.module.css"

const Users = (props) =>{
    const {totalUsers, pageSize, currentPage} = props;
    const pagesCount = Math.ceil(totalUsers / pageSize);

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i)

    }
    return (
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.pages}>
                    {
                        pages.map(p => <button onClick={() => props.changePage(p)} className={currentPage === p && s.selected}>{p}</button>)
                    }
                    </div>
                    <div className={s.usersList}>
                        {
                            props.users
                                .map(user => (
                                    <User
                                        key={user.id}
                                        id={user.id}
                                        userName={user.name}
                                        followed={user.followed}
                                        uniqueUrlName={user.uniqueUrlName}
                                        input={user.input}
                                        updateRelationshipInput={props.updateRelationshipInput}
                                        setNewRelationship={props.setNewRelationship}
                                    />)
                                )
                        }
                        <button onClick={() => alert('hey')}>Show more</button>
                    </div>

                </div>
            </div>
        );

}

export default Users;