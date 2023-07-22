import { connect } from "react-redux"
import { changeFilterStatus } from "../../../redux/reducers/tasksReducer";
import TasksFilter from "./TasksFilter";

const mapStateToProps = (state) => ({
    filter: state.tasksPage.filterStatus
})

const mapDispatchToProps = {
    changeFilter: changeFilterStatus
}

export default connect(mapStateToProps,mapDispatchToProps)(TasksFilter)