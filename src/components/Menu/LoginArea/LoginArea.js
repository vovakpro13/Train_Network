import s from './loginArea.module.css';
import defaultAvatar from '../../../assets/svg/defaultAvatar.svg';
import {Link, Redirect} from "react-router-dom"
import logOutImg from '../../../assets/svg/error.svg';

const LoginArea = ({avatar, login, logOut, history}) => {
     const out =  () =>{
         logOut().then(succesOut => succesOut && history.push('/'));
    }

    return (
        <Link to={`/profile`}>
            <div className={s.loginWrap}>
                <img className={s.ava} src={avatar || defaultAvatar} alt="avatar"/>
                <h4 className={s.login}>{login}</h4>
                <img className={s.logout} src={logOutImg} alt="out" onClick={() => out()}/>
            </div>
        </Link>
    );

};

export default LoginArea;