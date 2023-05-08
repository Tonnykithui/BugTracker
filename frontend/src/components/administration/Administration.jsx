import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Card from '../card/Card';
import './Admin.css';
import SearchBar from './SearchBar';
import Sidebar from '../sidebar/Sidebar';


const Administration = () => {

    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

    return (
        <div className='administration'>
            <div className="admin-page">
            <Sidebar />
            <div className="employee-cards">
                <SearchBar />
                <div className='admin grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 overflow-y-scroll h-screen w-full pb-10'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
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