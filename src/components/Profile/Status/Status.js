import React, {useState} from 'react';
import s from "./status.module.css";
import {updateProfileStatus} from "../../../Redux/ProfileReducer";

const Status = ({profileStatus, updateProfileStatus}) => {
    const [statusState, setStatusState] = useState({editMode: false, profileStatus});
    const editModeOn = () => {
        setStatusState({...statusState, editMode: true});
    }
    const editModeOf = () => {
        setStatusState({...statusState, editMode: false});
        statusState.profileStatus !== profileStatus && updateProfileStatus(statusState.profileStatus);
    }

    const setStatus = (ev) =>{
        setStatusState({...statusState, profileStatus: ev.target.value})
    }
    return (
        <div>
            {
                statusState.editMode || !profileStatus
                    ? <input type="text" autoFocus={true}
                             onBlur={() => editModeOf()}
                             onChange={(ev) => setStatus(ev)}
                             value={statusState.profileStatus}/>
                    : <p className={s.statusRead} onDoubleClick={() => editModeOn()}>
                        {statusState.profileStatus}
                    </p>
            }
        </div>
    );
};

export default Status;