//import стилей
import './tasks_page.scss';

import React from 'react';
import {useRef} from 'react';

import { useDispatch, useSelector } from 'react-redux';

//import компонентов
import Section from '../Common/Section/Sectiom';
import Button from '../Common/Button/Button';
import CreateNote from './CreateTask/CreateTask';
import TasksList from './TasksList/TasksList';

//import actions
import { addTask } from '../../redux/reducers/tasksReducer';
import { deleteTask } from '../../redux/reducers/tasksReducer';
import { changeTaskStatus } from '../../redux/reducers/tasksReducer';

const TasksPage = (props) => {
    let inputRef = useRef(null);

    let filterStatus = useSelector((state => state.tasksPage.filterStatus));
    let tasks = useSelector((state => state.tasksPage.tasks));
    let activeTasks = useSelector((state => state.tasksPage.activeTasks));
    let completedTasks = useSelector((state => state.tasksPage.completedTasks));
    let dispatch = useDispatch();

    let filterFunction = () => {
        switch (filterStatus) {
            case 'all': {
                return tasks
            }
            case 'active': {
                return activeTasks
            }
            case 'completed': {
                return completedTasks
            }
        }
    }

    const handleAddTask = () => {
        dispatch(addTask(inputRef.current.value));
        inputRef.current.value = '';
    }

    const handleDeleteTask = (id, status) => {
        dispatch(deleteTask(id, status));
    }

    const handleChangeTaskStatus = (id, status) => {
        dispatch(changeTaskStatus(id, status));
    }

    return(
        <main>
            <Section key={`section${0}`} class='create_task' content={[
                <CreateNote key={'createNote'} inputRef={inputRef}/>
                ,<Button key={'createTaskBtn'} btnFunction={handleAddTask} class='add_task' text='Add Task'/>
            ]}/>
            <Section key={`section${1}`}  class='tasks' content={
                <TasksList changeStatusFunction={handleChangeTaskStatus} deleteFunction={handleDeleteTask} tasks={filterFunction()}/>
            }/>
        </main>
    )
};

export default TasksPage