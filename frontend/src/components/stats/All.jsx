import React from 'react'
import Priority from './Priority'
import Type from './Type'
import Status from './Status'
import "./stats.css";


const All = () => {
  return (
    <div className='all'>
        <Priority />
        <Status />
        <Type />
    </div>
  )
}

export default All