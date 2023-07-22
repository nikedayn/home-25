//header
import Header from "./Components/Header/Header";

//страницы сайта
import TasksPage from "./Components/TasksPage/TasksPage";

//footer
import Footer from "./Components/Footer/Footer";

//для новых страниц
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TasksContainer from "./Components/TasksPage/TasksContainer";

const App = () => {
    return(
        <div className="wraper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<TasksContainer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;