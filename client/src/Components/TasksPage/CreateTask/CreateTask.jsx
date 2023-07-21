import s from './create_task.module.scss';

const CreateNote = (props) => {
    return(
        <input ref={props.inputRef} type="text" id={s.addTaskInput} placeholder="Enter task text..."/>
    )
};

export default CreateNote;