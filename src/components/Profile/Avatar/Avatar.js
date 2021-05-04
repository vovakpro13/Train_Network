import s from "./avatar.module.css";
import binocular from '../../../assets/svg/binoculars.svg';
import notFinding from '../../../assets/svg/do-not-disturb-sign.svg';
import defaultAvatar from '../../../assets/svg/defaultAvatar.svg';

const Avatar = ({photos, lookingForAJob, lookingForAJobDescription}) =>{
    return (
        <div className={s.avatar}>
            {<img className={s.ava} src={photos.small || defaultAvatar} alt="avatar"/>}
            <div className={s.findingDiv}>
                {<img className={s.finding} src={lookingForAJob  ? binocular : notFinding} alt="finding"/>}
            </div>
        </div>
    );
};

export default Avatar;