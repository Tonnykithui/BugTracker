import React from 'react';
import Draggable from '../draggable/Draggable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOtherUserTickets } from '../../redux';

const UserTickets = ({ user }) => {
  const tickets = useSelector(state => state.OtherUserTicketsReducer.tickets?.data);
 
  return (
    <div className='grid grid-cols-2 gap-2'>
      {(tickets !== null && tickets?.length > 0) ? (
        tickets.map(ticket => <Draggable info={ticket}  />)
      ) : (
        <h2>No Tickets Assigned</h2>
      )}
    </div>
  );
};

export default UserTickets;


// import React from 'react'
// import Draggable from '../draggable/Draggable'
// import { useSelector } from 'react-redux';


// const UserTickets = () => {
//     const tickets = useSelector(state => state.userTicketsReducer.tickets.data);
//     console.log(tickets)
//     return (
//         <div>
//             {
//                 tickets.length > 0 ? (

//                     tickets.map((ticket) => (
//                         <Draggable info={ticket} />
//                     ))

//                 )
//                     : (
//                         <>
//                             <h2>No Tickets Assigned</h2>
//                         </>
//                     )
//             }
//         </div>
//     )
// }

// export default UserTickets