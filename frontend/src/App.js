import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Workspaces from './pages/Workspaces';
import Navigation from './components/Navigation';
import './App.css';
import NewWorkspace from './pages/NewWorkspace';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ViewWorkspacePage from './pages/ViewWorkspacePage';
import NewBoard from './pages/NewBoard';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Footer from './components/Footer';
import BoardPage from './pages/BoardPage';
import NewListForm from './components/boards/lists/NewListForm';
import NewListPage from './pages/NewListPage';
import CreateTaskForm from './components/boards/lists/CreateTaskForm';
import EditTask from './components/boards/lists/EditTask';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App" id='app'>
    <Router>
        <Navigation />
        
        <Container style={{minHeight:"80vh"}}>
          {/* This "Routes" component allows different pages to be rendered depending on the URL */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Show workspaces page */}
            <Route path="/workspaces" element={<Workspaces/>} />
            {/* Show specific workspace page */}
            <Route path="/workspaces/:id" element={<ViewWorkspacePage/>} />
            {/* Show new board form for specific workspace page */}
            <Route path="/workspaces/:id/createBoard" element={<NewBoard/>} />
            {/* Show new workspace page */}
            <Route path="/newWorkspace" element={<NewWorkspace/>} />
            {/* Show user login page */}
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/forgotPassword" element={<ForgotPassword/>} />
            <Route path='/register' element={<Register/>} />

            {/* Board page */}
            <Route path="workspaces/:id/:boardId" element={<BoardPage/>} />

            {/* Create list page */}
            <Route path="workspaces/:id/:boardId/createList" element={<NewListPage/>} />

            {/* New task page */}
            <Route path="workspaces/:id/:boardId/:listId/createTask" element={<CreateTaskForm/>} />
            {/* <Route path="workspaces/:id/:boardId/:taskID" element={<EditTask/>} /> */}

            <Route path="workspaces/:id/:boardId/:listId/:taskID/editTask" element={<EditTask/>} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
