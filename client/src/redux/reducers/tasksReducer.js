import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

const inititalState = {
    tasks: [
        {
            id: nanoid(),
            text: 'Learn HTML and CSS',
            status: 'completed'
        },
        {
            id: nanoid(),
            text: 'Get good at JavaScript',
            status: 'completed'
        },
        {
            id: nanoid(),
            text: 'Master React',
            status: 'active'
        },
        {
            id: nanoid(),
            text: 'Discover Redux',
            status: 'active'
        },
        {
            id: nanoid(),
            text: 'Build amazing apps',
            status: 'active'
        },
    ],
    activeTasks: [
        {
            id: nanoid(),
            text: 'Master React',
            status: 'active'
        },
        {
            id: nanoid(),
            text: 'Discover Redux',
            status: 'active'
        },
        {
            id: nanoid(),
            text: 'Build amazing apps',
            status: 'active'
        }
    ],
    completedTasks: [
        {
            id: nanoid(),
            text: 'Learn HTML and CSS',
            status: 'completed'
        },
        {
            id: nanoid(),
            text: 'Get good at JavaScript',
            status: 'completed'
        }
    ],
    counters: {
        countTasks: 5,
        countActive: 3,
        countCompleted: 2,
    },
    filterStatus: 'all'
}

export const addTask = createAction('tasks/add', (text) => ({
    payload: {
        id: nanoid(),
        text,
        status: 'active'
    }
}))

export const deleteTask = createAction('tasks/delete', (id, status) => ({
    payload: {
        id: id,
        status: status
    }
}))

export const changeTaskStatus = createAction('tasks/changeStatus', (id, status) => ({
    payload: {
        id: id,
        status: status
    }
}))

export const changeFilterStatus = createAction('tasks/changeFilterStatus', (filterStatus) => ({
    payload: {
        filterStatus: filterStatus
    }
}))

// export const filterTask = createAction('tasks/filter', ())

const tasksReducer = createReducer(inititalState, (builder) => {
    builder.addCase(addTask, (state, action) => {
        if(action.payload.text !== ''){
            state.tasks = [
                ...state.tasks,
                action.payload
            ];
            state.counters = {
                ...state.counters,
                countTasks: ++state.counters.countTasks,
                countActive: ++state.counters.countActive
            };
        }
        else {
            alert('input is empty');
        }
    });

    builder.addCase(deleteTask, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        switch (action.payload.status) {
            case 'active': {
                state.counters = {
                    ...state.counters,
                    countTasks: --state.counters.countTasks,
                    countActive: --state.counters.countActive
                }
                break;
            }
            case 'completed': {
                state.counters = {
                    ...state.counters,
                    countTasks: --state.counters.countTasks,
                    countCompleted: --state.counters.countCompleted
                }
                break;
            }
        }
    });

    builder.addCase(changeTaskStatus, (state, action) => {
        state.tasks = state.tasks.map((task) => {
            if(task.id == action.payload.id){
                switch (action.payload.status) {
                    case 'active': {
                        return {
                            ...task,
                            status: 'completed'
                        }
                    }
                    case 'completed': {
                        return {
                            ...task,
                            status: 'active'
                        }
                    }
                }
            }
            else {
                return {
                    ...task
                }
            }
        });
        switch (action.payload.status) {
            case 'active': {
                state.counters = {
                    ...state.counters,
                    countActive: --state.counters.countActive,
                    countCompleted: ++state.counters.countCompleted
                }
                break;
            }
            case 'completed': {
                state.counters = {
                    ...state.counters,
                    countActive: ++state.counters.countActive,
                    countCompleted: --state.counters.countCompleted
                }
                break;
            }
        }
    });

    builder.addCase(changeFilterStatus, (state, action) => {
        console.log(state)
        state.filterStatus = action.payload.filterStatus;
    });
})

export default tasksReducer;