import React from 'react';

const Comment = () => {
  return (
      <div className='py-2 my-2 px-3 shadow-md'>
          <div className='flex flex-row text-sm text-blue-500'>
              <p>Connor Lee</p>
              <p>23:00pm, May 23rd 2022</p>
          </div>
          <div className='text-slate-700 text-sm'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, neque voluptates aut totam laboriosam dolor labore, harum, debitis cumque expedita ipsam dicta delectus perspiciatis natus quod recusandae animi est atque?</p>
          </div>
      </div>
    );
};

export default Comment;
