import s from './button.module.scss'

const Button = (props) => {
    return (
        <button onClick={props.btnFunction} className={`${s.filter_menu_btn} ${props.isActive && s.actived}`}>{props.text}</button>
    )
}

export default Button;