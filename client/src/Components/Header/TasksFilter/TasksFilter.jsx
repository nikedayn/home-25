import s from './tasks_filter.module.scss';

import Button from '../../Common/Button/Button';

const TasksFilter = (props) => {
    const handleClick = (newFilterText) => {
        props.changeFilter(newFilterText)
    }

    return(
        <div className={s.filter_container}>
            <h2 className={s.filter_headline}>Filter by status</h2>
            <ul className={s.filter_menu}>
                <li className={s.filter_menu_item}>
                    <Button
                        isActive={props.filter === 'all'}
                        key={'filterBtn0'} 
                        class={'filter_menu'} 
                        text={'All'}
                        btnFunction={()=>{handleClick('all')}}
                    />
                </li>
                <li className={s.filter_menu_item}>
                    <Button
                        isActive={props.filter === 'active'}
                        key={'filterBtn1'}
                        class={'filter_menu'}
                        text={'Active'}
                        btnFunction={()=>{handleClick('active')}}
                    />
                </li>
                <li className={s.filter_menu_item}>
                    <Button 
                        isActive={props.filter === 'completed'}
                        key={'filterBtn2'}
                        class={'filter_menu'}
                        text={'Completed'}
                        btnFunction={()=>{handleClick('completed')}}
                    />
                </li>
            </ul>
        </div>
    )
};

export default TasksFilter;