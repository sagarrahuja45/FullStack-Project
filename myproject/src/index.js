import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './components/signup /signup';
import reportWebVitals from './reportWebVitals';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreatePost from './components/createPost/createPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Signup}/>
      <Route path='/login' Component={Login}></Route>
      <Route path='/dashboard' Component={Dashboard}/>
      <Route path='/create-post' Component={CreatePost}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
