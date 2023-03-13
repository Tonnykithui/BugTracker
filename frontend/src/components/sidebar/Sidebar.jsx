import React, { useState } from 'react';
import { BsClipboardData, BsCalendar3 } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { AiOutlineSetting, AiFillApi, AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GrProjects } from "react-icons/gr";
import './sidebar.css';

const Sidebar = () => {

    const [childMenu, setChildMenu] = useState(false);
    const menuLinks = [
        {
            id:1,
            path:'/',
            title:'Dashboard',
            icon:<BsClipboardData />
        },
        {
            id:5,
            path:'/project',
            title:"Projects",
            icon:<GrProjects />
        },
        {
            id:4,
            path:'/teams',
            title:'Teams',
            icon:<AiOutlineSetting />
        }
    ]

    function handleOpenMenu(){
        setChildMenu(!childMenu)
    }

  return (
    <div className='sidebar'>
        <div className='logo'><AiFillApi />BOARDJET</div>
        <ul>
            {
                menuLinks && menuLinks.map((menu) => (
                    <>
                    <Link key={menu.id} to={menu.path} className={menu.projects ? 'projects-menu': 'menu-items'}
                    onClick={menu.projects? () => handleOpenMenu() : ""}
                    >
                        {menu.icon}{menu.title}
                    </Link>
                    <div className='projects-menu-items'>
                    {
                        childMenu && menu.projects && menu.projects.map((menu) => (
                            <Link key={menu.id} to={menu.path} className='menu'>{menu.title}</Link>
                        ))
                    }
                    </div>
                    </>
                ))
            }
        </ul>
        <div className='logout'>
            <div><AiOutlineLogout /></div>
            <div><h2>Logout</h2></div>
        </div>
    </div>
  )
}

export default Sidebar