import React, { useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector(state => state.singleUserReducer);

  const hasUserData = user && user.user && user.user.data;

  return (
    <div className="h-screen flex bg-slate-300">
      <Sidebar />
      <div className="w-full h-5/6 mt-20 flex flex-row gap-2 p-2">
        <div className="absolute inset-0 bg-blue-500 h-40 z-0 "></div>
        {hasUserData && user.user.data.usersProjects && user.user.data.usersProjects.length ? (
          <>
            <div className="bg-white p-4 w-3/5 z-10">
              <p>{user.user.data.user.firstname}</p>
            </div>
            <div className="bg-white p-4 w-full z-10"></div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default User;


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
