//import стилей
import './header.scss';

//import компонентов
import TasksFilter from './TasksFilter/TasksFilter';
import TasksStatistic from './TasksStatistic/TasksSatistic';

//function componet
const Header = (props) => {
    return(
        <header>
            <div className="container">
                <TasksStatistic/>
                <TasksFilter/>
            </div>
        </header>
    )
};

export default Header;