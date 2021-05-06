import s from './menu.module.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/svg/logo.svg'
import LinkItem from "./LinkItem";
import LoginAreaContainer from "./LoginArea/LoginAreaContainer";
const Menu = (props) => {
    return (
        <div className={s.menu}>
            <div className={s.logo}>
                <img src={logo} alt="network logo"/>
                <h4><Link to={'/'}>{props.projectName}</Link></h4>
            </div>

            <div><LoginAreaContainer/></div>

            <div className={s.links}>
                {
                    props.links.map(link => <LinkItem
                        key={link.id}
                        id={link.id}
                        path={link.path}
                        title={link.title}
                        className={link.id === props.activePage ? s.active : null}/>
                    )
                }
            </div>
        </div>
    );
};

export default Menu;