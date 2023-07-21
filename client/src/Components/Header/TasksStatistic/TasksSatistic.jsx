import { useSelector } from 'react-redux';
import s from './tasks_statistic.module.scss';

const TasksStatistic = (props) => {
    let counters = useSelector((state => state.tasksPage.counters));
    
    return(
        <article className={s.counters_container}>
            <h2 className={s.tasks_headline}>Tasks</h2>
            <p className={s.active_tasks_counter}>Active: {counters.countActive}</p>
            <p className={s.completed_tasks_counter}>Completed: {counters.countCompleted}</p>
        </article>
    )
};

export default TasksStatistic