import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import Home from './components/home/Home';
import { useState } from 'react';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import Administration from './components/administration/Administration';
import Navbar from './components/navbar/Navbar';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <div className='app-layout'>
        {
          loggedIn ?
            (
              <>
                <Sidebar />
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Project' element={<Projects />} />
                  <Route path='/task' element={<Board />} />
                  <Route path='/teams' element={<Administration />} />
                </Routes>

              </>
            )
            :
            (
              <>
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                </Routes>
              </>
            )
        }
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
