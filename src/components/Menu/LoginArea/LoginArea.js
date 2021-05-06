import s from './loginArea.module.css';
import defaultAvatar from '../../../assets/svg/defaultAvatar.svg';
import {Link} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

const LoginArea = ({avatar, login, isFetching}) => {
    return isFetching
        ? <Preloader type={'login'}/>

        :<Link to={`/profile`}>
            <div className={s.loginWrap}>

                <img src={avatar || defaultAvatar} alt="avatar"/>
                <h4 className={s.login}>{login}</h4>
            </div>
        </Link>
    ;
};

export default LoginArea;