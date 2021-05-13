import React, {useState} from 'react';
import s from "./status.module.css";
import {updateProfileStatus} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";


const Status = ({userId, id, profileStatus, updateProfileStatus}) => {
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
            {profileStatus ?
                statusState.editMode && +userId === +id
                    ? <input type="text" autoFocus={true}
                             onBlur={() => editModeOf()}
                             onChange={(ev) => setStatus(ev)}
                             value={statusState.profileStatus}/>
                    : <p className={s.statusRead} onDoubleClick={() => editModeOn()}>
                        {statusState.profileStatus}
                    </p>
                : <span>no status</span>
            }
        </div>
    );
};
const mapStateToProps = (state) =>{
    return {
        userId: state.authData.userId
    }
}
export default connect(mapStateToProps)(Status);