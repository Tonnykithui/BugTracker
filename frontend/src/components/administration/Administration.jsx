import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Card from '../card/Card';
import './Admin.css';
import SearchBar from './SearchBar';
import Sidebar from '../sidebar/Sidebar';


const Administration = () => {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const data = useSelector(state => state.usersFetchReducer.users.data)

    return (
        <div className='administration'>
            <div className="admin-page">
                <Sidebar />
                <div className="employee-cards p-2">
                    <SearchBar />
                    <div className='admin'>
                        {
                            data.map((user) => (
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