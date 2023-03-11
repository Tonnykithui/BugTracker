import { Role } from "src/user/models/item.types";

export const menuLinks = [
    {
        path:'/',
        title:'Dashboard',
        icon:"BsClipboardData",
        users: [Role.PROJECTMANAGER, Role.DEVELOPER, Role.TESTER]
    },
    {
        path:'/project',
        title:"Projects",
        icon:"GrProjects",
        users: [Role.PROJECTMANAGER, Role.DEVELOPER, Role.TESTER]
    },
    {
        path:'/teams',
        title:'teams',
        icon:"AiOutlineSetting",
        users: [Role.PROJECTMANAGER]
    },
    {
        path:'/calendar',
        title:'Calendar',
        icon:"BsCalendar3",
        users: [Role.PROJECTMANAGER, Role.DEVELOPER, Role.TESTER]
    }
]