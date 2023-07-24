import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import EditUser from './EditUser';
import UserProjects from './UserProjects';
import { fetchOtherUserProjects, fetchOtherUserTickets, fetchUserTickets } from '../../redux';
import UserTickets from './UserTickets';
import jwt_decode from 'jwt-decode';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import { openUserDeleteModal } from '../../redux/modal/actions/confirmUserDelete';



const User = () => {

  const user = useSelector(state => state.singleUserReducer);
  const [view, setView] = useState(1);
  const hasUserData = user && user.user && user.user.data;
  const showModal = useSelector(state => state.confirmUserDeleteReducer.modalOpen);

  const dispatch = useDispatch();

  if (hasUserData) {
    dispatch(fetchOtherUserProjects(user.user.data.user._id))
    dispatch(fetchOtherUserTickets(user.user.data.user._id))
  }

  return (
    <div className="h-screen flex bg-slate-300">
      <Sidebar />
      {showModal &&
        <Modal
          child='confirmDeleteUser'
        />
      }
      <div className="w-full h-5/6 mt-20 flex flex-row gap-2 p-2">
        <div className="absolute inset-0 bg-blue-500 h-40 z-0 "></div>
        {
          hasUserData && user.user.data.usersProjects ? (
            <>
              <div className="bg-white p-4 w-2/5 z-10">
                <UserProfile />
                <div className='flex flex-row justify-center items-center w-full h-fit'>
                  <Button
                    children='Delete User'
                    style={{ background: 'red', padding: '2px', borderRadius: '8px', color: 'white', marginTop: '20px' }}
                    onClick={(event) => { event.stopPropagation(); dispatch(openUserDeleteModal(user.user.data.user._id))}}
                  />
                </div>
              </div>
              <div className="h-full bg-white p-4 w-full z-10 flex flex-col">
                <div className="h-5 flex flex-row z-20 mb-5">
                  <div
                    className={view === 1 ? "edit z-40 w-full h-8 text-center bg-blue-300" : 'edit z-40 w-full text-center'}
                    onClick={() => setView(1)}>
                    <h2 className='font-semibold'>Edit</h2>
                  </div>
                  <div
                    className={view === 2 ? "projects z-20 w-full h-8 text-center bg-blue-300" : 'projects z-20 w-full text-center'}
                    onClick={() => setView(2)}>
                    <h2 className='font-semibold'>Projects</h2>
                  </div>
                  <div
                    className={view === 3 ? "tickets z-20 w-full h-8 text-center bg-blue-300" : "tickets z-20 w-full text-center"}
                    onClick={() => setView(3)}>
                    <h2 className='font-semibold'>Tickets</h2>
                  </div>
                </div>
                <div className="view-section h-full w-full overflow-y-hidden">
                  {
                    view == 1 ? (
                      <>
                        <EditUser userId={user.user.data.user._id} />
                      </>
                    ) :
                      view === 2 ? (
                        <>
                          <UserProjects />
                        </>
                      ) : (
                        <>
                          <UserTickets />
                        </>
                      )
                  }
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
      </div>
    </div>
  );
};

export default User;

{/* <BsThreeDotsVertical onMouseOver={() => setShowHiddenOptions(true)} />
                {
                    showHiddenOptions &&
                    <div className='flex flex-row text-sm gap-1 absolute right-0'>
                        <Button
                            children='Edit'
                            style={{ background: 'blue', padding: '2px', borderRadius: '8px', color: 'white' }}
                            onClick={
                                () => {
                                    // dispatch(fetchSingleProject(project._id));
                                    // dispatch(createNewProjectModalSuc('editProjectModal'))
                                }}
                        />
                        <Button
                            children='Delete'
                            style={{ background: 'red', padding: '2px', borderRadius: '8px', color: 'white' }}
                            onClick={(event) => { event.stopPropagation() }}
                        />
                    </div>
                } */}


  // useEffect(() => {
  //   let token = localStorage.getItem('token');
  //   const decodedToken = jwt_decode(token);
  //   dispatch(fetchOtherUserProjects(decodedToken.sub))
  //   dispatch(fetchOtherUserTickets(decodedToken.sub))
  // }, []);

  // console.log(user.user.data._id)

// import React, { useEffect } from 'react';
// import Sidebar from '../sidebar/Sidebar';
// import { useSelector } from 'react-redux';

// const User = () => {
//   const user = useSelector(state => state.singleUserReducer);

//   useEffect(() => {
//     // You can perform any additional actions here when the user state changes
//     // For example, you can fetch additional data or update the component state
//     // based on the changes in the user state.
//   }, [user]);

//   return (
//     <div className="h-screen flex bg-slate-300">
//       <Sidebar />
//       <div className="w-full h-5/6 mt-20 flex flex-row gap-2 p-2">
//         <div className="absolute inset-0 bg-blue-500 h-40 z-0 "></div>
//         {user.user.data && user.user.data.usersProjects && user.user.data.usersProjects.length ? (
//           <>
//             <div className="bg-white p-4 w-3/5 z-10">
//               <p>{user.user.data.user.firstname}</p>
//             </div>
//             <div className="bg-white p-4 w-full z-10"></div>
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default User;
