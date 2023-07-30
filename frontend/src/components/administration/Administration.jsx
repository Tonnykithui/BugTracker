import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Card from '../card/Card';
import './Admin.css';
import SearchBar from './SearchBar';
import Sidebar from '../sidebar/Sidebar';


const Administration = () => {

    const data = useSelector(state => state.usersFetchReducer.users.data);
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(data);

    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    let newUserData = data;

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearch(value);
        const filteredUsers = data.filter((user) => {
            const fullName = `${user.firstname} ${user.lastname}`;
            return fullName.toLowerCase().includes(value.toLowerCase());
        });

        setFilteredUsers(filteredUsers);
    }

    return (
        <div className='administration'>
            <div className="admin-page">
                <Sidebar />
                <div className="employee-cards p-2">
                <h4 className='font-semibold pl-2 text-lg'>Team</h4>
                    <SearchBar value={search} onchange={handleInputChange} />
                    <div className='admin pb-10 pt-2'>
                        {
                            filteredUsers.map((user) => (
                                <div>
                                    <Card user={user} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Administration

{/* <div className='absolute top-2 right-6'>
                        <Button style={{ background: 'blue', padding: '4px', borderRadius: '8px', color: "white" }}>NEW USER</Button>
                    </div> */}