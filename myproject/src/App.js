import { Route, Routes, useLocation } from 'react-router-dom';
import Signup from './components/signup ';
import Login from './components/login';
import CreatePost from './components/createPost';
import Dashboard from './components/dashboard';

function App() {
  const location = useLocation();
  return (
    <Routes location={location}>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/createPost' element={<CreatePost/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>




    </Routes>
  );
}

export default App;
