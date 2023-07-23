import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import Home from './components/home/Home';
import { useState } from 'react';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import Administration from './components/administration/Administration';
import Navbar from './components/navbar/Navbar';
import ProjDetails from './components/projectDetails/ProjDetails';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/HOC/ProtectedRoute';
import NotFound from './components/notfound/NotFound';
import User from './components/user/User';

function App() {
  const userAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
  window.onpopstate = function(event) {
    // Redirect to the login page to prevent access after logout
    window.location.replace('/login');
  };
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ProtectedRoute(Home, userAuthenticated)} />
        <Route path='/register' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Project' element={ProtectedRoute(Projects, userAuthenticated)} />
        <Route path='/task' element={ProtectedRoute(Board, userAuthenticated)} />
        <Route path='/teams' element={ProtectedRoute(Administration, userAuthenticated)} />
        <Route path='/Project/:id' element={ProtectedRoute(ProjDetails, userAuthenticated)} />
        <Route path='user/:id' element={ProtectedRoute(User, userAuthenticated)} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

{/* <Route path="/dashboard" element={ProtectedRoute(<Dashboard />, userAuthenticated)} isAuthenticated={userAuthenticated} /> */ }
{/* <Route path="/profile" element={ProtectedRoute(<Profile />, userAuthenticated)} isAuthenticated={userAuthenticated} /> */ }
  // const userAuthenticated = false;