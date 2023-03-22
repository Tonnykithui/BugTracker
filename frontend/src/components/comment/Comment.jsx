import React from 'react'

const Comment = () => {
  return (
    <div className='bg-red-400'>
        <h2>Comments</h2>
        <ul>
          <li>
            <div className="comment-details">
              <h3>Tonny Kithui</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <h4>Tue, 21 2022</h4>
            </div>
            <div className="delete-btn">

            </div>
          </li>
        </ul>
    </div>
  )
}

export default Comment