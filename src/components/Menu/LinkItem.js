import {Link} from "react-router-dom";

const LinkItem = (props) =>{
    return <Link  to={props.path} className={props.className} >{props.title}</Link>;
};

export default LinkItem;