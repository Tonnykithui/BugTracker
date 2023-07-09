import React from 'react';
import Card from '../projects/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOtherUserProjects } from '../../redux';

const UserProjects = () => {
  const projects = useSelector(state => state.OtherUserProjectsReducer.projects.data);
  const isEmpty = projects.length;
  console.log('IS EMPTY',isEmpty)
  return (
    <div className='grid grid-cols-2 gap-2 bg-slate-100 p-2 h-full overflow-auto'>
      {isEmpty == 0 ? (
        <div className='flex justify-center items-center'>
          <h1>No projects</h1>
        </div>
      ) : (
        projects.map(item => <Card project={item} />)
      )}
    </div>
  );
};

export default UserProjects;


// import React from 'react'
// import Card from '../projects/Card'
// import { useSelector } from 'react-redux';


// const UserProjects = () => {
//     const projects = useSelector(state => state.OtherUserProjectsReducer.projects.data);
//     return (
//         <div className='grid grid-cols-2 gap-2 bg-slate-100 p-2 h-full overflow-auto'>
//             {
//                 projects.length > 0 ? projects.map((item) => (
//                     <Card project={item} />
//                 )) : (<div className='flex justify-center items-center'><h1>No projects</h1></div>)
//             }
//         </div>
//     )
// }

// export default UserProjects