import s from './loginArea.module.css';
import {Link} from "react-router-dom";

const NoLogin = () =>{
    return (
        <div className={s.loginWrap}>
            <Link to={'/login'} className={s.toLogin}>Login</Link>
        </div>
    );
};

export default NoLogin;