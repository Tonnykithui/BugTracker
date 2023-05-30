
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

function App() {
  const userAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

  // const userAuthenticated = false;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ProtectedRoute(Home, userAuthenticated)} />
        {/* <Route path="/dashboard" element={ProtectedRoute(<Dashboard />, userAuthenticated)} isAuthenticated={userAuthenticated} /> */}
        {/* <Route path="/profile" element={ProtectedRoute(<Profile />, userAuthenticated)} isAuthenticated={userAuthenticated} /> */}
        <Route path='/register'element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/Project' element={ProtectedRoute(Projects, userAuthenticated)} />
        <Route path='/task' element={ProtectedRoute(Board, userAuthenticated)} />
        <Route path='/teams' element={ProtectedRoute(Administration, userAuthenticated)} />
        <Route path='/Project/:id' element={ProtectedRoute(ProjDetails, userAuthenticated)} />
      </Routes>
    </div>
  );
}

export default App;

// import './App.css';
// import Sidebar from './components/sidebar/Sidebar';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Projects from './components/projects/Projects';
// import Board from './components/board/Board';
// import Modal from './components/modal/Modal';
// import Home from './components/home/Home';
// import { useState } from 'react';
// import Register from './components/auth/register/Register';
// import Login from './components/auth/login/Login';
// import Administration from './components/administration/Administration';
// import Navbar from './components/navbar/Navbar';
// import ProjDetails from './components/projectDetails/ProjDetails';
// import { useSelector } from 'react-redux';

// function App() {
//   const userAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
  
//   const routes = [
//     {
//       path: '/',
//       element: <Home />,
//       private: false,
//     },
//     {
//       path: '/project',
//       element: <Projects />,
//       private: true,
//     },
//     {
//       path: '/task',
//       element: <Board />,
//       private: true,
//     },
//     {
//       path: '/teams',
//       element: <Administration />,
//       private: true,
//     },
//     {
//       path: '/project/:id',
//       element: <ProjDetails />,
//       private: true,
//     },
//     {
//       path: '/login',
//       element: userAuthenticated ? <Navigate to="/" /> : <Login />,
//       private: false,
//     },
//     {
//       path: '/register',
//       element: <Register />,
//       private: false,
//     },
//   ];

//   return (
//     <div className="App">
//       <div className='app-layout'>
//         {userAuthenticated && <Sidebar />}
//         {userAuthenticated && <Navbar />}
//         <Routes>
//           {routes.map(route => (
//             <Route
//               key={route.path}
//               path={route.path}
//               element={
//                 route.private && !userAuthenticated
//                   ? <Navigate to="/login" />
//                   : route.element
//               }
//             />
//           ))}
//         </Routes>
//       </div>
//       {/* <Modal /> */}
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Sidebar from './components/sidebar/Sidebar';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Projects from './components/projects/Projects';
// import Board from './components/board/Board';
// import Modal from './components/modal/Modal';
// import Home from './components/home/Home';
// import { useState } from 'react';
// import Register from './components/auth/register/Register';
// import Login from './components/auth/login/Login';
// import Administration from './components/administration/Administration';
// import Navbar from './components/navbar/Navbar';
// import ProjDetails from './components/projectDetails/ProjDetails';
// import { useSelector } from 'react-redux';

// function App() {

//   const userAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
//   const routes = [
//     {
//       path: '/',
//       exact: true,
//       component: <Home />,
//       private: true, // public route
//     },
//     {
//       path: '/Project',
//       exact: true,
//       component: <Projects />,
//       private: true
//     },
//     {
//       path: '/task',
//       exact: true,
//       component: <Board />,
//       private: true
//     },
//     {
//       path: '/teams',
//       exact: true,
//       component: <Administration />,
//       private: true
//     },
//     {
//       path: 'Project/:id',
//       exact: true,
//       component: <ProjDetails />,
//       private: true
//     }
//   ];

//   const navigate = useNavigate();

//   return (
//     <div className="App">
//       <div className='app-layout'>
//         {
//           userAuthenticated ?
//             (
//               <>
//                 <Sidebar />
//                 {/* <ProjDetails /> */}
//                 <Navbar />
//                 <Routes>
//                   {routes.map(route => (
//                     <Route
//                       key={route.path}
//                       path={route.path}
//                       exact={route.exact}
//                       render={() => {
//                         if (route.private && !userAuthenticated) {
//                           // redirect to login if user is not authenticated
//                           // return <Redirect to="/login" />;
//                           return navigate('/login')
//                         } else {
//                           // render the component for the route
//                           const Component = route.component;
//                           return <Component />;
//                         }
//                       }}
//                     />
//                   ))}
//                 </Routes>
//                 {/* <Routes>
//                   <Route path='/' element={<Home />} />
//                   <Route path='/Project' element={<Projects />} />
//                   <Route path='/task' element={<Board />} />
//                   <Route path='/teams' element={<Administration />} />
//                   <Route path='/Project/:id' element={<ProjDetails />}/>
//                 </Routes> */}

//               </>
//             )
//             :
//             (
//               <>
//                 <Routes>
//                   <Route path='/' element={<Login />} />
//                   <Route path='/register' element={<Register />} />
//                 </Routes>
//               </>
//             )
//         }
//       </div>
//       {/* <Modal /> */}
//     </div>
//   );
// }

// export default App;
