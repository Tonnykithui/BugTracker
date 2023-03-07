import React from 'react';

const SearchBar = () => {
  return (
  <div className='h-14 w-full  p-1 mb-2'>
      <div>
          <input type="search" name="" id="" 
          className='outline-none h-11 bg-slate-200 rounded-md border-none 
          p-2 focus:transition focus:ease-in-out focus:duration-300 focus:w-80'
          placeholder='Search'
          />
      </div>
  </div>
  );
};

export default SearchBar;
