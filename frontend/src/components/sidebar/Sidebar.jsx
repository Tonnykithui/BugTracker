import React, { useState } from 'react';
import { BsClipboardData, BsCalendar3 } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { AiOutlineSetting, AiFillApi, AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GrProjects } from "react-icons/gr";
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const [mark, setMark] = useState();

    const menuLinks = [
        {
            id: 1,
            path: '/',
            title: 'Dashboard',
            icon: <BsClipboardData />
        },
        {
            id: 5,
            path: '/project',
            title: "Projects",
            icon: <GrProjects />
        },
        {
            id: 4,
            path: '/teams',
            title: 'Teams',
            icon: <AiOutlineSetting />
        }
    ]

    const navigate = useNavigate();

    const handleDivClick = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className='sidebar z-10 w-20'>
            <div className='logo'><AiFillApi />BOARDJET</div>
            <ul>
                {
                    menuLinks && menuLinks.map((menu) => (
                        <>
                            <Link
                                key={menu.id}
                                to={menu.path}
                                className={menu.path === mark ? 'menu-items bg-blue-400' : 'menu-items'}
                                onClick={() => { setMark(`${menu.path}`); console.log('MENU PATH', menu.path) }}

                            >
                                {menu.icon}{menu.title}
                            </Link>
                        </>
                    ))
                }
            </ul>
            <div className='logout' onClick={handleDivClick}>
                <div><AiOutlineLogout /></div>
                <div><h2>Logout</h2></div>
            </div>
        </div>
    )
}

export default Sidebar

{/* <div className='projects-menu-items'>
                                {
                                    childMenu && menu.projects && menu.projects.map((menu) => (
                                        <Link key={menu.id} to={menu.path} className='menu'>{menu.title}</Link>
                                    ))
                                }
                            </div> */}
                            // onClick={menu.projects ? () => handleOpenMenu() : ""}
                            // function handleOpenMenu() {
    //     setChildMenu(!childMenu)
    // }
    // className={menu.projects ? 'projects-menu' : 'menu-items'}
        // const [childMenu, setChildMenu] = useState(false);