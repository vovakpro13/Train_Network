import React from "react";
import s from "./user.module.css";

function User(props) {
    const uniqueUrlName = React.createRef();
    const updateText = () => props.updateRelationshipInput(props.id, uniqueUrlName.current.value);
    const setNewRelationShip = () => props.setNewRelationship(props.id);

    return (
        <div className={s.userDiv}>
            <div><a href={`/profile/${props.id}`}>{props.userName}</a></div>
            <div>{props.followed.toString()}</div>
            <div>{props.country}</div>
            <div>
                <span><b>Relationships:</b> {props.uniqueUrlName}</span><br/>
                <input ref={uniqueUrlName} onChange={updateText} type="text" value={props.input}/>
                <button onClick={setNewRelationShip}>Set</button>
            </div>
        </div>
    );
}

export default User;