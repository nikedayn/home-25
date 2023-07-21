import {Link} from "react-router-dom";
import './menu_item.scss'

const menuItem = (props) => {
    return(
        <li className={`${props.class}_item`}>
            <Link to={props.toForLink} className={`${props.class}_link`}>{props.textForLink}</Link>
        </li>
    )
};

export default menuItem;