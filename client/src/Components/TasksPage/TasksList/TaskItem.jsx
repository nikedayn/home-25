import s from './task_item.module.scss';

const TaskItem = (props) => {
    return(
        <li className={`${s.tasks_menu_item}`}>
            <div className={s.checkbox_and_text}>
                <input defaultChecked={props.taskInformation.status == 'completed' ? true : false} onClick={()=>{props.changeStatusFunction(props.taskInformation.id, props.taskInformation.status)}} type="checkbox" name="" className={s.tasks_menu_input}/>
                <p className={s.tasks_menu_text}>{props.taskInformation.text}</p>
            </div>
            <button onClick={()=>{
                props.deleteFunction(props.taskInformation.id, props.taskInformation.status)
            }} className={s.tasks_menu_btn}>
                <span></span>
            </button>
        </li>
    )
};

export default TaskItem;