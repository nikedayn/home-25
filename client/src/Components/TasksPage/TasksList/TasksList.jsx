import s from './tasks_list.module.scss';
import TaskItem from './TaskItem';

import { useMemo } from 'react';

const TasksList = (props) => {
    console.log(props.tasks);
    let taskRender = useMemo(() => (
        props.tasks.map((taskInformation, index) => {return <TaskItem changeStatusFunction={props.changeStatusFunction} deleteFunction={props.deleteFunction} key={`task${index}`} taskInformation={taskInformation}/>})
    ), [props.tasks]);
    return(
        <ul className={s.notes_list}>
            {taskRender}
        </ul>
    )
};

export default TasksList;