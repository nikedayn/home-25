//import стилей
import './tasks_page.scss';

import React from 'react';
import {useRef} from 'react';

//import компонентов
import Section from '../Common/Section/Sectiom';
import Button from '../Common/Button/Button';
import CreateNote from './CreateTask/CreateTask';
import TasksList from './TasksList/TasksList';

const TasksPage = (props) => {
    let inputRef = useRef(null);
    let currentTaskList = [];

    switch(props.filter){
        case 'all': {
            currentTaskList = props.tasks
            break;
        }
        case 'active': {
            currentTaskList = props.tasks.filter(task => task.status === 'active');
            break;
        }
        case 'completed': {
            currentTaskList = props.tasks.filter(task => task.status === 'completed');
            break;
        }
        default: {
            currentTaskList = props.tasks
            break;
        }
    }

    const handleAddTask = () => {
       props.addTask(inputRef.current.value);
        inputRef.current.value = '';
    }

    const handleDeleteTask = (id, status) => {
        props.deleteTask(id, status);
    }

    const handleChangeTaskStatus = (id, status) => {
        props.changeTaskStatus(id, status);
    }

    return(
        <main>
            <Section key={`section${0}`} class='create_task' content={[
                <CreateNote key={'createNote'} inputRef={inputRef}/>
                ,<Button 
                    btnFunction={handleAddTask}
                    key={'createTaskBtn'}
                    class='add_task'
                    text='Add Task'
                />
            ]}/>
            <Section key={`section${1}`}  class='tasks' content={
                <TasksList
                    tasks={currentTaskList}
                    deleteFunction={handleDeleteTask}
                    changeStatusFunction={handleChangeTaskStatus}
                />
            }/>
        </main>
    )
};

export default TasksPage