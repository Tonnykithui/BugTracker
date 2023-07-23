import React from 'react'
import Priority from './Priority'
import Type from './TypeChart'
import Status from './Status'
import "./stats.css";
import TypeChart from './TypeChart';
import { useSelector } from 'react-redux';

const All = () => {
  const ticket = useSelector(state => state.userTicketsReducer?.tickets?.data);
  const type = useSelector(state => state.ticketTypesReducer.ticketTypes?.data);
  const status = useSelector(state => state.ticketStatusReducer.tickets?.data);
  const priority = useSelector(state => state.ticketPrioritytReducer.tickets.data)
  return (
    <>
      {
        type || status || priority ? (
          <div className='all'>
            <Priority ticket={priority} />
            <Status ticket={status} />
            <TypeChart type={type} />
          </div>
        ) : (
          <p>Loading</p>
        )
    }
    </>
  )
}

export default All