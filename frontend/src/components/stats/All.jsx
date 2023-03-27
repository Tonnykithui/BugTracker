import React from 'react'
import Priority from './Priority'
import Type from './TypeChart'
import Status from './Status'
import "./stats.css";
import TypeChart from './TypeChart';


const All = () => {
  return (
    <div className='all'>
        <Priority />
        <Status />
        <TypeChart />
    </div>
  )
}

export default All