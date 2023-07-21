import s from './tasks_filter.module.scss';

import Button from '../../Common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterStatus } from '../../../redux/reducers/tasksReducer';

const TasksFilter = (props) => {
    let filterStatus = useSelector((state => state.tasksPage.filterStatus));
    let dispatch = useDispatch();

    const changeFilterStatus = (status) => {
        dispatch(changeFilterStatus(status));
    }

    return(
        <div className={s.filter_container}>
            <h2 className={s.filter_headline}>Filter by status</h2>
            <ul className={s.filter_menu}>
                <li className={s.filter_menu_item}>
                    <Button btnFunction={changeFilterStatus} filterStatus={filterStatus} key={'filterBtn0'} class={'filter_menu'} text={'All'}/>
                </li>
                <li className={s.filter_menu_item}>
                    <Button btnFunction={changeFilterStatus} filterStatus={filterStatus} key={'filterBtn1'} class={'filter_menu'} text={'Active'}/>
                </li>
                <li className={s.filter_menu_item}>
                    <Button btnFunction={changeFilterStatus} filterStatus={filterStatus} key={'filterBtn2'} class={'filter_menu'} text={'Completed'}/>
                </li>
            </ul>
        </div>
    )
};

export default TasksFilter;