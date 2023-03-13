import React, { useState } from 'react'
import './nav.css';
import { GrProjects } from "react-icons/gr";
import { BsClipboardData, BsCalendar3 } from "react-icons/bs";
import { AiOutlineSetting, AiFillApi, AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaHamburger } from "react-icons/fa";


const Navbar = () => {
    const [childMenu, setChildMenu] = useState(false);
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

    function handleOpenMenu() {
        setChildMenu(!childMenu)
    }
    return (
        <div>
            {
                childMenu ? 
                menuLinks && menuLinks.map((menu) => (
                    <>
                        <div className='navbar'>
                            <Link key={menu.id} to={menu.path}
                                onClick={menu.projects ? () => handleOpenMenu() : ""}
                            >
                                {menu.icon}{menu.title}
                            </Link>
                        </div>
                    </>

                )) :
                <div className="closed-menu">
                    <FaHamburger className='ham-icon'/>
                </div>
            }
        </div>
    )
}

export default Navbar