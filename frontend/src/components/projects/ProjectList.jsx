import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNewProjectModalSuc, fetchProject, fetchSingleProject, fetchUserProjects } from '../../redux';
import Button from '../button/Button';
import Card from './Card';
import ProjectStatus from './ProjectStatus';
import { useSelector } from 'react-redux';
import SearchBar from '../administration/SearchBar';
import { ToastContainer } from 'react-toastify';

export const buttonStyles = {
  borderRadius: '5px',
  opacity: '0.8',
  color: 'white',
  border: '2px solid blue',
  height: '30px',
  background: 'blue',
  padding: '2px'
}
const ProjectList = () => {
  const dispatch = useDispatch();
  const btnClicked = () => {
    console.log('Button clicked');
  }

  const projects = useSelector(state => state.projectFetchReducer.data.data);
  const [projectFiltered, setProjectsFiltered] = useState(projects);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProject());
    dispatch(fetchUserProjects())
  }, []);

  useEffect(() => {
    setProjectsFiltered(projects);
  }, [projects]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    const filteredProjects = projects.filter((project) => {
      return project.name.toLowerCase().includes(value.toLowerCase());
    });
    setProjectsFiltered(filteredProjects);
  }

  return (
    <>
      <div className='w-screen overflow-auto overflow-y-hidden h-screen bg-slate-300'>
        <h4 className='font-semibold pl-2 text-lg'>Projects</h4>
        <ToastContainer />
        <div className='w-full flex flex-row justify-between gap-10 p-2'>
          <SearchBar value={search} onchange={handleInputChange} />
          <div className='text-white rounded-lg font-semibold p-2'>
            <Button style={buttonStyles} onClick={() => dispatch(createNewProjectModalSuc('addNewProjectModal'))}>NEW</Button>
          </div>
        </div >
        <div className='project'>
          <div className='project-list pb-4 mb-10'>
            {
              projectFiltered?.map((project) => (
                <Card key={project._id} project={project} />
              ))
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default ProjectList