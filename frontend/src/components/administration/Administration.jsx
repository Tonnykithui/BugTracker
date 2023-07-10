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
        console.log('VALUE', value)
        console.log('SEARCH', search)
        const filteredUsers = data.filter((user) => {
            const fullName = `${user.firstname} ${user.lastname}`;
            return fullName.toLowerCase().includes(value.toLowerCase());
        });

        setFilteredUsers(filteredUsers);
    }

    console.log('FILTERED USERS ', filteredUsers);
    // console.log('FILTERED TEXT', search)

    return (
        <div className='administration'>
            <div className="admin-page">
                <Sidebar value={search} onChange={(e) => setFilteredUsers(e.target.value)} />
                
                <div className="employee-cards p-2">
                {/* <input type="text" name="" id="" value={search} onChange={handleInputChange} /> */}
                    <SearchBar value={search} onchange={handleInputChange}/>
                    <div className='admin'>
                        {
                            filteredUsers.map((user) => (
                                <Card user={user} />
                            ))
                        }
                    </div>
                    <div className='absolute top-2 right-6'>
                        <Button style={{ background: 'blue', padding: '4px', borderRadius: '8px', color: "white" }}>NEW USER</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Administration