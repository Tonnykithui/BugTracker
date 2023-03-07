import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Project from '../projects/Project';
import Sidebar from '../sidebar/Sidebar';
import Priority from '../stats/Priority';
import Status from '../stats/Status';
import Type from '../stats/Type';
import { fetchProjectThunk, fetchUsersFromEnd } from '../../redux';

const Home = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsersFromEnd());
    dispatch(fetchProjectThunk());
  }, []);

  const detailsFetchedLoading = useSelector(state => state.fetchProject.loading);
  const detailsFetchedError = useSelector(state => state.fetchProject.error);

  return detailsFetchedLoading ? (<h2>Loading</h2>) :
   detailsFetchedError ? (<h2>{detailsFetchedError}</h2>) : (
    <div className='w-full relative bg-slate-100'>
    <div className='w-full bg-blue-400 h-40 '>
        <div className='px-10'>
          <h2 className='text-white text-xl font-semibold'>DASHBOARD</h2>
        </div>
    </div>
    <Project />
    </div>
   )
};

export default Home;


