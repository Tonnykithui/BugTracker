import React from 'react'
import Button from '../button/Button';
import Card from '../card/Card';
import './Admin.css';
import { BsSearch } from "react-icons/bs"


const Administration = () => {
    return (
        <div className='administration'>
            <div className='search-bar'>
                <BsSearch className='search-bar-icon'/>
                <input type="text" name="" id="" placeholder='Search...' />
                <h2>Go</h2>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 overflow-y-scroll h-screen w-full'>
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
            <div className='absolute bottom-5 right-5'>
                <Button style={{ background: 'red', padding: '2px', borderRadius: '50%', color: "white", }}>+</Button>
            </div>
        </div>
    )
}

export default Administration