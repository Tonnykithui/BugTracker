import React from 'react';
import Card from './Card';
import './project.css';
import ProjectStatus from './ProjectStatus';

const Projects = () => {
  const projects = [
    {
        id:1,
        name:'Task mgt',
        progress:34,
        team:['Tonny', 'Skeet', 'Dreil'],
        deadline:'2 weeks'
    },
    {
        id:2,
        name:'Chat design app',
        progress:76,
        team:['Tonny', 'Skeet', 'Dreil'],
        deadline:'3 weeks'
    },
    {
      id:3,
      name:'Task mgt',
      progress:34,
      team:['Tonny', 'Skeet', 'Dreil'],
      deadline:'2 weeks'
  },
  {
      id:4,
      name:'Chat design app',
      progress:76,
      team:['Tonny', 'Skeet', 'Dreil'],
      deadline:'3 weeks'
  },
  {
    id:5,
    name:'Task mgt',
    progress:34,
    team:['Tonny', 'Skeet', 'Dreil'],
    deadline:'2 weeks'
},
{
    id:6,
    name:'Chat design app',
    progress:76,
    team:['Tonny', 'Skeet', 'Dreil'],
    deadline:'3 weeks'
},
{
  id:7,
  name:'Task mgt',
  progress:34,
  team:['Tonny', 'Skeet', 'Dreil'],
  deadline:'2 weeks'
},
{
  id:8,
  name:'Chat design app',
  progress:76,
  team:['Tonny', 'Skeet', 'Dreil'],
  deadline:'3 weeks'
},
{
  id:9,
  name:'Task mgt',
  progress:34,
  team:['Tonny', 'Skeet', 'Dreil'],
  deadline:'2 weeks'
},
{
  id:10,
  name:'Chat design app',
  progress:76,
  team:['Tonny', 'Skeet', 'Dreil'],
  deadline:'3 weeks'
},
{
  id:11,
  name:'Task mgt',
  progress:34,
  team:['Tonny', 'Skeet', 'Dreil'],
  deadline:'2 weeks'
},
{
  id:12,
  name:'Chat design app',
  progress:76,
  team:['Tonny', 'Skeet', 'Dreil'],
  deadline:'3 weeks'
}
  ]
  return (
    <div className='w-screen overflow-auto overflow-y-hidden h-screen bg-slate-300'>
        <div className='w-full flex flex-row gap-10'>
          <h2 className='font-semibold text-2xl'>Projects</h2>
          <div className='items-center'>
            <ProjectStatus />
          </div>
        </div>
        <div className='project'>
          <div className='project-list pb-4'>
              {
                  projects.map((project) => (
                      <Card key={project.id}/>
                  ))
              }
          </div>
          <div  className='bg-blue-600 text-white rounded-lg font-semibold absolute bottom-2 right-10 p-2'>
            <button>NEW PROJECT</button>
          </div>
        </div>
    </div>
  )
}

export default Projects