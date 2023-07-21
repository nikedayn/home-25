import './button.scss';

const Button = (props) => {
    if(props.filterStatus === props.text.toLowerCase()){
        return (
            <button className={`${props.class}_btn actived`}>{props.text}</button>
        )
    }
    if(props.class === 'filter_menu'){
        return (
            <button onClick={()=>{
                props.btnFunction(props.text.toLowerCase())
            }} className={`${props.class}_btn`}>{props.text}</button>
        )
    }

    else{
        return (
            <button onClick={props.btnFunction} className={`${props.class}_btn`}>{props.text}</button>
        )
    }
}

export default Button;