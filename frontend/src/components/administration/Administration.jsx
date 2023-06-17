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
    const data = [
        {
            _id: "6404f0e5c14c6a1aad22a805",
            firstname: "sleek",
            lastname: "kenisie",
            email: "sk@gmail.com",
            phone: "0793011434",
            password: "sk",
            role: [
                "DEVELOPER"
            ]
        },
        {
            _id: "6406a9dca65c6cd811540d84",
            firstname: "sleek",
            lastname: "kenisie",
            email: "seek@gmail.com",
            phone: "079301143",
            password: "$2b$10$qS8Fjw8MD2AxqQLz.wy1fuMeAgQfq4gGhfg2y7a72PZDdxyBnCGO6",
            role: [
                "DEVELOPER"
            ]
        },
        {
            _id: "6404ebc64c69ae18f9531ba7",
            firstname: "super",
            lastname: "admin",
            email: "test@gmail.com",
            phone: "0793011434",
            password: "$2b$10$hKvqh.i1Pn7umJNPhlVMZ.JnfcSykvdQ9jrm1Wglbg22hBzovPYYS",
            role: [
                "PROJECTMANAGER"
            ]
        },
        {
            _id: "6404fd4f1729bcc8f8af4932",
            firstname: "tonny",
            lastname: "kithui",
            email: "tmk@gmail.com",
            phone: "0793011434",
            password: "123456",
            role: [
                "DEVELOPER"
            ]
        },
        {
            _id: "64783a4ff304df20cd461588",
            firstname: "tonny",
            lastname: "muli",
            email: "tk@gmail.com",
            phone: "07931143",
            password: "$2b$10$rZDjS3rYN6FEf..GXyfHTerCzSiVKEw3kPvgD5/o5sDNPMYWpBmSe",
            role: [
                "DEVELOPER"
            ]
        }
    ]

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