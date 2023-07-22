import { connect } from "react-redux"
import { addTask, changeFilterStatus, changeTaskStatus, deleteTask } from "../../redux/reducers/tasksReducer"
import TasksPage from "./TasksPage"

const mapStateToProps = (state) => ({
    filter: state.tasksPage.filterStatus,
    tasks: state.tasksPage.tasks
})

const mapDispatchToProps = {
    addTask: addTask,
    deleteTask: deleteTask,
    changeTaskStatus: changeTaskStatus,
    changeFilterStatus: changeFilterStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage)