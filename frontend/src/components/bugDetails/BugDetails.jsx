import React from 'react';
import BugOveralls from '../bugOveralls/BugOveralls';
import Comment from '../comment/Comment';
import './bugDetails.css';


const BugDetails = () => {
  return (
    <div className='bug-details-page'>
      <div className="left-page">
        <BugOveralls />
      </div>
      <div className="right-page">
        <Comment />
      </div>
    </div>
  )
}

export default BugDetails